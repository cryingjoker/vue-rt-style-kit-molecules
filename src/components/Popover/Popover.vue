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
    onResize() {
      if (!this.$refs.popover) return
      let {top, left, x, y} = this.$refs.popover.getClientRects()[0]
      let wrapperHeight = window.innerHeight
      let wrapperWidth = window.innerWidth
      let windowWidth = window.innerWidth
      if (x && !left) left = x
      if (y && !top) top = y

      if (this.containerId.length > 0) {
        const wrap = document.querySelector('#' + this.containerId);
        if (wrap) {
          const wrapRect = wrap.getClientRects()[0];
          top -= wrapRect.top
          left -= wrapRect.left
          wrapperHeight = wrap.clientHeight
          wrapperWidth = wrap.clientWidth
        }
      }

      if (windowWidth < 769 && this.stopAutoOnMd) {
        this.setLocalValues()
      } else {
        if (!this.$refs.popoverBody) return
        let poBHeight = this.$refs.popoverBody.clientHeight
        let poBHeightHalf = poBHeight / 2
        let poBWidth = this.$refs.popoverBody.clientWidth
        let poBWidthHalf = poBWidth / 2
        let poIcon = this.$refs.popover.clientWidth
        let poHalf = poIcon / 2
        let poMargin = 4

        let resultPosition = null
        let poBodyPositions = [
          ["top", "center"], ["bottom", "center"],
          ["center", "left"], ["center", "right"],
          ["top", "left"], ["top", "right"],
          ["bottom", "left"], ["bottom", "right"]
        ]

        let xStart, xEnd, yStart, yEnd

        poBodyPositions.forEach(
          pos => {
            if (resultPosition) return

            // считаем координаты положения модалки
            if (pos[0] === "top") {
              yEnd = top - poMargin
              yStart = yEnd - poBHeight
              if (pos[1] === "left") {
                xEnd = left + poIcon + poMargin
              } else if (pos[1] === "center") {
                xEnd = left + poHalf + poBWidthHalf
              } else if (pos[1] === "right") {
                xEnd = left - poMargin + poBWidth
              }
              xStart = xEnd - poBWidth
            } else if (pos[0] === "center") {
              yEnd = top + poHalf + poBHeightHalf
              yStart = yEnd - poBHeight
              if (pos[1] === "left") {
                xStart = left - poMargin - poBWidth
              } else if (pos[1] === "right") {
                xStart = left + poIcon + poMargin
              }
              xEnd = xStart + poBWidth
            } else if (pos[0] === "bottom") {
              yStart = top + poIcon + poMargin
              yEnd = yStart + poBHeight
              if (pos[1] === "left") {
                xStart = left + poIcon + poMargin - poBWidth
              } else if (pos[1] === "center") {
                xStart = left + poHalf - poBWidthHalf
              } else if (pos[1] === "right") {
                xStart = left - poMargin
              }
              xEnd = xStart + poBWidth
            }

            // проверяем вписывается ли текущее положение в область видимости
            if (
              xStart > 0 &&
              yStart > 0 &&
              xEnd < wrapperWidth &&
              yEnd < wrapperHeight
            ) resultPosition = pos
          }
        )

        this.localVertical = resultPosition === null ? "top" : resultPosition[0]
        this.localHorizontal = resultPosition === null ? "center" : resultPosition[1]
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
