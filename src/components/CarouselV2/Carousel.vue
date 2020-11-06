<script type="text/jsx">
  import variables from "../../variables.json";
  import VirtualCarouselSlide from './VirtualCarouselSlide.vue'
  import {carouselStore} from "./CarouselStore";

  const componentsList = {};
  componentsList[VirtualCarouselSlide.name] = VirtualCarouselSlide;

  export default {
    name: "RtCarouselV2",
    components: componentsList,
    props: {
      width: {
        type: Number,
        default: 3
      },
      scrollableOnDesktop: {
        type: Boolean,
        default: true
      },
      contentToResize: {
        type: Array,
        default: () => ([])
      },
      carouselName: {
        type: String,
        default: '123'
      },
      carouselHtmlMode: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        farRight: false,
        farLeft: true,
        scrollStep: null,
        isScrolling: () => {},
        hasSlotContent: false,
        resizeData: ['.rt-card-round-img-container', '.rt-card-round__content .rt-font-h4', '.rt-card-round__content .color-main05'],
        mayScroll: true,
        touchStart: null,
        isRegistered: false,
        customSlides: {},
        customSlidesSort: []
      }
    },
    watch: {
      isRegistered(newVal, oldVal) {
        if (newVal != oldVal && newVal) {
          this.initMethods()
        }
      }
    },
    computed: {
      carouselClasses() {
        let classList = 'rt-carousel-v2 rt-container rt-container--mobile-full-width';
        if(this.scrollableOnDesktop)
          classList += ' rt-carousel-v2--d-scroll';
        return classList;
      },
      renderSlides() {
        return Object.entries(this.customSlides).map(item => {
          return <rt-virtual-carousel-slide-v2>{item[1]}</rt-virtual-carousel-slide-v2>
        })
      }
    },
    mounted() {
      this.registerCarousel();
      this.$on('scroll-step', this.setScrollStep);
      if(this.contentToResize) {
        this.resizeData = this.resizeData.concat(this.contentToResize);
      }
      setTimeout(()=> {
        window.dispatchEvent(new Event('resize'));
      },1000)
      if(this.$refs.inner.scrollWidth == this.$refs.inner.offsetWidth) {
        this.farRight = true;
        this.farLeft = true;
      }
    },
    updated() {},
    methods: {
      countFarPositions() {
        this.emitNativeScrollEnd();
        this.$refs.inner.scrollWidth == this.$refs.inner.offsetWidth + this.$refs.inner.scrollLeft ? this.farRight = true : this.farRight = false;
        this.$refs.inner.scrollLeft == 0 ? this.farLeft = true : this.farLeft = false;
      },
      scrollRight() {
        if(this.mayScroll) {
          this.mayScroll = false;
          this.$emit('scrolling');
          let startPos = this.$refs.inner.scrollLeft;
          let endPos;
          let tempScrollStep;
          let middleResolution = window.innerWidth < parseInt(variables['desktop-upper-limit']) && window.innerWidth > parseInt(variables['mobile-upper-limit']);
          middleResolution ? tempScrollStep = this.scrollStep * .659 : tempScrollStep = this.scrollStep * .83;
          this.farLeft ? endPos = startPos + tempScrollStep : endPos = startPos + this.scrollStep;
          this.smoothScroll(startPos, endPos, this.$refs.inner);
        }
      },
      scrollLeft() {
        if(this.mayScroll) {
          this.mayScroll = false;
          this.$emit('scrolling');
          let startPos = this.$refs.inner.scrollLeft;
          let endPos;
          let tempScrollStep;
          let middleResolution = window.innerWidth < parseInt(variables['desktop-upper-limit']) && window.innerWidth > parseInt(variables['mobile-upper-limit']);
          middleResolution ? tempScrollStep = this.scrollStep * .659 : tempScrollStep = this.scrollStep * .83;
          this.farRight ? endPos = startPos - tempScrollStep : endPos = startPos - this.scrollStep;
          this.smoothScroll(startPos, endPos, this.$refs.inner)
        }
      },
      setScrollStep(data) {
        this.scrollStep = data.size;
      },
      smoothScroll(startPos, endPos, wrapper) {
        if (startPos < (endPos - 1) || startPos > (endPos + 1)) {
          if (startPos < endPos) {
            let int = setInterval(() => {
              if (startPos > (endPos - 15)) startPos += 1;
              else if (startPos > (endPos - 50)) startPos += 5;
              else if (startPos > (endPos - 100)) startPos += 10;
              else if (startPos > (endPos - 200)) startPos += 20;
              else if (startPos > (endPos - 350)) startPos += 35;
              else if (startPos > (endPos - 500)) startPos += 50;
              wrapper.scrollTo(startPos, 0);
              if (startPos >= endPos) {
                setTimeout(()=> {
                  this.countFarPositions();
                  this.$emit('scroll-end');
                  setTimeout( () => {
                    this.mayScroll = true;
                  }, 10);
                  clearInterval(int)
                }, 11)
              }
            }, 3);
          } else {
            let int = setInterval(() => {
              if (startPos < (endPos + 15)) startPos -= 1;
              else if (startPos < (endPos + 50)) startPos -= 5;
              else if (startPos < (endPos + 100)) startPos -= 10;
              else if (startPos < (endPos + 200)) startPos -= 20;
              else if (startPos < (endPos + 350)) startPos -= 35;
              else if (startPos < (endPos + 500)) startPos -= 50;
              wrapper.scrollTo(startPos, 0);
              if (startPos <= endPos) {
                setTimeout(()=> {
                  this.countFarPositions();
                  this.$emit('scroll-end');
                  setTimeout( () => {
                    this.mayScroll = true;
                  }, 10);
                  clearInterval(int)
                }, 11)
              }
            }, 3);
          }
        }
      },
      emitNativeScrollEnd() {
        window.clearTimeout(this.isScrolling);
        this.isScrolling = setTimeout(() => {
          this.$emit('native-scroll-stopped');
        }, 10);
      },
      checkAbility($event) {
        this.touchStart = $event.touches[0].clientX
      },
      mobileScroll($event) {
        this.$refs.inner.scrollWidth == this.$refs.inner.offsetWidth + this.$refs.inner.scrollLeft ? this.farRight = true : this.farRight = false;
        this.$refs.inner.scrollLeft == 0 ? this.farLeft = true : this.farLeft = false;
        if((this.farRight && this.touchStart > $event.touches[0].clientX) || (this.farLeft && this.touchStart < $event.touches[0].clientX)) {
          $event.preventDefault();
          $event.stopPropagation();
        }
      },
      registerCarousel() {
        if (this.carouselName.length > 0) {
          carouselStore.register(this.carouselName, this.carouselHtmlMode).then(() => {
            this.isRegistered = true;
            carouselStore.runWatchersById(this.carouselName)
          })
        }
      },
      initMethods() {
        this.updateSlots();
        this.addStoreWatcher()
      },
      getSlots() {
        this.customSlides = carouselStore.getSlot(this.carouselName)
      },
      getSlotSort() {
        this.customSlidesSort = carouselStore.getSlotSort(this.carouselName) || []
      },
      updateSlots() {
        this.getSlots();
        this.getSlotSort();
      },
      addStoreWatcher() {
        carouselStore.addWatcher(this.carouselName, this.updateSlots)
      },
    },
    render(h) {
      const arrowLeft = () => {
        if(!this.farLeft) {
          return <div class="rt-carousel-v2__fading rt-carousel-v2__fading-left">
            <div class="rt-carousel-v2__arrow rt-carousel-v2__arrow-left" onClick={this.scrollLeft}>
                <rt-system-icons name="chevron left"></rt-system-icons>
            </div>
          </div>
        }
      };
      const arrowRight = () => {
        if (!this.farRight) {
          return <div class="rt-carousel-v2__fading rt-carousel-v2__fading-right">
            <div class="rt-carousel-v2__arrow rt-carousel-v2__arrow-right" onClick={this.scrollRight}>
                <rt-system-icons name="chevron right"></rt-system-icons>
            </div>
          </div>
        }
      };
      const resizeData = {
        querySelectorsNames: this.resizeData
      };
      return <div class={this.carouselClasses} v-rt-resize-content-height={resizeData}>
        <div class="rt-carousel-v2__slide-wrapper rt-col" ref="wrapper">
          <div class="rt-carousel-v2__inner" ref="inner" onScroll={this.countFarPositions} onTouchstart={this.checkAbility} onTouchmove={this.mobileScroll}>
            {this.renderSlides}
            {this.$slots.default}
            {arrowLeft()}
            {arrowRight()}
            <div class="rt-carousel-v2__mobile-stretcher"/>
          </div>
        </div>
      </div>
    }
  };
</script>
