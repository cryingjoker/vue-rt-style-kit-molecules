<script type="text/jsx">
import variables from "../../../variables.json";
import './CardBanner.styl'
import debounce from "debounce";
const componentsList = {};
export default {
  name: "RtCardBanner",
  components: componentsList,
  props: {
    isWhiteFont: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    webpSrc: {
      type: String,
      default: ''
    },
    lazySrc: {
      type: String,
      default: ''
    },
    lgSrc: {
      type: String,
      default: ''
    },
    x2Src: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    parentCarouselName: {
      type: String,
      default: 'tile'
    },
    link: {
      type: String,
      default: '#'
    }
  },
  data: () => ({
    desktop: window.innerWidth > parseInt(variables["tablet-upper-limit"])
  }),
  computed: {},
  mounted () {
    this.isDesktop();
    window.addEventListener('resize', debounce(this.isDesktop, 500))
  },
  updated() {},
  methods: {
    isDesktop() {
      this.desktop = window.innerWidth > parseInt(variables["tablet-upper-limit"]);
      this.$forceUpdate()
    },
    pushGA() {
      if(!window.dataLayer) {
        window.dataLayer = []
      }
      dataLayer.push({
        event: 'b2c',
        type: 'support_info',
        value: this.$slots.title[0].elm.nodeValue
      })
    }
  },
  render(h){
    if(this.desktop) {
      return <div class="rt-card-banner-wrapper">
        <a class="rt-card-banner" href={this.link} onClick={this.pushGA}>
          <div class="rt-card-banner__text-content">
            <div class="rt-card-banner__tag rt-font-control">{this.tag}</div>
            <h4 class="rt-font-h4 sp-b-0-3 sp-r-1">{this.$slots.title}</h4>
            <p class="rt-font-small-paragraph sp-b-0-3 sp-r-1 color-main05">{this.$slots.description}</p>
          </div>
          <div class="rt-card-banner__image">
            <rt-img src={this.src}
                    webp-src={this.webpSrc}
                    lazy-src={this.lazySrc}
                    lg-src={this.lgSrc}
                    x2-src={this.x2Src}/>
          </div>
        </a>
      </div>
    }
    return <rt-carousel-slide-v2 parent-carousel-name={this.parentCarouselName}>
      <div class="rt-card-banner-wrapper">
        <a class="rt-card-banner" href={this.link} onClick={this.pushGA}>
          <div class="rt-card-banner__text-content">
            <div class="rt-card-banner__tag rt-font-control">{this.tag}</div>
            <h4 class="rt-font-h4 sp-b-0-3 sp-r-1">{this.$slots.title}</h4>
            <p class="rt-font-small-paragraph sp-b-0-3 sp-r-1 color-main05">{this.$slots.description}</p>
          </div>
          <div class="rt-card-banner__image">
            <rt-img src={this.src}
                    webp-src={this.webpSrc}
                    lazy-src={this.lazySrc}
                    lg-src={this.lgSrc}
                    x2-src={this.x2Src}/>
          </div>
        </a>
      </div>
    </rt-carousel-slide-v2>
  }
};
</script>
