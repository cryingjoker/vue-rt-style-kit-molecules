<script type="text/jsx">
import CarouselV3RenderItem from "./CarouselV3RenderItem.vue"
import {carouselV3Store} from "./CarouselV3Store";
import {sliderStore} from "../Slider/SliderStore";
import {deviceTypeStore} from "vue-rt-style-kit-atoms";

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
    isHover: false
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
  },
  methods: {
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

        setTimeout(() => {

          this.$refs.caroselRow.$el.classList.remove('rt-carousel-v3--scroll--remove-transform')
        }, 500)
      }, 0)

    },
    setPrewActive() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      this.clearTransform()
      carouselV3Store.setPrewSlide(localName)
    },
    setNextActive() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      this.clearTransform()
      carouselV3Store.setNextSlide(localName)
    },
    wheelMove(e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()

      }
      if (!this.wheelEventPause) {
        let transform = parseInt(this.$refs.caroselRow.$el.style.transform.replace(/[translateX(,)]/g, ''))
        if (isNaN(transform)) {
          transform = 0
        }

        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {

          if (!this.$refs.caroselRow.$el.classList.contains('rt-carousel-v3--scroll--remove-transform')) {
            if (e.deltaX < 0 && this.prewArrowShow || e.deltaX > 0 && this.nextArrowShow)
              this.$refs.caroselRow.$el.style.transform = 'translateX(' + (transform - e.deltaX) + 'px)'
          }
          this.deltaRowMoveStart()
        }

        if (Math.abs(e.deltaX) > 10 || Math.abs(transform) > 100) {
          this.deltaRowMoveStart()
          e.preventDefault()

          if (!this.wheelEventPause) {
            this.wheelEventPause = true;
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
            }, 400)
          }

        }
      }
    },
    deltaRowMoveStart() {
      if (this.deltaRowRemoveTimer) {
        clearTimeout(this.deltaRowRemoveTimer);
        this.deltaRowRemoveTimer = false
      }

      this.deltaRowRemoveTimer = setTimeout(() => {
        clearTimeout(this.deltaRowMoveTimeout)
        this.deltaRowMoveTimeout = false
        this.deltaRowMove()
      }, 200)
    },
    deltaRowMove(step) {
      let transform = parseInt(this.$refs.caroselRow.$el.style.transform.replace(/[translateX(,)]/g, ''))
      if (isNaN(transform)) {
        transform = 0
      }
      this.deltaRowMoveTimeout = setTimeout(() => {
        let step = step || transform / 100
        transform -= step
        if (parseInt(transform) == 0) {
          transform = 0
        }
        this.$refs.caroselRow.$el.style.transform = 'translateX(' + (transform) + 'px)'
        if (transform != 0) {
          this.deltaRowMove(step)
        }
      }, 1)
    }
  }
  ,
  watch: {
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
            if (a[size - 1].length == this.colInRow) {
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
              if ((notActive < 0 || notActive > this.colInRow - 0) && this.blurNotActive) {
                notActive = true
              } else {
                notActive = false
              }
              if (this.deviceType.search('desktop') >= 0 && !this.scrollableOnDesktop) {
                notActive = false
              }
              return h(CarouselV3RenderItem, {props: {colInRow: this.colInRow - 0, notActive: notActive}}, slot)
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

    const getStyle = () => {
      const style = {}
      if (this.activeItemIndex > 0 && this.scrollableOnDesktop) {
        const delta = this.$refs.wrap.querySelector('.rt-carousel-slide-v3').clientWidth / this.$refs.wrap.clientWidth * 100

        style.marginLeft = delta * this.activeItemIndex
        if (this.activeItemIndex > 0) {
          let inItemCol = 0
          if (this.deviceType.search('desktop') >= 0) {
            inItemCol = (12 / this.colInRow)
          } else {
            inItemCol = (6 / this.colInRow)
          }

          style.marginLeft -= delta * ((0.65) / inItemCol)
        }
        style.marginLeft = -1 * style.marginLeft + '%'
      }
      return style
    }
    const caurouselWrapperClassList = ['rt-carousel-v3']
    if (this.background.length > 0) {
      caurouselWrapperClassList.push('color-block--' + this.background)
    }
    return <div class={caurouselWrapperClassList} onWheel={this.wheelMove} onMouseenter={this.mouseenter}
                onMouseleave={this.mouseleave}>

      <div class="rt-container relative">
        <div class="rt-carousel-v3-wrap" ref="wrap">
          {arrowRender()}
          {shadowRender()}
          {h('rt-col', {
            attrs: {rtCarouselId: this.name || this._uid},
            props: {size: this.scrollableOnDesktop ? 11 : 12, tabletSize: 5, mobileSize: 3},
            class: [(this.scrollableOnDesktop ? 'rt-carousel-v3--scroll' : '')],
            ref: 'caroselRow',
            style: getStyle()
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
