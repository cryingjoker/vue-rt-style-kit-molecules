<script type="text/jsx">
import CarouselV3RenderItem from "./CarouselV3RenderItem.vue"
import {carouselV3Store} from "./CarouselV3Store";
import {deviceTypeStore} from "vue-rt-style-kit-atoms";
import {bannerStore} from "../BannerV2/BannerStore";

export default {
  name: "RtCarouselV3",
  props: {
    name: {
      type: String,
      default: ''
    },
    colInRow: {
      type: [String, Number],
      default: 3
    },
    laptopColInRow: {
      type: [String, Number],
      default: 0
    },
    scrollableOnDesktop: {
      type: Boolean,
      default: true
    },
    activeIndex: {
      type: [String, Number],
      default: 0
    },
    showShadow: {
      type: Boolean,
      default: true
    },
    shadowColor: {
      type: String,
      default: 'white'
    },
    background: {
      type: String,
      default: ''
    },
    infiniteScroll: {
      type: Boolean,
      default: false
    },
    blurNotActive: {
      type: Boolean,
      default: true
    },
    activeIndexInit:{
      type: [Number, String],
      default: 0
    }


  },
  data: () => ({
    innerWidth: 0,
    origTransformBefore: 0,
    slides: [],
    activeItemIndex: 0,
    nextArrowShow: false,
    prewArrowShow: false,
    nextShadowShow: false,
    prewShadowShow: false,
    deviceType: '',
    wheelEventPause: false,
    deltaRowRemoveTimer: false,
    deltaRowMoveTimeout: false,
    clearTransformTimeout: false,
    isHover: false,
    isScrolling: false,
    xDown: 0,
    yDown: 0,
    isMouseDown: false
  }),
  mounted() {

    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    document.documentElement.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`)
    this.onResize();
    const localName = this.getLocalName()
    carouselV3Store.addWatcher(localName, this.getSlide)
    carouselV3Store.setColInRow(localName, this.getColInRow())
    this.activeIndex = this.activeIndexInit
    if (this.activeIndex - 0 >= 0) {
      this.$nextTick(() => {
        carouselV3Store.setActiveIndex(localName, this.activeIndex - 0)
      })
    }
    deviceTypeStore.addWatcher(this._uid, this.setDeviceType);
    this.renderStyle()
    this.bindResize()

  },
  methods: {
    setAciveIndex(){
      const localName = this.getLocalName()
      carouselV3Store.setActiveIndex(localName,this.activeIndexInit)
    },
    onResize(){
      this.innerWidth = window.innerWidth;
    },
    bindResize(){
      window.addEventListener('resize',this.onResize)
    },
    unbindResize(){
      window.removeEventListener('resize',this.onResize)
    },

    getColInRow(){
      if(this.innerWidth < 1367 && this.laptopColInRow - 0 > 0){
        return this.laptopColInRow
      }
      return this.colInRow
    },
    getLocalName(){
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid + '';
      }
      return localName
    },
    rollBack() {
      this.renderStyle(0);
    },
    checkScrollEnd() {
      window.clearTimeout(this.isScrolling);
      this.isScrolling = setTimeout(() => {
        this.rollBack()
      }, 50);
    },

    renderStyle(transform = 0) {
      let delta = 1
      const colInRow = this.getColInRow()
      // if (this.$refs.wrap && this.$refs.wrap.querySelector('.rt-carousel-slide-v3')) {
      //   delta = this.$refs.wrap.querySelector('.rt-carousel-slide-v3').clientWidth / this.$refs.wrap.clientWidth * 100
      // }
      const style = {}
      let inlineStyle = ''
      let activeIndex = this.activeItemIndex;
      let size = this.slides.length

      if (activeIndex >= size - colInRow) {
        activeIndex = size - colInRow
      }
      // style.marginLeft = delta * (activeIndex)
      if (this.wheelEventPause) {
        transform = 0
      }
      const origTransform = transform - 0
      if (transform == 0) {
        this.origTransformBefore = 0
      }
      this.origTransformBefore += transform
      if (this.origTransformBefore >= 0) {
        transform = ' + ' + this.origTransformBefore
      } else {
        transform = ' - ' + Math.abs(this.origTransformBefore)
      }
      if (this.activeItemIndex > 0) {

      //   style.marginLeft -= delta * ((0.65) / (12 / colInRow))
      }


      // if (delta * (activeIndex) < 0 || !style.marginLeft) {
      //   style.marginLeft = 0
      // } else {
      //   style.marginLeft = delta * (activeIndex)
      // }
      // style.marginLeft = -1 * style.marginLeft + '%'
      // inlineStyle += '.rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll.rt-col{margin-left:calc(' + (style.marginLeft + transform) + 'px);'
      if (origTransform != 0) {
        inlineStyle += '.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ transition-duration: 0s;}'
      }
      // inlineStyle += '}'
      if (this.activeItemIndex > 0) {
        let activeItemIndex = this.activeItemIndex;
        if(this.colInRow == 3) {

          inlineStyle += '@media (min-width: 1600px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((1440px * 0.3 * 0.75) * -' + (activeItemIndex < size - 2 ? 1 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + (1440px * 0.3) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 3 ? -20 : 5) + 'px '+transform+'px);}}'
          inlineStyle += '@media (max-width: 1599px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((30vw - 48px) * -' + (activeItemIndex < size - 2 ? 0.8 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + ((30vw - 48px) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 3 ? 0 : 5) + 'px '+transform+'px));}}'
          inlineStyle += '@media (max-width: 1599px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc(((100vw - var(--scrollbarWidth)) * 0.3  - 48px) * -' + (activeItemIndex < size - 2 ? 0.8 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + (((100vw - var(--scrollbarWidth)) * 0.3  - 48px) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 3 ? 0 : 5) + 'px '+transform+'px));}}'
          inlineStyle += '@media (max-width: 1280px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((30vw - 48px) * -' + (activeItemIndex < size - 2 ? 0.8 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + ((30vw - 48px) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 3 ? 0 : 5) + 'px '+transform+'px));}}'
          inlineStyle += '@media (max-width: 1280px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc(((100vw - var(--scrollbarWidth)) * 0.3  - 48px) * -' + (activeItemIndex < size - 2 ? 0.7 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + (((100vw - var(--scrollbarWidth)) * 0.3  - 48px) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 3 ? 0 : 5) + 'px '+transform+'px));}}'

        }
        if(this.colInRow == 4) {
          inlineStyle += '@media (min-width: 1600px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((1440px  * 0.23 / 3 * 2) * -' + (activeItemIndex < size - 2 ? 1 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + (1440px * 0.23) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 4 ? -4 : 4) + '0px '+transform+'px);}}'
          inlineStyle += '@media (max-width: 1599px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((23vw - 36.8px) * 0.725 * -' + (activeItemIndex < size - 2 ? 1 : 0) + ' * ' + (activeItemIndex > 0 ? 1 : 0) + ' + (23vw - 36.8px) * -' + (activeItemIndex > 1 ? activeItemIndex - 1 : 0) + ' + ' + (activeItemIndex < size - 4 ? 1 : 4) + '0px '+transform+'px);}}'
        }

        inlineStyle += '@media (max-width: 1024px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((10vw - 4px) * -'+(activeItemIndex < size-2 ? 3 : 2)+' * '+(activeItemIndex> 0 ? 1 : 0)+' + (40vw - 16px) * -'+(activeItemIndex > 1 ? activeItemIndex - 1 : 0)+' + '+(activeItemIndex < size-2 ? 2 : 3)+'0px);}}'
        inlineStyle += '@media (max-width: 767px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((12.5vw + 17.5px) * '+(activeItemIndex < size-1 ? 1 : 2)+' * '+(activeItemIndex> 0 ? 1 : 0)+' + (75vw - 35px) * -'+(activeItemIndex > 0 ? activeItemIndex < size-1 ? activeItemIndex:activeItemIndex  : 0)+' + '+(activeItemIndex < size-1 ? 0 : -10)+'px);}}'
        inlineStyle += '@media (max-width: 360px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc((50vw - 117.5px) * '+(activeItemIndex < size-1 ? 1 : 2)+' * '+(activeItemIndex> 0 ? 1 : 0)+' + (235px) * -'+(activeItemIndex > 0 ? activeItemIndex < size-1 ? activeItemIndex:activeItemIndex  : 0)+' + '+(activeItemIndex < size-1 ? 0 : -10)+'px);}}'

      } else {
        inlineStyle += '@media (min-width: 1025px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc(10px '+transform+'px);}}'
        inlineStyle += '@media (max-width: 1024px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc(10px '+transform+'px);}}'
        inlineStyle += '@media (max-width: 767px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll{ margin-left: calc(10px '+transform+'px);}}'

      }
      const styleTag = document.querySelector('.rt-carousel-v3-' + this._uid + ' style');
      if (styleTag) {
        styleTag.innerText = inlineStyle
      }
    },
    mouseenter() {
      this.isHover = true
      this.bindKeydown()
    },
    mouseleave() {
      this.isHover = false
      this.unbindKeydown()
      this.mouseUp()
    },

    bindKeydown() {
      window.addEventListener('keydown', this.bindKeydownFn, {once: true})
    },
    unbindKeydown() {
      window.removeEventListener('keydown', this.bindKeydownFn)
    },
    bindKeydownFn(e) {
      if (this.isHover) {
        const key = (e.key || e.keyCode);
        if ((key == 'ArrowLeft' || key == 37) && (this.prewArrowShow || this.infiniteScroll)) {
          this.setPrewActive()
        }
        if ((key == 'ArrowRight' || key == 39) && (this.nextArrowShow || this.infiniteScroll)) {
          this.setNextActive()
        }
        this.bindKeydown()
      }
    },
    setDeviceType() {
      this.deviceType = deviceTypeStore.getStatus();
      this.renderStyle(1);
    },
    getSlide() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      this.slides = [...carouselV3Store.getSliderContent(localName)]
      this.activeItemIndex = carouselV3Store.getActiveIndex(localName)
      const arrowsOpt = carouselV3Store.getArrowOptions(localName);
      const shadowOpt = carouselV3Store.getShadowOptions(localName);
      this.nextArrowShow = arrowsOpt.next
      this.prewArrowShow = arrowsOpt.prew
      this.nextShadowShow = shadowOpt.next
      this.prewShadowShow = shadowOpt.prew
      console.info('arrowsOpt',arrowsOpt)
    },
    clearTransform() {
      this.$refs.caroselRow.$el.classList.add('rt-carousel-v3--scroll--remove-transform')
      if (this.clearTransformTimeout) {
        clearTimeout(this.clearTransformTimeout)
        this.clearTransformTimeout = false
      }
      this.clearTransformTimeout = setTimeout(() => {
        this.$refs.caroselRow.$el.style.transform = 'translateX(' + (0) + 'px)'


      }, 0)

    },
    setPrewActive() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      // this.clearTransform()
      carouselV3Store.setPrewSlide(localName)
    },
    setNextActive() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      carouselV3Store.setNextSlide(localName)
    },

    wheelMove(e) {
      if (Math.abs(e.deltaX) > 0) {
        e.stopImmediatePropagation()
        e.preventDefault()
      }

      if (Math.abs(e.deltaX) > 0 &&  Math.abs(e.deltaY) > 0)  {
        e.stopImmediatePropagation()
        e.preventDefault()
      }
      this.checkScrollEnd();
      const colInRow = this.getColInRow()
      if (!this.wheelEventPause) {

        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          if (e.deltaX >= 0 && this.activeItemIndex + (colInRow - 0 + 1) <= this.slides.length || e.deltaX < 0 && this.activeItemIndex > 0) {
            this.renderStyle(e.deltaX * -1)
          }
        }

        if (Math.abs(e.deltaX) > 30 || Math.abs(this.origTransformBefore) > 100) {


          e.preventDefault()

          if (!this.wheelEventPause) {
            this.wheelEventPause = true;
            this.origTransformBefore = 0

            if (e.deltaX > 0) {
              if (this.nextArrowShow || this.infiniteScroll) {
                this.setNextActive()
              }
            } else {
              if (this.prewArrowShow || this.infiniteScroll) {
                this.setPrewActive()
              }
            }
            setTimeout(() => {
              this.wheelEventPause = false
            }, 800)
          }

        }
      } else {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
      return false
    },
    touchstart(event) {
      this.xDown = event.touches[0].clientX;
      this.yDown = event.touches[0].clientY;
    },
    touchend(event) {
      this.renderStyle()
    },
    touchmove(event) {
      if (!this.xDown || !this.yDown || this.wheelEventPause) {
        return;
      }
      var xUp = event.touches[0].clientX;
      var yUp = event.touches[0].clientY;

      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;


      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        event.preventDefault();
        if(Math.abs(xDiff) > this.innerWidth/5){
          this.wheelEventPause = true
          setTimeout(()=>{
            this.wheelEventPause = false
          },500)
          if (xDiff >= 0) {
            if (this.nextArrowShow || this.infiniteScroll) {
              this.setNextActive();
            }
          }else{
            if (this.nextArrowShow || this.infiniteScroll) {
              this.setPrewActive();
            }
          }
        }
        else{
          this.renderStyle(-1*xDiff/10)
        }
      }else {
        this.renderStyle(-1*xDiff/10)
      }


    },
    mouseDown(e){
      this.isMouseDown = true
      this.mouseX = e.clientX
    },
    mouseUp(){
      this.isMouseDown = false
      this.renderStyle(0)
    },
    mouseMove(e){
      if(this.isMouseDown){
        const width = window.innerWidth
        let activeIndex = this.activeItemIndex;
        const colInRow = this.getColInRow()
        const delta = (e.clientX - this.mouseX) - this.origTransformBefore
        if(delta < 0){
          if(activeIndex < this.slides.length - colInRow){
            if(delta+this.origTransformBefore < width*-0.1){
              this.renderStyle(0)
              this.isMouseDown = false
              if (this.nextArrowShow || this.infiniteScroll) {
                this.setNextActive()
              }
            }else{
              this.renderStyle(delta )
            }
          }
        }else{
          if(activeIndex > 0){
            if(delta+this.origTransformBefore > width*0.2){
              this.renderStyle(0)
              this.isMouseDown = false
              if (this.nextArrowShow || this.infiniteScroll) {
                this.setPrewActive()
              }
            }
            else{
              this.renderStyle(delta )
            }
          }
        }

      }
    }

  },
  beforeDestroy() {
    this.unbindResize();
  },
  watch: {
    activeIndexInit(newVal, oldVal){
      if(!isNaN(parseInt(newVal+''+oldVal)) && newVal != this.activeIndex){
        this.setAciveIndex(newVal)
      }
    },
    colInRow(newVal, oldVal){
      if(oldVal && newVal != oldVal){
        const localName = this.getLocalName()
        this.onResize()
        carouselV3Store.setColInRow(localName, this.getColInRow())
        this.$nextTick(()=>{this.renderStyle(1)})
      }
    },
    laptopColInRow(newVal, oldVal){
      if(oldVal && newVal != oldVal){
        const localName = this.getLocalName()
        carouselV3Store.setColInRow(localName, this.getColInRow())
        this.onResize()
        this.$nextTick(()=>{this.renderStyle(1)})
      }
    },
    activeItemIndex() {
      this.renderStyle()
    },
    nextShadowShow(newVal, oldVal) {
      this.$nextTick(() => {
        if (this.$refs.shadowRight) {
          if (newVal) {
            this.$refs.shadowRight.style.marginRight = 0
          } else {
            this.$refs.shadowRight.style.marginRight = '-50px'
          }
        }
      })
    }
    ,
    prewShadowShow(newVal, oldVal) {
      this.$nextTick(() => {
        if (this.$refs.shadowLeft) {
          if (newVal) {
            this.$refs.shadowLeft.style.marginLeft = 0
          } else {
            this.$refs.shadowLeft.style.marginLeft = '-50px'
          }
        }
      })
    }
  }
  ,
  render(h) {
    const colInRow = this.getColInRow()
    const renderSlides = () => {
      if (this.slides.length > 0) {
        return this.slides.map((slot, slotIndex) => {
          let notActive = slotIndex  - this.activeItemIndex
          let tabletNotActive = false
          // if (notActive < 0 || notActive > 1 - 0) {
          //   tabletNotActive = true
          // }
          let mobileNotActive = true
          if(notActive > 1){
            tabletNotActive = true
          }
          if(notActive == 0){
            mobileNotActive = false
          }
          if ((notActive < 0 || notActive - 1 >= colInRow - 1 - 0) && this.blurNotActive) {
            notActive = true
          } else {
            notActive = false
          }

          if (this.deviceType.search('desktop') >= 0 && !this.scrollableOnDesktop) {
            notActive = false
          }
          return h(CarouselV3RenderItem, {
            props: {
              colInRow: colInRow - 0,
              scrollableOnDesktop: this.scrollableOnDesktop,
              notActive: notActive,
              tabletNotActive: tabletNotActive,
              mobileNotActive: mobileNotActive,
            }
          }, slot)
        })



      }
      return null
    }
    const shadowRender = () => {
      if (!this.showShadow)
        return null
      if (this.deviceType.search('desktop') >= 0 && !this.scrollableOnDesktop) {
        return null
      }
      const shadowClassList = ['rt-carousel-v3-shadows']
      if (this.shadowColor.length > 0) {
        shadowClassList.push('rt-shadow-' + this.shadowColor)
      }


      return <div class="rt-carousel-v3-shadows-wrapper">
        <div class={shadowClassList}>
          <div ref="shadowLeft" class="rt-shadow rt-shadow-left rt-shadow-has-pseudo"></div>
          <div ref="shadowRight" class="rt-shadow rt-shadow-right rt-shadow-has-pseudo"></div>
        </div>
      </div>
    }
    const arrowRender = () => {
      if (this.deviceType.search('desktop') >= 0 && !this.scrollableOnDesktop) {
        return null
      }
      if (this.prewArrowShow && this.nextArrowShow || this.infiniteScroll) {
        return <div class="rt-carousel-v3-arrows">
          <div onClick={this.setPrewActive}
               class="rt-carousel-v3-arrow rt-sys-icon-hover--orange rt-carousel-v3-arrow-left">
            <rt-system-icons name="chevron left"></rt-system-icons>
          </div>
          <div onClick={this.setNextActive}
               class="rt-carousel-v3-arrow rt-sys-icon-hover--orange rt-carousel-v3-arrow-right">
            <rt-system-icons name="chevron right"></rt-system-icons>
          </div>
        </div>
      }
      if (this.prewArrowShow) {
        return <div class="rt-carousel-v3-arrows">
          <div onClick={this.setPrewActive}
               class="rt-carousel-v3-arrow rt-sys-icon-hover--orange rt-carousel-v3-arrow-left">
            <rt-system-icons name="chevron left"></rt-system-icons>
          </div>
        </div>
      }
      if (this.nextArrowShow) {
        return <div class="rt-carousel-v3-arrows">
          <div></div>
          <div onClick={this.setNextActive}
               class="rt-carousel-v3-arrow rt-sys-icon-hover--orange rt-carousel-v3-arrow-right">
            <rt-system-icons name="chevron right"></rt-system-icons>
          </div>
        </div>
      }
      return null
    }


    const caurouselClassList = ['rt-carousel-v3']
    caurouselClassList.push('rt-carousel-v3-' + this._uid)
    if (this.background.length > 0) {
      caurouselClassList.push('color-block--' + this.background)
    }
    const caurouselWrapClassList = ['rt-carousel-v3-wrap'];
    if(!this.scrollableOnDesktop){
      caurouselWrapClassList.push('rt-col')
    }
    return <div class={caurouselClassList} onWheel={this.wheelMove}
                onMouseenter={this.mouseenter}
                onMousedown={this.mouseDown}
                onMouseup={this.mouseUp}
                onMousemove={this.mouseMove}
                onTouchstart={this.touchstart}
                onTouchmove={this.touchmove}
                onTouchend={this.touchend}
                onMouseleave={this.mouseleave}>
      <style></style>
      <div class="rt-container td-sp-h-none relative">
        <div class={caurouselWrapClassList} ref="wrap">
          {arrowRender()}
          {shadowRender()}
          {h(this.scrollableOnDesktop ? 'div' : 'rt-row', {
            attrs: {rtCarouselId: this.name || this._uid},
            class: [(this.scrollableOnDesktop ? 'rt-carousel-v3--scroll' : '')],
            ref: 'caroselRow',
          }, [
            renderSlides(),
            this.$slots.default
          ])}

        </div>
      </div>
    </div>
  }

}
// {h('rt-col', {
// //   attrs: {rtCarouselId: this.name || this._uid},
// //   props: {size: this.scrollableOnDesktop ? 11 : 12, tabletSize: 5, mobileSize: 3},
// //   class: [(this.scrollableOnDesktop ? 'rt-carousel-v3--scroll' : '')],
// //   ref: 'caroselRow',
// // }, [
// {renderSlides()}
// {this.$slots.default}
// // ])}

</script>
