<script type="text/jsx">
  import {sliderStore} from "./SliderStore";
  import SlideContent from "./SliderContent.vue";
  import SliderImage from "./SliderImage.vue";
  import debounce from "debounce";
  import './Slider.styl'

  const componentList = [];
  componentList[SlideContent.name] = SlideContent;
  componentList[SliderImage.name] = SliderImage;
  export default {
    name: "RtSlider",
    props: {
      activeIndex: {
        type: Number,
        default: 0
      },
      spaceVertical: {
        type: Number,
        default: 0
      },
      tdSpaceVertical: {
        type: Number,
        default: 0
      },
      mdSpaceVertical: {
        type: Number,
        default: 0
      },
      lgSpaceVertical: {
        type: Number,
        default: 0
      },
    },
    components: componentList,
    data: () => ({
      activeIndexLocal: 0,
      customSlots: {},
      customSlotsSort: [],
      maxImageHeight: 0,
      maxContentHeight: 0,
      xDown: 0,
      yDown: 0
    }),
    created() {
      this.activeIndexLocal = this.activeIndex
    },
    mounted() {
      sliderStore.addWatcher(this._uid, this.updateSlots)
      window.addEventListener("resize", debounce(this.getMathHeight, 1));
    },
    updated() {
      setTimeout(() => {
        this.getMaxContentHeight()
        this.getMaxImageHeight()
      })

    },
    methods: {
      updateSlots() {
        this.getSlots();
        this.getSlotSort();
      },
      getSlots() {
        this.customSlots = sliderStore.getSlot(this._uid);
        this.$forceUpdate()
      },
      getSlotSort() {
        this.customSlotsSort = sliderStore.getSlotSort(this._uid);
      },
      getMathHeight() {
        this.getMaxContentHeight();
        this.getMaxImageHeight();
      },
      getMaxContentHeight() {
        let h = 0;
        this.$refs['slider'].$el.querySelectorAll('.slider-content-container').forEach((i) => {
          if (i.clientHeight > h) {
            h = i.clientHeight
          }
        });
        this.maxContentHeight = h
      },
      getMaxImageHeight() {
        let h = 0;
        const items = this.$refs['slider'].$el.querySelectorAll('.slider-image-tag');
        items.forEach((i) => {
          if (i.clientHeight > h) {
            h = i.clientHeight
          }
        });
        this.maxImageHeight = h
        if (h == 0 && items.length > 0) {
          setTimeout(() => {
            this.getMaxImageHeight();
          }, 100)
        }
      },
      setNextSlide() {
        this.activeIndexLocal = (this.activeIndexLocal + 1) % this.customSlotsSort.length
      },
      setPreviusSlide() {
        this.activeIndexLocal = (this.activeIndexLocal - 1 + this.customSlotsSort.length) % this.customSlotsSort.length
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

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
          if (xDiff > 0) {
            this.setPreviusSlide()
          } else {
            this.setNextSlide()
          }
        }

        this.xDown = null;
        this.yDown = null;
      },

      getSpacePartOfClass(space) {
        const classList = ['sp', 'v'];
        if (space == 0) {
          classList.push('none')
        } else {
          classList.push(parseInt(space / 20) + '')
          if (space % 20 > 0) {
            classList.push(parseInt((space % 20) / 4) + '')
          }
        }
        return classList.join('-')
      }

    },
    computed: {
      spaceClasses() {
        const classList = ['slider', 'md-flex-v-end'];
        if (this.lgSpaceVertical) {
          classList.push('lg-' + this.getSpacePartOfClass(this.lgSpaceVertical))
        }
        if (this.spaceVertical) {
          classList.push(this.getSpacePartOfClass(this.spaceVertical))
        } else {
          classList.push('sp-v-4')
        }
        if (this.tdSpaceVertical) {
          classList.push('td-' + this.getSpacePartOfClass(this.tdSpaceVertical))
        } else {
          classList.push('td-sp-v-3')
        }
        if (this.mdSpaceVertical) {
          classList.push('md-' + this.getSpacePartOfClass(this.mdSpaceVertical))
        } else {
          classList.push('md-sp-v-2')
        }
        return classList.join(' ')
      },
      contentStyle() {
        let style = ''
        if (this.maxContentHeight > 0) {
          style = 'max-height:' + this.maxContentHeight + 'px; height:' + this.maxContentHeight + 'px;'
        }
        return style
      },
      imageStyle() {
        let style = ''
        if (this.maxImageHeight > 0) {
          style = 'max-height:' + this.maxImageHeight + 'px; height:' + this.maxImageHeight + 'px;'
        }
        return style
      },

    },

    render(h) {


      return <rt-row class={this.spaceClasses} mobile-reverse-direction={true} ref="slider"
                     onTouchstart={this.touchstart} onTouchmove={this.touchmove}>

        {this.$slots.default}
        <rt-col size="1" t-hide={true}></rt-col>
        <rt-col size="4" tablet-size="3" mobile-size="3" class="d-flex flex-v-center">
          <div class="slider-body">
            <div class="slider-content" style={this.contentStyle}>
              {this.customSlotsSort.map((key, index) => {
                return <rt-slider-content index={index}
                                          active-index={this.activeIndexLocal}
                                          data={this.customSlots[key]}></rt-slider-content>
              })}
            </div>
            <div class="slider-arrow d-flex sp-t-2-2 td-sp-t-2 md-sp-t-1-3">
              <div class="slider-arrow-icon slider-arrow-icon__prev" onClick={this.setPreviusSlide}>

                <svg class="slider-arrow-svg" width="9px" height="16px" viewBox="0 0 9 16" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(30, -18)">
                    <polygon id="Path" fill="#101828" fill-rule="nonzero"
                             transform="scale(-1, 1)"
                             points="21 19.0586108 22.0460529 18 30 26 22.0460529 34 21 32.9413892 27.9009314 25.9993262"></polygon>
                  </g>
                </svg>
              </div>
              <div class="slider-arrow-icon slider-arrow-icon__next" onClick={this.setNextSlide}>
                <svg class="slider-arrow-svg" width="9px" height="16px" viewBox="0 0 9 16" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(-21, -18.000000)">
                    <polygon id="Path" fill="#101828" fill-rule="nonzero"
                             points="21 19.0586108 22.0460529 18 30 26 22.0460529 34 21 32.9413892 27.9009314 25.9993262"></polygon>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </rt-col>
        <rt-col size="1" t-hide={true} m-hide={true}></rt-col>
        <rt-col size="5" tablet-size="3" mobile-size="2" class="md-sp-b-1-1">
          <div class="slider-image" style={this.imageStyle}>
            <div class="slider-image-inner">
              {this.customSlotsSort.map((key, index) => {
                return <rt-slider-image index={index}
                                        active-index={this.activeIndexLocal}
                                        data={this.customSlots[key]}></rt-slider-image>
              })}
            </div>
          </div>
        </rt-col>
      </rt-row>
    }
  };
</script>
