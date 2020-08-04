<script type="text/jsx">

  // import debounce from "debounce";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import {bannerStore} from "./BannerStore";
  import BannerVirtualImage from "./BannerVirtualImage.vue";


  const componentsList = {};
  componentsList[BannerVirtualImage.name] = BannerVirtualImage

  //dark-slate
  //gray
  //orange

  export default {
    name: "RtBannerVirtualItemV2",
    components: componentsList,
    props: {
      height: {
        type: Number,
        default: 0
      },
      data: {
        type: Object,
        default: () => {
          return {}
        }
      },
      bannerName: {
        type: String | Number,
      },
      nextId: {
        type: Number
      },
      id: {
        type: Number
      },
      activeId: {
        type: Number
      },
      orientation: {
        type: Number
      },
    },
    data: () => ({
      type: null
    }),

    mounted: function () {
      deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
    },
    beforeMount() {

    },
    beforeUpdate() {
    },
    updated() {
      if (this.type == 'mobile') {
        this.removeWatcher();
        this.setWatcher();
      }
    },
    beforeDestroy: function () {
      if (this.type == 'mobile') {
        this.removeWatcher()
      }
    },
    methods: {
      setWatcher() {
        this.getHeight();
        window.addEventListener('resize', this.getHeight)
      },
      removeWatcher() {
        window.removeEventListener('resize', this.getHeight)
      },
      calculateMobileOptions() {
        const type = deviceTypeStore.getStatus()
        if (this.type != type) {
          this.type = type;
          if (type == 'mobile') {
            this.setWatcher();
          } else {
            this.removeWatcher();
          }
        }
      },
      getHeight() {
        const thisHeight = this.$refs['bannerItem']?.clientHeight
        if (thisHeight) {
          bannerStore.setHeight(this.bannerName, thisHeight);
        }

      }
    },
    computed: {
      header() {
        if (this.data.header) {
          const classList = ['sp-b-0-4'];
          if(this.data.mobileHeader){
            classList.push('md-d-none')
          }
          return <div class={classList.join(' ')}>
              {this.data.header}
          </div>
        }
        return null
      },
      mobileHeader() {
        if (this.data.mobileHeader) {
          return <div class="sp-b-0-4 md-d-block d-none">
              {this.data.mobileHeader}
          </div>
        }
        return null
      },
      label() {
        if (this.data.label) {
          return <h2 class="rt-font-h2">
            {this.data.label}
          </h2>
        }
        return null
      },
      description() {
        if (this.data.description) {
          const classList = ['rt-n-banner-description', 'sp-t-0-4'];
          if (this.data.background != 'gray') {
            classList.push('color-white')
          } else {
            classList.push('color-main08')
          }
          return <p class={classList.join(' ')}>
            {this.data.description}
          </p>
        }
        return null
      },
      footer() {
        if (this.data.footer) {
          return <div class="sp-t-1-2">
            {this.data.footer}
          </div>
        }
        return null
      },
      image() {
        if (this.data.image) {
          return <rt-row class="flex-fill rt-n-banner-image">
            <rt-col size="5"></rt-col>
            <rt-col size="7">
              {this.data.image}
            </rt-col>
          </rt-row>
        }
      },
      bannerClass() {
        const classNames = ['rt-n-banner-item', 'd-flex'];
        if (this.activeId == this.id) {
          classNames.push('rt-n-banner-item--active')
          if (this.nextId) {
            if (this.orientation === 1) {
              classNames.push('rt-n-banner-item--go-left')
            }
            if (this.orientation === -1) {
              classNames.push('rt-n-banner-item--go-right')
            }
          }
        }

        if (this.nextId == this.id) {
          if (this.orientation === 1) {
            classNames.push('rt-n-banner-item--next-right')
          }
          if (this.orientation === -1) {
            classNames.push('rt-n-banner-item--next-left')
          }

        }
        return classNames.join(' ')
      },
      bannerWrapperClass() {
        const classNames = ['rt-n-banner-wrapper', 'd-flex', 'flex-fill', 'td-sp-h-1'];
        classNames.push('color-block--' + this.data.background)
        if (this.data.background != 'gray') {
          classNames.push('color-white')
        }
        return classNames.join(' ')
      },
      bannerStyle() {
        if (this.type == 'mobile') {
          return {minHeight: this.height + 'px'}
        } else {
          return {}
        }
      }
    },
    render(h) {
      return <div class={this.bannerClass} ref="bannerItem" style={this.bannerStyle}>
        <div class="rt-container flex-fill d-flex td-sp-h-none">
          <div class={this.bannerWrapperClass}>
            <rt-row class="flex-fill rt-n-banner-content">
              <rt-col size={1} t-hide={true} m-hide={true}></rt-col>
              <rt-col size={5} tablet-size={3} mobile-size={3} class="d-flex flex-fill">
                <div class="d-flex flex-start-center md-flex-start-top">
                  <div class="md-sp-t-1-2 d-flex flex-column rt-n-banner-inner-content">
                    <div class="md-flex-fill">
                      {this.header}
                      {this.mobileHeader}
                      {this.label}
                      {this.description}
                    </div>
                    {this.footer}
                  </div>
                </div>
              </rt-col>
            </rt-row>
            <rt-banner-virtual-image-v2 image={this.data?.image}
                                        image-x2={this.data['image-x2']}
                                        image-tablet={this.data?.imageTablet}
                                        image-mobile={this.data?.imageMobile}>
            </rt-banner-virtual-image-v2>
          </div>
        </div>


      </div>
    }
  }
  ;
</script>
