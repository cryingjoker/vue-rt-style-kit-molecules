<script type="text/jsx">

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
    }
  },
  data: () => ({
    isActive: false,
    close: false,
    localVertical: '',
    localHorizontal: '',
    resizeHasBinding: false
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
    if(this.autoPosition){
      this.bindResize()
      this.onResize()
    }
  },
  beforeDestroy() {
    if(this.autoPosition){
      this.unbindResize()
    }
  },
  methods: {
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
      this.$nextTick(() => {
        this.onResize()
        this.bindClick();
      })
    },
    deactivate() {
      this.close = true
      setTimeout(() => {
        this.close = false
        this.isActive = false
        this.hover = false
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
    onResize(){
      let {top, left, x, y} = this.$refs.popover.getClientRects()[0]
      let wrapperHeight = window.innerHeight
      let wrapperWidth = window.innerWidth
      let windowWidth = window.innerWidth
      let bodyHeight = this.$refs.popoverBody ? this.$refs.popoverBody.clientHeight : 0
      if(x && !left){
        left = x
      }
      if(y && !top){
        top = y
      }
      if(this.containerId.length >0){
        const wrap = document.querySelector('#'+this.containerId);
        if(wrap){
          const wrapRect = wrap.getClientRects()[0];
          top -= wrapRect.top
          left -= wrapRect.left
        }
        wrapperHeight = wrap.clientHeight
        wrapperWidth = wrap.clientWidth
      }


      if(windowWidth < 769 && this.stopAutoOnMd){
        this.setLocalValues()
      }else {
        const xStart = left - 125 - 12
        const xEnd = left + 125 + 12
        if (xStart +20 >= 0 && xEnd - 20 <= wrapperWidth) {
          this.localHorizontal = 'center'
        } else {

          if (xStart+20 > 0) {
            this.localHorizontal = 'left'
          } else {
            this.localHorizontal = 'right'
          }
        }
        if (top - bodyHeight/2 > 0 && top + 20 + bodyHeight/2 < wrapperHeight && this.localHorizontal != 'center') {
          this.localVertical = 'center'
        } else {
          if (top > bodyHeight) {
            this.localVertical = 'top'
          } else {
            this.localVertical = 'bottom'
          }
        }
      }
    }
  },
  render() {
    const renderIcon = ()=>{
      if(this.$slots.customIcon){
        return this.$slots.customIcon[0]
      }
      return <rt-system-icons class="rt-popover-icon" name={this.iconName}></rt-system-icons>
    }
    const popoverBodyClass = ['rt-popover-body', 'sp-l-0-4', 'sp-r-1-2', 'sp-v-0-4', 'round-border']
    popoverBodyClass.push('rt-popover-body-v-' + this.localVertical);
    popoverBodyClass.push('rt-popover-body-h-' + this.localHorizontal);

    const popoverClass = ['rt-popover']
    if(this.stopOpacity){
      popoverClass.push('rt-popover--stop-opacity')
    }
    if(!this.autoPosition) {
      if (this.mdVertical.length > 0) {
        popoverBodyClass.push('rt-md-popover-body-v-' + this.mdHorizontal);
      }
      if (this.mdHorizontal.length > 0) {
        popoverBodyClass.push('rt-md-popover-body-h-' + this.mdHorizontal);
      }
    }
    if (this.isActive) {
      popoverClass.push('rt-popover-active')
      if (this.close) {
        popoverClass.push('rt-popover-closing')
      }
      return <div class={popoverClass.join(' ')} onMouseenter={this.mouseenter} onMousemove={this.mouseenter}
                  onMouseleave={this.mouseleave} ref="popover">
        <button type="button" onClick={this.activate} class="popover-icon-button">
          {renderIcon()}
        </button>
        <div class={popoverBodyClass.join(' ')} ref="popoverBody">
          <button class="rt-popover-close" type="button" onClick={this.deactivate}>
            <rt-system-icons name="close small"></rt-system-icons>
          </button>
          {this.$slots.content || this.$slots.default}
        </div>
      </div>;
    }
    return <div class={popoverClass.join(' ')} ref="popover">
      <button type="button" onClick={this.activate} class="rt-popover-icon-button">
        {renderIcon()}

      </button>
    </div>;
  }
};
</script>
