<script type="text/jsx">
import './Popover.styl'
export default {
  name: "RtPopover",
  props: {
    vertical: {
      type: String,
      default: 'center'
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    mdVertical: {
      type: String,
      default: ''
    },
    mdHorizontal: {
      type: String,
      default: ''
    },
    autoPosition: {
      type: Boolean,
      default: true
    },
    stopAutoOnMd: {
      type: Boolean,
      default: false
    },
    containerId:{
      type: String,
      default: ''
    },
    iconName:{
      type: String,
      default:'help stroke'
    },
    stopOpacity:{
      type: Boolean,
      default: false
    },
    enableHorizontalValueCalculation:{
      type: Boolean,
      default: false
    },
    enableAppendToBody:{
      type: Boolean,
      default: false
    },
    enableGaPush:{
      default: true,
      type: Boolean
    },
    gaEvent:{
      type:String,
      default: 'b2с'
    },
    gaType:{
      type: String,
      default: 'popover_click',
    },
    gaValue:{
      type: String,
      default: '',
    }

  },
  data: () => ({
    isActive: false,
    close: false,
    localVertical: '',
    localHorizontal: '',
    resizeHasBinding: false,
    calculationX: 0,
    pageX: 0,
    pageY: 0,

  }),
  watch:{
    vertical(newVal,oldVal){
      if(oldVal != newVal){
        this.localVertical = newVal
      }
    },
    horizontal(newVal,oldVal){
      if(oldVal != newVal){
        this.localHorizontal = newVal
      }
    },
    autoPosition(newVal,oldVal){
      if(newVal != oldVal){
        if(newVal){
          if(!this.resizeHasBinding) {
            this.bindResize();
          }
        }else{
          if(this.resizeHasBinding){
            this.setLocalValues();
            this.unbindResize();
          }
        }
      }
    }
  },

  mounted: function () {
    this.setLocalValues()
    // if(this.autoPosition){
    //   this.$nextTick(()=> {
    //     this.bindResize()
    //     this.onResize()
    //   })
    // }
  },
  beforeDestroy() {
    if(this.autoPosition){
      this.unbindResize()
    }
  },
  methods: {
    appendToBody(){
      this.$nextTick(()=> {
        const popover = this.$refs.popoverBody;
        popover.classList.add('rt-popover-active')
        popover.classList.add('rt-popover-appended')
        popover.style.left = this.pageX + 'px'
        popover.style.top = this.pageY  + window.scrollY + 'px'
        popover.setAttribute('id', 'popover-' + this._uid)
        document.body.append(popover);
      })
    },
    setLocalValues(){
      this.localVertical = this.vertical
      this.localHorizontal = this.horizontal
    },
    bindClick() {
      document.addEventListener('click', () => {
        if (this.hover) {
          this.bindClick()
        } else {
          this.deactivate();
        }
      }, {once: true})
    },
    bindSwipe(){
      document.addEventListener('touchend', () => {
          this.deactivate();
      }, {once: true})
    },
    bindScroll(){
      window.addEventListener('wheel', () => {
          this.deactivate();
      }, {once: true})
    },
    clickFn() {
      if (!this.hover) {
        this.deactivate()
      }
    },
    mouseenter() {
      this.hover = true
    },
    mouseleave() {
      this.hover = false
    },
    activate() {
      this.isActive = true
      this.hover = true
      if(this.enableGaPush && this.gaValue.length > 0){
        if (!window.dataLayer) {
          window.dataLayer = [];
        }
        window.dataLayer.push({
          event: this.gaEvent,
          type: this.gaType,
          value: this.gaValue,
        });
      }
      this.$nextTick(() => {
        this.onResize()
        this.bindClick();
        this.bindScroll()
        this.bindSwipe()
        if(this.enableAppendToBody){
          this.appendToBody()
        }
      })
    },
    deactivate() {
      this.close = true
      let popover;
      if(this.enableAppendToBody){
        popover = document.querySelector('#popover-'+this._uid)
        if(popover) {
          popover.classList.remove('rt-popover-active')
        }
      }
      setTimeout(() => {
        this.close = false
        this.isActive = false
        this.hover = false
        if(this.enableAppendToBody && popover){
          popover.remove()
        }
      }, 100)
    },
    bindResize(){
      this.resizeHasBinding = true
      window.addEventListener('resize',this.onResize)
    },
    unbindResize(){
      this.resizeHasBinding = false
      document.removeEventListener('resize',this.onResize)
    },
    onResize() {
      const rects = this.$refs.popover.getClientRects();

      if (rects.length > 0) {
        let {top, left, x, y} = rects[0]
        this.pageX = x
        this.pageY = y
        let wrapperHeight = window.innerHeight
        let wrapperWidth = window.innerWidth
        let windowWidth = window.innerWidth
        let bodyHeight = this.$refs.popoverBody ? this.$refs.popoverBody.clientHeight : 0
        if (x && !left) {
          left = x
        }
        if (y && !top) {
          top = y
        }
        let wrapRect = []
        if (this.containerId.length > 0) {
          const wrap = document.querySelector('#' + this.containerId);
          if (wrap) {
            wrapRect = wrap.getClientRects();
            if(wrapRect.length > 0) {
              top -= wrapRect[0].top
              // left -= wrapRect[0].left
            }
            wrapperHeight = wrap.clientHeight
            wrapperWidth = wrap.clientWidth
          }
        }


        if (windowWidth < 769 && this.stopAutoOnMd) {
          this.setLocalValues()
        } else {
          let xStart = left - 125 - 12
          if(wrapRect.length > 0){
            xStart -= wrapRect[0].left
          }
          let xEnd = left + 250 + 12
          if(wrapRect.length > 0){
            xEnd -= wrapRect[0].left;
          }
          if(xStart < 0 && xEnd > wrapperWidth && this.enableHorizontalValueCalculation && wrapRect){
            this.calculationX = wrapRect[0].left - this.$refs.popover.getClientRects()[0].left
          }


          if (xStart + 20 > 0 && xEnd - 20 < wrapperWidth) {
            this.localHorizontal = 'center'
          } else {
            if (xStart > 0) {
              this.localHorizontal = 'left'
            } else {
              this.localHorizontal = 'right'
            }
          }
          if (top > bodyHeight) {
            this.localVertical = 'top'
          } else {
            if (top - bodyHeight / 2 > 0 && this.localHorizontal != 'center') {
              this.localVertical = 'center'

            } else {
              this.localVertical = 'bottom'
            }
          }
        }
      }
    }
  },
  render(h) {
    const renderIcon = () => {
      if (this.$slots.customIcon) {
        return this.$slots.customIcon[0]
      }
      return <rt-system-icons class="rt-popover-icon" name={this.iconName}></rt-system-icons>
    }
    const popoverBodyClass = ['rt-popover-body', 'sp-l-0-4', 'sp-r-1-2', 'sp-v-0-4', 'round-border']
    popoverBodyClass.push('rt-popover-body-v-' + this.localVertical);
    popoverBodyClass.push('rt-popover-body-h-' + this.localHorizontal);

    const popoverClass = ['rt-popover']
    if (this.stopOpacity) {
      popoverClass.push('rt-popover--stop-opacity')
    }
    if (!this.autoPosition) {
      if (this.mdVertical.length > 0) {
        popoverBodyClass.push('rt-md-popover-body-v-' + this.mdHorizontal);
      }
      if (this.mdHorizontal.length > 0) {
        popoverBodyClass.push('rt-md-popover-body-h-' + this.mdHorizontal);
      }
    }
    if (this.isActive || this.enableAppendToBody) {
      if(this.isActive && !this.enableAppendToBody) {
        popoverClass.push('rt-popover-active')
      }
      if (this.close) {
        popoverClass.push('rt-popover-closing')
      }
      const renderButtonClose = () => {
        const style = {}
        if (this.calculationX && this.enableHorizontalValueCalculation) {
          style.transform = 'translateX('+this.calculationX+'px)'
        }
        // style: style,
        return <div style={style} class={popoverBodyClass.join(' ')} ref="popoverBody">
          <button class="rt-popover-close" type="button" onClick={this.deactivate}>
            <rt-system-icons name="close small"></rt-system-icons>
          </button>
          {this.$slots.content || this.$slots.default}
        </div>
      }
        const renderButtonIcon = () => {
          return <button type="button" onClick={this.activate} class="popover-icon-button">
            {renderIcon()}
          </button>

        }

        return h('div', {
            class: popoverClass,
            on: {
              mouseenter: this.mouseenter,
              mousemove: this.mouseenter,
              mouseleave: this.mouseleave,
            },
            ref: "popover"
          },
          [renderButtonIcon(), renderButtonClose()

          ]
        )


    }
      return <div class={popoverClass.join(' ')} ref="popover">
        <button type="button" onClick={this.activate} class="rt-popover-icon-button">
          {renderIcon()}

        </button>
      </div>;

  }
};
</script>
