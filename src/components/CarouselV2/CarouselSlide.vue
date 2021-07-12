<script type="text/jsx">
  import variables from "../../variables.json";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import debounce from "debounce";

  const componentsList = {};
  export default {
    name: "RtCarouselSlideV2",
    components: componentsList,
    props: {
      parentCarouselName: {
        type: String,
        default: '123'
      }
    },
    data: () => ({
      isMobile: false,
      isTablet: false,
      startLimit: null,
      endLimit: null,
      isOutsideContainer: false,
      isSafari: window.safari,
      middleResolution: false,
      isCentral: false,
      parentCarousel: null
    }),
    watch: {
      parentCarousel(newVal) {
        this.parentCarousel = newVal;
        this.defineContainer();
      }
    },
    computed: {
      slideClasses() {
        let classList = 'rt-carousel-slide-v2';
        if(this.parentCarousel?._props) {
          classList += ` rt-carousel-slide-v2--${this.parentCarousel._props.width}`;
        }
        this.isOutsideContainer ? classList += ' rt-carousel-slide-v2--hidden' : null;
        return classList;
      }
    },
    mounted() {
      this.setData();
    },
    updated() {
      if(!this.parentCarousel) {
        this.parentCarousel = this.$el.closest('.rt-carousel-v2').__vue__;
      }
    },
    methods: {
      setData() {
        if(!this.parentCarousel) {
          this.parentCarousel = this.$el.closest('.rt-carousel-v2').__vue__;
        }
        if(this.$el && this.parentCarousel) {
          this.emitScrollStep();
          this.defineContainer();
          // this.calculatePosition();
          this.parentCarousel.$on('scrolling', this.setTempStyle);
          this.parentCarousel.$on('scroll-end', this.returnStyle);
          // this.parentCarousel.$on('native-scroll-stopped', this.calculatePosition);
          window.addEventListener('resize', debounce(this.emitScrollStep, 25));
          window.addEventListener('resize', debounce(this.defineContainer, 25));
          this.calculateMobileOptions();
        } else {
          setTimeout(()=> {
            this.setData();
          },1000)
        }
      },
      setTempStyle() {
        if(!this.isMobile && !this.isSafari) {
          this.$el.style.scrollSnapAlign = 'none';
        }
      },
      returnStyle() {
        if(!this.isSafari) {
          if(!this.middleResolution) {
            // this.calculatePosition();
            if(this.isCentral) {
              this.$el.style.scrollSnapAlign = 'center';
            } else {
              setTimeout(() => {
                this.$el.style.scrollSnapAlign = 'center';
              }, 25)
            }
          } else {
            // this.calculatePosition();
            if(this.isCentral) {
              this.$el.style.scrollSnapAlign = 'start';
            } else {
              setTimeout(() => {
                this.$el.style.scrollSnapAlign = 'start';
              }, 25)
            }
          }
        }
      },
      emitScrollStep() {
        this.parentCarousel ? setTimeout(()=> {this.parentCarousel.$emit('scroll-step', {'size': this.$el.offsetWidth})}, 50) : setTimeout(()=> {this.emitScrollStep()}, 100);
      },
      calculateMobileOptions(){
        const type =  deviceTypeStore.getStatus();
        this.isMobile = type === 'mobile';
        this.isTablet = type === 'tablet';
      },
      defineContainer() {
        if(this.parentCarousel?.$refs.inner) {
          this.startLimit = this.parentCarousel.$refs.inner.getBoundingClientRect().left;
          this.endLimit = this.parentCarousel.$refs.inner.getBoundingClientRect().right;
          this.middleResolution = window.innerWidth < parseInt(variables['desktop-upper-limit']) && window.innerWidth > parseInt(variables['mobile-upper-limit'])
          // this.calculatePosition();
        }
      },
      calculatePosition() {
        if(Math.floor(this.$el.getBoundingClientRect().right) > this.endLimit || this.$el.getBoundingClientRect().left < this.startLimit) {
          this.isOutsideContainer = true;
        } else {
          this.isOutsideContainer = false;
        }
        if(this.$el.getBoundingClientRect().right < ((window.innerWidth + this.$el.getBoundingClientRect().width) / 2 + 10) && this.$el.getBoundingClientRect().left > (window.innerWidth - ((window.innerWidth + this.$el.getBoundingClientRect().width) / 2 + 10))) {
          this.isCentral = true;
        } else {
          this.isCentral = false;
        }
      },
    },
    render(h) {
      return <div class={this.slideClasses}>{this.$slots.default}</div>
    }
  };
</script>
