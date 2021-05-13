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
    }


  },
  data: () => ({
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
    xDown: 0,
    yDown: 0
  }),
  mounted() {

    let localName = this.name;
    if (localName.length == 0) {
      localName = this._uid + '';
    }
    carouselV3Store.addWatcher(localName, this.getSlide)
    carouselV3Store.setColInRow(localName, this.colInRow)
    if (this.activeIndex - 0 >= 0) {
      this.$nextTick(() => {
        carouselV3Store.setActiveIndex(localName, this.activeIndex - 0)
      })
    }
    deviceTypeStore.addWatcher(this._uid, this.setDeviceType);
    this.renderStyle()
  },
  methods: {
    renderStyle(transform = 0) {
      const delta = this.$refs.wrap.querySelector('.rt-carousel-slide-v3').clientWidth / this.$refs.wrap.clientWidth * 100
      const style = {}
      let inlineStyle = ''
      let activeIndex = this.activeItemIndex;
      let size = this.slides.length

      if(activeIndex >= size - this.colInRow){
        activeIndex = size - this.colInRow
      }

      style.marginLeft = delta * (activeIndex)
      if(this.wheelEventPause){
        transform = 0
      }
      const origTransform = transform-0
      if(transform == 0){
        this.origTransformBefore = 0
      }
      this.origTransformBefore += transform
      if (this.origTransformBefore >= 0) {
        transform = ' + ' + this.origTransformBefore
      } else {
        transform = ' - ' + Math.abs(this.origTransformBefore)
      }
      if (this.activeItemIndex > 0) {
        style.marginLeft -= delta * ((0.65) / (12 / this.colInRow))
      }
      style.marginLeft = -1 * style.marginLeft + '%'
      inlineStyle += '.rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll.rt-col{margin-left:calc(' + style.marginLeft  + transform + 'px);'
      if(origTransform!=0) {
        inlineStyle+='transition-duration: 0s;'
      }
      inlineStyle += '}'
      if (this.activeItemIndex > 0) {
        let activeItemIndex = this.activeItemIndex;

        inlineStyle += '@media (max-width: 1024px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll.rt-col{ margin-left: calc(-1 * ((100vw - 20px) / 6 * 5 - 7px) / 2 * ' + activeItemIndex + ' + ((100vw - 20px) / 6 * 5 - 7px) / 2 * 0.22 ' + transform + 'px);}}'
        inlineStyle += '@media (max-width: 767px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll.rt-col{ margin-left: calc(-1*(80vw) * ' + activeItemIndex + ' + 7vw ' + transform + 'px);}}'
      }else{
        inlineStyle += '@media (max-width: 1024px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll.rt-col{ margin-left: 0px;}}'
        inlineStyle += '@media (max-width: 767px){.rt-carousel-v3-' + this._uid + ' .rt-col, .rt-carousel-v3-' + this._uid + ' .rt-carousel-v3--scroll.rt-col{ margin-left: 0px;}}'
      }

      document.querySelector('.rt-carousel-v3-' + this._uid + ' style').innerText = inlineStyle
    },
    mouseenter() {
      this.isHover = true
      this.bindKeydown()
    },
    mouseleave() {
      this.isHover = false
      this.unbindKeydown()
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
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
      }

      if (!this.wheelEventPause) {

        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          if(e.deltaX >= 0 && this.activeItemIndex + (this.colInRow-0+1) <= this.slides.length || e.deltaX < 0 && this.activeItemIndex > 0) {
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
      }else{
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    },
    touchstart(event) {
      this.xDown = event.touches[0].clientX;
      this.yDown = event.touches[0].clientY;
    },
    touchmove(event) {
      if (!this.xDown || !this.yDown) {
        return;
      }
      var xUp = event.touches[0].clientX;
      var yUp = event.touches[0].clientY;

      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;



      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        event.preventDefault();
        if (xDiff > 0) {
          this.setNextActive();

        } else {
          this.setPrewActive();
        }
      }

      this.xDown = null;
      this.yDown = null;
    },
  },
  watch: {
    activeItemIndex() {
      this.renderStyle()
    },
    nextShadowShow(newVal, oldVal) {
      this.$nextTick(() => {
        if (newVal) {
          this.$refs.shadowRight.style.marginRight = 0
        } else {
          this.$refs.shadowRight.style.marginRight = '-50px'
        }
      })
    }
    ,
    prewShadowShow(newVal, oldVal) {
      this.$nextTick(() => {
        if (newVal) {
          this.$refs.shadowLeft.style.marginLeft = 0
        } else {
          this.$refs.shadowLeft.style.marginLeft = '-50px'
        }
      })
    }
  }
  ,
  render(h) {

    const renderSlides = () => {
      if (this.slides.length > 0) {
        return this.slides.reduce((a, b) => {
          if (!Array.isArray(a) || !Array.isArray(a[0])) {
            return [[a, b]]
          } else {
            let size = a.length;
            if (a[size - 1].length == this.colInRow - 0) {
              a.push([])
              size += 1
            }
            a[size - 1].push(b)
            return a
          }
        }).map((row, index) => {
            if (!Array.isArray(row)) {
              return null
            }
            const options = {}
            if (!this.scrollableOnDesktop && index > 0) {
              options.class = ['sp-t-1', 'td-sp-t-none']
            }
            return h('rt-row', options, row.map((slot, slotIndex) => {
              let notActive = slotIndex + index * (this.colInRow - 0) - this.activeItemIndex

              let tabletNotActive = false
              if (notActive < 0 || notActive > 1 - 0) {
                tabletNotActive = true
              }

              if ((notActive < 0 || notActive - 1 >= this.colInRow - 1 - 0 ) && this.blurNotActive) {
                notActive = true
              } else {
                notActive = false
              }

              if (this.deviceType.search('desktop') >= 0 && !this.scrollableOnDesktop) {
                notActive = false
              }
              return h(CarouselV3RenderItem, {props: {colInRow: this.colInRow, notActive: notActive, tabletNotActive: tabletNotActive}}, slot)
            }))
          }
        )

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
      return <div class="rt-container rt-carousel-v3-shadows-wrapper">
        <div class={shadowClassList}>
          <div ref="shadowLeft" class="rt-shadow rt-shadow-left"></div>
          <div ref="shadowRight" class="rt-shadow rt-shadow-right"></div>
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



    const caurouselWrapperClassList = ['rt-carousel-v3']
    caurouselWrapperClassList.push('rt-carousel-v3-' + this._uid)
    if (this.background.length > 0) {
      caurouselWrapperClassList.push('color-block--' + this.background)
    }
    // docu
    return <div class={caurouselWrapperClassList} onWheel={this.wheelMove} onMouseenter={this.mouseenter}
                onTouchstart={this.touchstart}
                onTouchmove={this.touchmove}
                onMouseleave={this.mouseleave}>
      <style></style>
      <div class="rt-container td-sp-h-none relative">
        <div class="rt-carousel-v3-wrap" ref="wrap">
          {arrowRender()}
          {shadowRender()}
          {h('rt-col', {
            attrs: {rtCarouselId: this.name || this._uid},
            props: {size: this.scrollableOnDesktop ? 11 : 12, tabletSize: 5, mobileSize: 3},
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

</script>
