<script type="text/jsx">
  const componentsList = {};
  import debounce from "debounce";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import variables from "../../variables.json";

  export default {
    name: "RtCarouselSlideV2",
    components: componentsList,
    props: {

    },
    data: () => ({
        isMobile: false,
        isTablet: false,
        startLimit: null,
        endLimit: null,
        isOutsideContainer: false,
        isSafari: window.safari,
        middleResolution: false,
        isCentral: false
    }),
    computed: {
      slideClasses() {
        let classList = 'rt-carousel-slide-v2';
        classList += ` rt-carousel-slide-v2--${this.$parent._props.width}`;
        this.isOutsideContainer ? classList += ' rt-carousel-slide-v2--hidden' : null;
        return classList;
      }
    },
    mounted() {
      this.emitScrollStep();
      this.defineContainer();
      this.calculatePosition();
      this.$parent.$on('scrolling', this.setTempStyle);
      this.$parent.$on('scroll-end', this.returnStyle);
      this.$parent.$on('native-scroll-stopped', this.calculatePosition);
      window.addEventListener('resize', debounce(this.emitScrollStep, 25));
      window.addEventListener('resize', debounce(this.defineContainer, 25));
      deviceTypeStore.addWatcher(this._uid,this.calculateMobileOptions);
      this.calculateMobileOptions();
    },
    beforeUpdate(){
      deviceTypeStore.removeWatcher(this._uid,this.calculateMobileOptions);
    },
    updated(){
      deviceTypeStore.addWatcher(this._uid,this.calculateMobileOptions);
    },
    beforeDestroy(){
      deviceTypeStore.removeWatcher(this._uid,this.calculateMobileOptions);
    },
    methods: {
      setTempStyle() {
        if(!this.isMobile && !this.isSafari) {
          this.$el.style.scrollSnapAlign = 'none';
        }
      },
      returnStyle() {
        if(!this.isSafari) {
          if(!this.middleResolution) {
            this.calculatePosition();
            if(this.isCentral) {
              this.$el.style.scrollSnapAlign = 'center';
            } else {
              setTimeout(() => {
                this.$el.style.scrollSnapAlign = 'center';
              }, 25)
            }
          } else {
            this.calculatePosition();
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
        this.$parent ? setTimeout(()=> {this.$parent.$emit('scroll-step', {'size': this.$el.offsetWidth})}, 50) : setTimeout(()=> {this.emitScrollStep()}, 100);
      },
      calculateMobileOptions(){
        const type =  deviceTypeStore.getStatus();
        this.isMobile = type === 'mobile';
        this.isTablet = type === 'tablet';
      },
      defineContainer() {
        this.startLimit = this.$parent.$refs.inner.getBoundingClientRect().left;
        this.endLimit = this.$parent.$refs.inner.getBoundingClientRect().right;
        this.middleResolution = window.innerWidth < parseInt(variables['desktop-upper-limit']) && window.innerWidth > parseInt(variables['mobile-upper-limit'])
        this.calculatePosition();
      },
      calculatePosition() {
        if(Math.floor(this.$el.getBoundingClientRect().right) > this.endLimit || Math.floor(this.$el.getBoundingClientRect().left) < this.startLimit) {
          this.isOutsideContainer = true;
        } else {
          this.isOutsideContainer = false;
        }
        if(this.$el.getBoundingClientRect().right < ((window.innerWidth + this.$el.getBoundingClientRect().width) / 2 + 10) && this.$el.getBoundingClientRect().left > (window.innerWidth - ((window.innerWidth + this.$el.getBoundingClientRect().width) / 2 + 10))) {
          this.isCentral = true;
        } else {
          this.isCentral = false;
        }
      }
    },
    render(h) {
      return <div class={this.slideClasses}>{this.$slots.default}</div>
    }
  };
</script>
