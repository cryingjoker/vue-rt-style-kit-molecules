<script type="text/jsx">
import {popupStore} from "./PopupStore";

export default {
  name: "RtPopup",
  props: {
    name: {
      type: String,
      default: null,
      required: true
    },
    popupWrapperClasses: {
      type: String,
      default: ""
    },
    popupClasses: {
      type: String,
      default: ""
    },
    preventDefaultScrollOnActive: {
      type: Boolean,
      default: false
    },
    showOnDesktop: {
      type: Boolean,
      default: true
    },
    hash: {
      type: String,
      default: ''
    },
    ga: {
      type: Object,
      default: null
    },
    gaClose: {
      type: Object,
      default: null
    },
    size:{
      type: Number,
      default: 8
    }

  },
  data() {
    return {
      isActive: false,
      isAntivirus: false
    };
  },
  mounted() {
    if (location.href.search('/homeinternet/antiviruses') > 0) {
      this.isAntivirus = true;
    }
    if (this.isAntivirus) {
      this.addEventListener();
      this.bindCloseButton();
    } else {
      this.bindStore();
      this.checkUrl()
    }
  },
  updated() {
    if (this.isAntivirus) {
      this.removeEventListener();
      this.addEventListener();
      this.unbindCloseButton();
      this.bindCloseButton();
    }
  },
  beforeDestroy() {
    if (this.isAntivirus) {
      this.removeEventListener();
    } else {
      this.unbindStore();
    }
  },
  methods: {
    checkUrl() {
      const hash = global.location.hash.replace('#', '');
      if (this.hash.length > 0 && hash.length > 0 && hash == this.hash) {
        popupStore.setActiveId(this.name)
      }
    },
    bindStore() {
      if (this.name) {
        popupStore.setSlot(this.name, this.updateSlots, this.ga,this.gaClose)
      }
    },
    unbindStore() {
      if (this.name) {
        popupStore.removeSlots(this.name)
      }
    },
    updateSlots() {
      this.getSlots();
    },
    getSlots() {
      const activeId = popupStore.getActiveId().activeId
      if (activeId == this.name) {
        this.setActive()
      } else {
        this.removeActive()
      }
    },
    setActive() {
      if (!this.isActive) {
        this.isActive = true;
        this.addKeyBindind();
        this.bindPageScroll();
      }

    },
    removeActive() {
      if (this.isActive) {
        this.$refs['wrapper'].classList.add('rt-popup-wrapper-td--is-closing');
        setTimeout(() => {
          this.$refs['wrapper'].classList.remove('rt-popup-wrapper-td--is-active');

          setTimeout(() => {
            this.isActive = false;
            this.$refs['wrapper'].classList.remove('rt-popup-wrapper-td--is-closing');

            this.removeKeyBindind();
            this.unbindPageScroll();
          }, 50);
        }, 300);
      }
    },
    triggerClose() {
      if (this.isAntivirus) {
        this.removeActive();
      } else {
        popupStore.setActiveId(null)
      }
    },
    keyPress(e) {
      if (e.keyCode === 27) {
        this.triggerClose();
      }
    },
    clickOutside() {
      if (!this.$options.isHover) {
        this.triggerClose()
      }
    },
    stopScroll(e) {
      e.preventDefault();
      return false;
    },
    bindPageScroll() {
      document.body.style.overflow = 'hidden';
    },
    unbindPageScroll() {
      document.body.style.overflow = null;
    },
    addKeyBindind() {
      window.addEventListener('keydown', this.keyPress, {passive: false});
    },
    removeKeyBindind() {
      window.removeEventListener('keydown', this.keyPress);
    },
    bindCloseButton() {
      const close = this.$el?.querySelector('.rt-close');
      if (close) {
        close.addEventListener('click', this.triggerClose, {passive: true});
      }
    },
    unbindCloseButton() {
      const close = this.$el?.querySelector('.rt-close');
      if (close) {
        close.addEventListener('click', this.triggerClose, {passive: true});
      }
    },
    addEventListener() {
      window.addEventListener('open-popup-' + this.name, this.setActive, {passive: false});
      window.addEventListener('close-popup-' + this.name, this.triggerClose, {passive: false});
    },
    removeEventListener() {
      window.removeEventListener('open-popup-' + this.name, this.setActive);
      window.removeEventListener('close-popup-' + this.name, this.triggerClose);
    },
    setHover() {
      if (!this.$options.isHover) {
        this.$options.isHover = true;
      }

    },
    removeHover() {
      this.$options.isHover = false;
    }
  },
  render: function (h) {
    let wrapperClasses;
    let popupClasses;

      wrapperClasses = "rt-popup-wrapper";
      popupClasses = "rt-popup";
    if (this.popupWrapperClasses) {
      wrapperClasses += " " + this.popupWrapperClasses.trim();
      popupClasses += " " + this.popupClasses.trim();
    }
    if (this.isActive) {
        wrapperClasses += " rt-popup-wrapper--is-active";
    }
    if(this.isAntivirus) {
      return <div class={wrapperClasses} onClick={this.clickOutside}>
        <div class={popupClasses} onMouseenter={this.setHover} onMouseleave={this.removeHover}
             onMousemove={this.setHover}>
          {this.$slots.default}
        </div>
      </div>;
    }
    if (this.isActive) {
      const emptySize = parseInt((12 - this.size)/2)
      return <div ref="wrapper" class={wrapperClasses} onClick={this.clickOutside}>
        <div class="rt-popup-inner">
        <div class="rt-container d-inine-block">
          <rt-col>
            <rt-row>
              <rt-col size={emptySize} t-hide={true}></rt-col>
              <rt-col size={this.size} tablet-size={6}>

                  <div class={popupClasses} onMouseenter={this.setHover} onMouseleave={this.removeHover}
                       onMousemove={this.setHover}>
                    <div class="rt-popup-close rt-sys-icon-hover--orange" onClick={this.triggerClose}>
                      <rt-system-icons name="close large"></rt-system-icons>
                    </div>
                    {this.$slots.default}
                </div>
              </rt-col>
            </rt-row>
          </rt-col>
        </div>
        </div>
      </div>;
    }
    return null


  }
};
</script>
