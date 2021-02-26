<script type="text/jsx">
import variables from "../../variables.json";
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
  updated() {

  },
  methods: {
    isDesktop() {
      if(window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
        this.desktop = false
      } else {
        this.desktop = true
      }
      this.$forceUpdate()
    }
  },
  render(h){
    if(this.desktop) {
      return <div class="rt-card-banner-wrapper">
        <div class="rt-card-banner">
          <div class="rt-card-banner__text-content">
            <div class="rt-card-banner__tag rt-font-control">{this.tag}</div>
            <h4 class="rt-font-h4 sp-b-0-3 sp-r-1">{this.$slots.title}</h4>
            <p class="rt-font-small-paragraph sp-b-0-3 sp-r-1">{this.$slots.description}</p>
          </div>
          <div class="rt-card-banner__image">
            <rt-img src={this.src}
                    webp-src={this.webpSrc}
                    lazy-src={this.lazySrc}
                    lg-src={this.lgSrc}
                    x2-src={this.x2Src}/>
          </div>
        </div>
      </div>
    }
    return <rt-carousel-slide-v2 parent-carousel-name={this.parentCarouselName}>
      <div class="rt-card-banner-wrapper">
        <div class="rt-card-banner">
          <div class="rt-card-banner__text-content">
            <div class="rt-card-banner__tag rt-font-control">{this.tag}</div>
            <h4 class="rt-font-h4 sp-b-0-3 sp-r-1">{this.$slots.title}</h4>
            <p class="rt-font-small-paragraph sp-b-0-3 sp-r-1">{this.$slots.description}</p>
          </div>
          <div class="rt-card-banner__image">
            <rt-img src={this.src}
                    webp-src={this.webpSrc}
                    lazy-src={this.lazySrc}
                    lg-src={this.lgSrc}
                    x2-src={this.x2Src}/>
          </div>
        </div>
      </div>
    </rt-carousel-slide-v2>
  }
};
</script>
