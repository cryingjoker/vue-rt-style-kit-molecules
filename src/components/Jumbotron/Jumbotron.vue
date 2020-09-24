<script type="text/jsx">

import {deviceTypeStore} from "vue-rt-style-kit-atoms";
import {bannerStore} from "../BannerV2/BannerStore";

const componentsList = {};

//dark-slate
//gray
//orange-super

export default {
  name: "RtJumbotron",
  components: componentsList,
  props: {
    background: {
      type: String,
      default: 'dark-slate'
    },
    color: {
      type: String,
      default: 'white'
    },
    descriptionColor:{
      type: String,
      default: 'white'
    },
    url:{
      type: String,
      default: ''
    },
    name:{
      type: String,
      default: ''
    },
    section:{
      type: String,
      default: ''
    },
    showUrlOnMobile:{
      type:Boolean,
      default: true
    },
    showUrlOnTablet:{
      type:Boolean,
      default: false
    },
    showUrlOnDesktop:{
      type:Boolean,
      default: false
    },
    gaEventType:{
      type:String,
      default: 'b2c'
    },
    ga:{
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  data: () => ({
    type: ''
  }),

  mounted: function () {
    deviceTypeStore.addWatcher(this._uid, this.setDeviceType);
    this.setGoogleAn()

  },
  beforeMount() {

  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy: function () {
  },

  methods: {
    fireGoogleAn(e){
      if(this.ga) {
        if(e){
          e.preventDefault();
        }
        let jumbotronName;

        if(this.ga?.name?.length > 0){
          jumbotronName = this.ga.name
        }else {
          if (this.name.length > 0) {
            jumbotronName = this.name;
          } else {
            jumbotronName = this._uid
          }
        }
        if (!window.dataLayer) {
          window.dataLayer = [];
        }
        let section;
        if(this.ga?.section?.length > 0){
          section = this.ga.section
        }else{
          section = window.location.pathname;
        }
        let banner_place = 1;


        window.dataLayer.push({
          event: this.gaEventType,
          type: 'banner_click',
          banner_name: jumbotronName,
          banner_id: this._uid,
          banner_place: banner_place,
          banner_section: section
        });
        if(e && this.url.length > 0){
          global.location.href = this.url;
        }
      }
    },
    setGoogleAn(){
      if(this.ga && Object.keys(this.ga).length > 0){
        this.googleAn(true)
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
    setDeviceType() {
      const type = deviceTypeStore.getStatus()
      if (this.type != type) {
        this.type = type;
      }
    },
  },
  computed: {

    jumbotronClass() {
      const classNames = ['rt-jumbotron']
      classNames.push('color-block--' + this.$props.background)
      classNames.push('color-' + this.$props.color)

      return classNames.join(' ')
    },
    imageRender() {
      if (this.$slots.image) {
        const classList = ['rt-jumbotron-image-container']
        if (this.$slots['image-x2']) {
          classList.push('x2-d-none')
        }
        if (this.$slots['image-tablet']) {
          classList.push('td-d-none')
        }
        if (this.$slots['image-mobile']) {
          classList.push('md-d-none')
        }
        return <div class={classList.join(' ')}>{this.$slots.image[0]}</div>
      }
      return null
    },
    imageX2Render() {
      if (this.$slots['image-x2']) {
        const classList = ['rt-jumbotron-image-container', 'd-none', 'x2-d-block'];
        if (this.$slots['image-tablet']) {
          classList.push('td-d-none')
        }
        if (this.$slots['image-mobile']) {
          classList.push('md-d-none')
        }
        return <div class={classList.join(' ')}>{this.$slots['image-x2'][0]}</div>
      }
      return null
    },
    imageTabletRender() {

      if (this.$slots['image-tablet']) {
        const classList = ['rt-jumbotron-image-container', 'td-d-block', 'd-none'];
        if (this.$slots['image-mobile']) {
          classList.push('md-d-none');
        }
        return <div class={classList.join(' ')}>{this.$slots['image-tablet'][0]}</div>
      }
      return null
    },
    imageMobileRender() {
      if (this.$slots['image-mobile']) {
        const classList = ['rt-jumbotron-image-container', 'md-d-flex', 'd-none'];

        return <div class={classList.join(' ')}>{this.$slots['image-mobile'][0]}</div>
      }
      return null
    },
    header() {
      if (this.$slots.header) {
        const classList = ['sp-b-0-4'];
        if (this.$slots['mobile-header']) {
          classList.push('md-d-none')
        }
        if (this.$slots['tablet-header']) {
          classList.push('td-d-none')
        }
        return <div class={classList.join(' ')}>
          {this.$slots.header}
        </div>
      }
      return null
    },
    mobileHeader() {
      if (this.$slots['mobile-header']) {
        return <div class="sp-b-0-4 md-d-flex d-none">
          {this.$slots['mobile-header']}
        </div>
      }
      return null
    },
    tabletHeader() {
      if (this.$slots['tablet-header']) {
        return <div class="sp-b-0-4 md-d-none td-d-flex d-none">
          {this.$slots['tablet-header']}
        </div>
      }
      return null
    },
    label() {
      if (this.$slots.label) {
        return <h1 class="rt-font-h1">
          {this.$slots.label}
        </h1>
      }
      return null
    },
    description() {
      if (this.$slots.description) {
        const classList = ['sp-t-0-4'];
          classList.push('color-' + this.descriptionColor)
        return <p class={classList.join(' ')}>
          {this.$slots.description}
        </p>
      }
      return null
    },
    bodyHtml(){
      if(this.$slots['body-html']){
        const classList = ['sp-t-0-4'];
        return <div class={classList.join(' ')}>
          {this.$slots['body-html']}
        </div>
      }
      return null
    },
    footer() {
      if (this.$slots.footer) {
        const classList = ['sp-t-1-2'];
        return <div class={classList.join(' ')}>
          {this.$slots.footer}
        </div>
      }
      return null
    },
    renderUrl(){
        if (this.url && (this.type == 'mobile' && this.showUrlOnMobile || this.type == 'tablet' && this.showUrlOnTablet || this.type == 'desktop' && this.showUrlOnDesktop)) {
          return <a onClick={this.fireGoogleAn} href={this.url} class="rt-jumbotron-url"></a>
        }
        return null
    }
  },
  render(h) {
    return <div class={this.jumbotronClass}>
      <rt-row class="rt-jumbotron-image flex-fill">
        <rt-col size={6} tablet-size={2} m-hide={true}></rt-col>
        <rt-col size={6} tablet-size={4} mobile-size={3}>
          <div class="rt-jumbotron-gradient md-d-none"></div>
          {this.imageRender}
          {this.imageX2Render}
          {this.imageTabletRender}
          {this.imageMobileRender}

        </rt-col>
      </rt-row>
        <div class="rt-container d-flex flex-fill height-fill ">
          <rt-col size="5" tablet-size="3" mobile-size="3" class="d-flex flex-fill md-height-fill">
            <div class="d-flex flex-start-center md-flex-start-top rt-jumbotron-inner">
              <div class="md-sp-t-1 md-sp-b-2 d-flex flex-column rt-jumbotron-inner-content">
                <div class="md-flex-fill">
                  {this.header}
                  {this.tabletHeader}
                  {this.mobileHeader}
                  {this.label}
                  {this.description}
                  {this.bodyHtml}
                  {this.footer}
                </div>
              </div>
            </div>
          </rt-col>
        </div>
      {this.renderUrl}
    </div>

  }
}

</script>
