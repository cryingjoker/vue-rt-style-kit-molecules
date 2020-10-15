<script type="text/jsx">
  const componentsList = {};
  import browser from '../../utils/browser'
  import variables from "../../variables.json";

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
        mayScroll: true
      }
    },
    computed: {
      carouselClasses() {
        let classList = 'rt-carousel-v2 rt-container rt-container--mobile-full-width';
        if(this.scrollableOnDesktop)
          classList += ' rt-carousel-v2--d-scroll';
        return classList;
      }
    },
    mounted() {
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
    beforeUpdate() {
      let primaryData = this.hasSlotContent;
      this.hasSlotContent = this.checkForSlotContent();
      if(this.hasSlotContent != primaryData) {
        this.$forceUpdate();
      }
    },
    created() {
      let primaryData = this.hasSlotContent;
      this.hasSlotContent = this.checkForSlotContent();
      if(this.hasSlotContent != primaryData) {
        this.$forceUpdate();
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
        }, 1);
      },
      checkForSlotContent() {
        let checkForContent = (hasContent, node) => {
            return hasContent || node.tag || (node.text && node.text.trim());
        };
        return this.$slots.default && this.$slots.default.reduce(checkForContent, false);
      }
    },
    render(h) {
      const arrowLeft = () => {
        if(!this.farLeft && this.scrollableOnDesktop) {
          return <div class="rt-carousel-v2__fading rt-carousel-v2__fading-left">
            <div class="rt-carousel-v2__arrow rt-carousel-v2__arrow-left" onClick={this.scrollLeft}>
                <rt-system-icons name="chevron left"></rt-system-icons>
            </div>
          </div>
        }
      };
      const arrowRight = () => {
        if (!this.farRight && this.scrollableOnDesktop) {
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
          <div class="rt-carousel-v2__inner" ref="inner" onScroll={this.countFarPositions}>
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
