<script type="text/jsx">

import debounce from "debounce";
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
    type: null,
    hideHeight: false
  }),

  mounted: function () {
    deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
    this.setGoogleAn()
  },
  beforeMount() {

  },
  beforeUpdate() {
  },

  beforeDestroy: function () {
    if (this.type == 'mobile') {
      this.removeWatcher()
    }
  },
  methods: {
    setGoogleAn(){
      if(this.data.ga && Object.keys(this.data.ga).length > 0){
        this.googleAn(true)
      }
    },
    fireGoogleAn(e){
      if(this.data.ga) {
        if(e){
          e.preventDefault();
        }
        let parentId;
        const customSlotsSort = bannerStore.getSlotSort(this.bannerName)
        let currentKey = customSlotsSort.indexOf(this.id);
        if(this.bannerName.length > 0){
          parentId = this.bannerName;
        }
        else{
          parentId = this.$parent._uid
        }
        if (!window.dataLayer) {
          window.dataLayer = [];
        }
        let banner_place = currentKey;
        // if(this.data.gaBannerName){
        //   banner_place = this.data.gaBannerName
        // }

        window.dataLayer.push({
          event: this.data.gaEventType,
          type: 'banner_click',
          banner_name: this.data.ga.name,
          banner_id: this.data.gaBannerName ? this.data.gaBannerName : parentId,
          banner_place: banner_place,
          banner_section: this.data.ga.section || window.location.pathname
        });
        if(e){
          global.location.href = this.data?.url;
        }
      }
    },
    googleAn(bind){
      if(bind) {
        this.$el.querySelector('a, button').addEventListener('click', (e)=> {
          if (!e.target.getAttribute('data-ga-pushed')) {
            e.preventDefault();
            this.fireGoogleAn()
            e.target.setAttribute('data-ga-pushed', 'true');
            e.target.click();
          }
        }, false);
      }
    },
    setWatcher() {
      if (bannerStore.runWatcher(this._uid)) {
        this.getHeight();
        window.addEventListener("resize", debounce(this.getHeight, 10));
      }
    },
    removeWatcher() {
      bannerStore.stopWatcher(this._uid)
      window.removeEventListener("resize", debounce(this.getHeight, 10));
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
      this.hideHeight = true;
      if (this.$refs['bannerItemWrapper']) {
        this.$nextTick(() => {
          this.$refs['bannerItemWrapper'].style.minHeigth = '1px'
          const thisHeight = this.$refs['bannerItemWrapper']?.offsetHeight
          if (thisHeight) {
            bannerStore.setHeight(this.bannerName, thisHeight);
          }
          this.hideHeight = false;

        })
      } else {
        this.removeWatcher();
        setTimeout(() => {
          this.setWatcher();
        }, 1000)
      }

      // this.$refs['bannerItemWrapper'].style.minHeigth = null

    }
  },
  computed: {
    header() {
      if (this.data.header) {
        const classList = ['sp-b-0-4'];
        if (this.data.mobileHeader) {
          classList.push('md-d-none')
        }
        if (this.data.tabletHeader) {
          classList.push('td-d-none')
        }
        return <div class={classList.join(' ')}>
          {this.data.header}
        </div>
      }
      return null
    },
    mobileHeader() {
      if (this.data.mobileHeader) {
        return <div class="sp-b-0-3 md-d-flex d-none">
          {this.data.mobileHeader}
        </div>
      }
      return null
    },
    tabletHeader() {
      if (this.data.tabletHeader) {
        return <div class="sp-b-0-3 md-d-none td-d-flex d-none">
          {this.data.tabletHeader}
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
        const classList = ['rt-n-banner-description', 'sp-t-0-4', 'td-sp-t-0-3'];
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
        const classList = ['td-sp-t-0-4', 'md-sp-t-1-1'];
        if (this.data.header && this.data.label && this.data.description) {
          classList.push('sp-t-1-1')
        } else {
          classList.push('sp-t-1-2')
        }
        return <div class={classList.join(' ')}>
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
      const classNames = ['rt-n-banner-wrapper', 'd-flex', 'flex-fill', 'td-sp-h-1', 'md-sp-r-none', 'height-fill'];
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
    },
    wrapperStyle() {
      if (this.type == 'mobile' && this.hideHeight) {
        return {minHeight: 'auto'}
      }
      return null
    },
    url() {
      if (this.data?.url && (this.type == 'mobile' && this.data.showUrlOnMobile || this.type == 'tablet' && this.data.showUrlOnTablet || this.type == 'desktop' && this.data.showUrlOnDesktop)) {
        return <a onClick={this.fireGoogleAn} href={this.data?.url} class="rt-n-banner-item-url"></a>
      }
      return null
    }
  },
  render(h) {
    return <div class={this.bannerClass} ref="bannerItem" style={this.bannerStyle}>

      <div class="rt-container flex-fill d-flex td-sp-h-none">
        <rt-col class="height-fill td-sp-h-none" size={12}>

          <div class={this.bannerWrapperClass} style={this.wrapperStyle} ref="bannerItemWrapper">

            <rt-row class="flex-fill rt-n-banner-content md-d-block">

              <rt-col size={1} t-hide={true} m-hide={true}></rt-col>
              <rt-col size={5} tablet-size={3} mobile-size={3} class="d-flex flex-fill md-height-fill">
                <div class="d-flex flex-start-center md-flex-start-top rt-n-banner-inner">
                  <div class="md-sp-t-1-2 d-flex flex-column rt-n-banner-inner-content">
                    <div class="md-flex-fill">
                      {this.header}
                      {this.tabletHeader}
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
                                        image-tablet={this.data['image-tablet']}
                                        image-mobile={this.data['image-mobile']}
                                        use-gradient={this.data['useGradient']}
            >
            </rt-banner-virtual-image-v2>
            {this.url}
          </div>
        </rt-col>
      </div>


    </div>
  }
}
;
</script>
