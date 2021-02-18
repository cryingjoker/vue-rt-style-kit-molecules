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
    oldPopup: {
      type: Boolean,
      dafult: false
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
    }else{
      this.unbindStore();
    }
  },
  methods: {
    bindStore() {
      if (this.name) {
        popupStore.setSlot(this.name, this.updateSlots)
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
    triggerClose(){
      if(this.isAntivirus) {
        this.removeActive();
      }else{
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

      const close = this.$el.querySelector('.rt-close');
      if (close) {
        close.addEventListener('click', this.triggerClose, {passive: true});
      }
    },
    unbindCloseButton() {
      const close = this.$el.querySelector('.rt-close');
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
    if (this.showOnDesktop) {
      wrapperClasses = "rt-popup-wrapper";
      popupClasses = "rt-popup";
    } else {
      wrapperClasses = "rt-popup-wrapper-td";
      popupClasses = "rt-popup-td";
    }
    if (this.popupWrapperClasses) {
      wrapperClasses += " " + this.popupWrapperClasses.trim();
      popupClasses += " " + this.popupClasses.trim();
    }
    if (this.isActive) {
      wrapperClasses += " rt-popup-wrapper-td--is-active";
    }

    if(this.isAntivirus) {
      return <div class={wrapperClasses} onClick={this.clickOutside}>
        <div class={popupClasses} onMouseenter={this.setHover} onMouseleave={this.removeHover}
             onMousemove={this.setHover}>
          {this.$slots.default}
        </div>
      </div>;
    }

    if(this.isActive){
      return <div ref="wrapper" class={wrapperClasses} onClick={this.clickOutside}>
        <div class={popupClasses} onMouseenter={this.setHover} onMouseleave={this.removeHover}
             onMousemove={this.setHover}>
          <div class="rt-popup-close rt-sys-icon-hover--orange" onClick={this.triggerClose}>
            <rt-system-icons name="close large"></rt-system-icons>
          </div>
          {this.$slots.default}
        </div>
      </div>;
    }
    return null


  }
};
</script>
