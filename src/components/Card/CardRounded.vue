<script type="text/jsx">
const componentsList = {};
import browser from '../../utils/browser'
import variables from "../../variables.json";
import {deviceTypeStore} from "vue-rt-style-kit-atoms";

export default {
  name: "RtCardRounded",
  components: componentsList,
  props: {
    needResize:{
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    previewCard: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ''
    },
    badge: {
      type: String,
      default: ''
    },
    badgeColor: {
      type: String,
      default: 'b2c-orange'
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    openInNewTab: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    isMobile: false,
    isTablet: false,
  }),
  computed: {
    label() {
      if (this.$slots.label) {
        if(this.previewCard) {
            return <p class="rt-font-h4 sp-b-0-2 td-sp-b-none">{this.$slots.label}</p>
        } else {
          return <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">{this.$slots.label}</p>
        }
      }
      return null
    },
    content() {
      if (this.$slots.content) {
        const classList = [];
        if(this.backgroundColor.length == 0){
          classList.push('color-main05')
        }
        return <p class={classList.join(' ')}>{this.$slots.content}</p>
      }
      return null
    },
    contentLargeSpace() {
      if(this.$slots['content-large-space']) {
        const classList = ['color-main05'];
        if(this.previewCard){
          classList.push('sp-t-0-3 rt-font-small-paragraph')
        }
        return <p class={classList.join(' ')}>{this.$slots['content-large-space']}</p>
      }
      return null
    },
    image() {
      const setImageClass = (item) => {
        this.$slots[item].forEach((img) => {
          if (img?.data) {
            img.data.staticClass = img.data.staticClass || "";
            img.data.staticClass += ' rt-card-round-img';
          }
        })
      };
      if(!this.withIcon) {
        if (!this.isMobile && !this.isTablet && window.devicePixelRatio > 1 && this.$slots['image-x2']) {
          setImageClass('image-x2');
          return <div class="rt-card-round-img-container">{this.$slots['image-x2']}</div>
        } else if (this.isTablet && this.$slots['image-tablet']) {
          setImageClass('image-tablet');
          return <div class="rt-card-round-img-container">{this.$slots['image-tablet']}</div>
        } else if (this.$slots.image) {
          setImageClass('image');
          return <div class="rt-card-round-img-container">{this.$slots.image}</div>
        }
      } else {
        if(this.$slots.image) {
          return <div class="rt-card-round-icon-container">{this.$slots.image}</div>
        } else {
          return null
        }
      }
      return null
    },
    logo() {
      if (this.$slots.logo) {
        this.$slots.logo.forEach((img) => {
          if (img?.data) {
            img.data.staticClass = img.data.staticClass || "";
            img.data.staticClass += ' rt-card-round__logo-img'
          }
        })
        const classList = ["rt-card-round__logo"];
        if(this.backgroundColor.length > 0 && !this.previewCard){
          classList.push('sp-h-0-1')
        }
        if(this.previewCard) {
          classList.push('sp-b-1')
        }
        return <div class={classList.join(' ')}>
          {this.$slots.logo}
        </div>
      }
      return null
    },
    colorClass(){
      if(this.backgroundColor.length > 0){
        return ['rt-card-round-color','rt-card-round-color--'+this.backgroundColor].join(' ')
      }
      return ['rt-card-round-white']
    },
    innerContentClass(){
      if(this.$slots.arrowText){
        return 'flex-fill'
      } else {
        if(this.previewCard) {
          return 'sp-b-1 td-sp-b-0-3'
        }
      }
      return null
    },
    contentClass(){
      const classNames = ['rt-card-round__content', 'sp-b-1'];

      if(this.backgroundColor.length == 0){
        classNames.push('sp-t-1');
        classNames.push('rt-card-round__content-s');
      }
      if(this.$slots.arrowText){
        classNames.push('d-flex');
        classNames.push('flex-column')
      }
      if(this.previewCard) {
        classNames.push('sp-h-1');
        classNames.push('sp-t-1');
        classNames.push('md-sp-t-none');
        if(this.withIcon) {
          classNames.push('sp-t-1-3');
          classNames.push('md-sp-t-1')
        }
      } else {
        classNames.push('sp-h-0-3')
      }
      return classNames.join(' ')
    },
    headerHtml(){
      if(this.$slots.headerHtml){
        return this.$slots.headerHtml
      }
      return null
    },
    arrowText(){
      if(this.$slots.arrowText){
        const classNames = ['rt-card-round-arrow', 'd-flex', 'flex-start-center', 'sp-h-0-1'];
        if(this.previewCard) {
          classNames.push('sp-t-2');
          classNames.push('sp-b-0-3');
          classNames.push('td-sp-t-1-3');
          classNames.push('td-sp-b-none');
        } else {
          classNames.push('sp-t-1');
        }
        return <div class={classNames.join(' ')}>
          <span class="rt-card-round-arrow__text">{this.$slots.arrowText}</span>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" class="rt-card-round-arrow-icon"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#101828"
                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"/>
          </svg>
        </div>
      }
    },
    labelIcon() {
      if(this.badge.length > 0) {
        return <div class="rt-card-preview__badge">
          <svg width="127" height="84" viewBox="0 0 127 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class={"fill-color-" + this.badgeColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M34.5813 0L0.0567095 0C-1.15772 3.4331 17.5025 60.9944 20.59 63.7695C22.458 65.447 24.8842 66.4877 27.4447 66.8743C27.4506 66.8771 27.4599 66.8824 27.4681 66.8853L127 83.4545V8.00027C127 3.582 123.418 0.000300223 119 0.000285292L34.5813 0Z"/>
          </svg>
            <div class="rt-card-preview__badge-text rt-font-control">{this.badge}</div>
        </div>
      }
    },
    mainIcon() {
      if(this.$slots['main-icon']) {
        return <div class="rt-card-round-icon-container">{this.$slots.image}</div>
      } else {
        return null
      }
    },
    mainClass(){
      const classList = ["rt-card-round"];
      if(this.color.length>0){
        classList.push('color-'+this.color);
      }
      if(this.previewCard) {
        classList.push('rt-card-preview');
        if(this.withIcon) {
          classList.push('rt-card-preview--icon')
        }
      }
      return classList.join(' ')
    }
  },
  mounted() {
    if(this.needResize > 0){
      setTimeout(()=>{
        window.dispatchEvent(new Event("resize"));
      }, this.needResize)
    }
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
    calculateMobileOptions(){
      const type =  deviceTypeStore.getStatus();
      this.isMobile = type === 'mobile';
      this.isTablet = type === 'tablet';
    }
  },
  render(h) {
    const innerContent = () => {
      return <div class={this.colorClass}>
        {this.labelIcon}
        {this.image}
        {this.mainIcon}
        <div class={this.contentClass}>
          <div class={this.innerContentClass}>
            {this.logo}
            <div class="sp-h-0-1">
              {this.headerHtml}
              {this.label}
              {this.content}
              {this.contentLargeSpace}
            </div>
          </div>
          {this.arrowText}
        </div>
      </div>
    };
    if(this.href) {
      return <a class={this.mainClass} href={this.href} target={this.openInNewTab ? '_blank' : '_self'}>
        {innerContent()}
      </a>
    } else {
      return <div class={this.mainClass}>
        {innerContent()}
      </div>
    }
  }
};
</script>
