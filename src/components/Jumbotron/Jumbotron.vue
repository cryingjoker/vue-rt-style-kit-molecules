<script type="text/jsx">
import './Jumbotron.styl'
import {deviceTypeStore} from "vue-rt-style-kit-atoms";

const componentsList = {};

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
    descriptionColor: {
      type: String,
      default: 'white'
    },
    url: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    section: {
      type: String,
      default: ''
    },
    showUrlOnMobile: {
      type: Boolean,
      default: true
    },
    showUrlOnTablet: {
      type: Boolean,
      default: false
    },
    showUrlOnDesktop: {
      type: Boolean,
      default: false
    },
    gaEventType: {
      type: String,
      default: 'b2c'
    },
    ga: {
      type: Object,
      default: () => {
        return {}
      }
    },
    desktopColumnSize: {
      type: Number,
      default: 6
    },
    flagBackground: {
      type: String,
      default: 'purple'
    },
    flagScrollToId: {
      type: String,
      default: 'purple'
    }
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
    fireGoogleAn(e) {
      if (this.ga) {
        if (e) {
          e.preventDefault();
        }
        let jumbotronName;

        if (this.ga?.name?.length > 0) {
          jumbotronName = this.ga.name
        } else {
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
        if (this.ga?.section?.length > 0) {
          section = this.ga.section
        } else {
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
        if (e && this.url.length > 0) {
          global.location.href = this.url;
        }
      }
    },
    setGoogleAn() {
      if (this.ga && Object.keys(this.ga).length > 0) {
        this.googleAn(true)
      }
    },
    googleAn(bind) {
      if (bind) {
        const el = this.$el.querySelector('a, button');
        if (el) {
          el.addEventListener('click', (e) => {
            if (!e.target.getAttribute('data-ga-pushed')) {
              e.preventDefault();
              this.fireGoogleAn()
              e.target.setAttribute('data-ga-pushed', 'true');
              e.target.click();
            }
          }, false);
        }
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

  },
  render(h) {
    const imageRender = ()=>{
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
        return <div class={classList.join(' ')}>{this.$scopedSlots.image()}</div>
      }
      return null
    }
    const imageX2Render=()=> {
      if (this.$slots['image-x2']) {
        const classList = ['rt-jumbotron-image-container', 'd-none', 'x2-d-block'];
        if (this.$slots['image-tablet']) {
          classList.push('td-d-none')
        }
        if (this.$slots['image-mobile']) {
          classList.push('md-d-none')
        }
        return <div class={classList.join(' ')}>{this.$scopedSlots['image-x2']()}</div>
      }
      return null
    }
    const imageTabletRender=()=> {

      if (this.$slots['image-tablet']) {
        const classList = ['rt-jumbotron-image-container', 'td-d-block', 'd-none'];
        if (this.$slots['image-mobile']) {
          classList.push('md-d-none');
        }
        return <div class={classList.join(' ')}>{this.$scopedSlots['image-tablet']()}</div>
      }
      return null
    }
    const imageMobileRender=()=> {
      if (this.$slots['image-mobile']) {
        const classList = ['rt-jumbotron-image-container', 'md-d-flex', 'd-none'];

        return <div class={classList.join(' ')}>{this.$scopedSlots['image-mobile']()}</div>
      }
      return null
    }
    const header=()=> {
      if (this.$slots.header) {
        const classList = ['sp-b-0-4', 'td-sp-b-0-3'];
        if (this.$slots['mobile-header']) {
          classList.push('md-d-none')
        }
        if (this.$slots['tablet-header']) {
          classList.push('td-d-none')
        }
        return <div class={classList.join(' ')}>
          {this.$scopedSlots.header()}
        </div>
      }
      return null
    }
    const mobileHeader=()=> {
      if (this.$slots['mobile-header']) {
        return <div class="sp-b-0-4 td-sp-b-0-3 md-d-flex d-none">
          {this.$scopedSlots['mobile-header']()}
        </div>
      }
      return null
    }
    const renderFlag = ()=>{
      if(this.$slots['flag-text']) {
        let flagClassList = 'jumbotron-flag'
        let flagSvgClassList = 'jumbotron-flag-svg jumbotron-flag-svg--' + this.flagBackground;
        if (this.flagScrollToId) {
          return <button type="button" class={flagClassList}
                         v-rt-scroll-to-on-click={{"scrollToId": this.flagScrollToId}}>
            <svg class={flagSvgClassList} width="192" height="120" viewBox="0 0 192 120"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M52.2803 0L0.085734 0C-1.75025 4.93649 26.4605 87.7044 31.1282 91.6947C33.9523 94.1068 37.6202 95.6032 41.4913 96.1592C41.5001 96.1632 41.5143 96.1708 41.5266 96.1749L192 120V0.000449098L52.2803 0Z"/>
            </svg>
            <p class="color-white jumbotron-flag-text rt-font-h3">{this.$scopedSlots['flag-text']()}</p>
          </button>
        }else{
          return <button type="button" class={flagClassList}>
            <svg class={flagSvgClassList} width="192" height="120" viewBox="0 0 192 120"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M52.2803 0L0.085734 0C-1.75025 4.93649 26.4605 87.7044 31.1282 91.6947C33.9523 94.1068 37.6202 95.6032 41.4913 96.1592C41.5001 96.1632 41.5143 96.1708 41.5266 96.1749L192 120V0.000449098L52.2803 0Z"/>
            </svg>
            <p class="color-white jumbotron-flag-text rt-font-h3">{this.$scopedSlots['flag-text']()}</p>
          </button>
        }
      }
      return null
    }

    const tabletHeader=()=> {
      if (this.$slots['tablet-header']) {
        return <div class="sp-b-0-4 td-sp-b-0-3 md-d-none td-d-flex d-none">
          {this.$scopedSlots['tablet-header']()}
        </div>
      }
      return null
    }

    const label=()=> {
      if (this.$slots.label) {
        if (this.$slots.label.find(i => i.tag && i.tag != 'br')) {
          this.$slots.label.filter(i => i.tag).forEach((item) => {
            item.data = item.data || {}
            item.data.staticClass = 'rt-font-h1'
          })
          return this.$scopedSlots.label()
        } else {
          return <h1 class="rt-font-h1">
            {this.$scopedSlots.label()}
          </h1>
        }
      }
      return null
    }

    const description=()=> {
      if (this.$slots['description']) {
        const classList = [, 'rt-font-paragraph'];
        if (this.$slots['anchor']) {
          classList.push('sp-t-0-3')
        } else {
          classList.push('sp-t-0-4')
          classList.push('td-sp-t-0-3')
        }

        classList.push('color-' + this.descriptionColor)
        return <p class={classList.join(' ')}>
          {this.$scopedSlots.description()}

        </p>
      }
      return null
    }
    const bodyHtml=()=> {
      if (this.$slots['body-html']) {
        const classList = ['sp-t-0-4', 'td-sp-t-0-3'];
        return <div class={classList.join(' ')}>
          {this.$scopedSlots['body-html']()}
        </div>
      }
      return null
    }
    const anchorContainer=()=> {

      if (this.$slots['anchor']) {
        const achorItems = this.$slots['anchor'].map((item, index) => {
          const classList = [];
          if (index > 0) {
            classList.push('sp-t-0-4')
            classList.push('td-sp-t-0-3')
          } else {
            classList.push('sp-t-1-3')
            classList.push('td-sp-t-1-1')
            classList.push('md-sp-t-1')
          }
          return <div class={classList.join(' ')}>{this.$scopedSlots['anchor']()[index]}</div>
        })
        return <div>{achorItems}</div>
      }
    }
    const footer=()=> {
      if (this.$slots.footer) {
        const classList = ['sp-t-1-2', 'td-sp-t-1-1'];
        return <div class={classList.join(' ')}>
          {this.$scopedSlots.footer()}
        </div>
      }
      return null
    }
    const renderUrl=()=> {
      if (this.url && (this.type == 'mobile' && this.showUrlOnMobile || this.type == 'tablet' && this.showUrlOnTablet || this.type.search('desktop')==0 && this.showUrlOnDesktop)) {
        return <a onClick={this.fireGoogleAn} href={this.url} class="rt-jumbotron-url"></a>
      }
      return null
    }
    return <div class={this.jumbotronClass}>
      {renderFlag()}
      <rt-row class="rt-jumbotron-image flex-fill">
        <rt-col size={6} large-size={5} tablet-size={3} m-hide={true}></rt-col>
        <rt-col size={6} large-size={7} tablet-size={3} mobile-size={3}>
          <div class="rt-jumbotron-gradient md-d-none d-block"></div>
          {imageRender()}
          {imageX2Render()}
          {imageTabletRender()}
          {imageMobileRender()}
        </rt-col>
      </rt-row>
      <div class="rt-container d-flex flex-fill height-fill ">
        <rt-col size={this.desktopColumnSize} tablet-size="3" mobile-size="3" class="d-flex flex-fill md-height-fill">
          <div class="d-flex flex-start-center md-flex-start-top rt-jumbotron-inner">
            <div class="md-sp-t-1-2 md-sp-b-2 d-flex flex-column rt-jumbotron-inner-content">
              <div class="md-flex-fill">
                {header()}
                {tabletHeader()}
                {mobileHeader()}
                {label()}
                {description()}
                {bodyHtml()}
                {anchorContainer()}
                {footer()}
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
