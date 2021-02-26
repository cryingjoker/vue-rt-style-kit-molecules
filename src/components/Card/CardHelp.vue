<script type="text/jsx">
import variables from "../../variables.json";
const componentsList = {};
export default {
  name: "RtCardHelp",
  components: componentsList,
  props: {
    color: {
      type: String,
      default: 'dark-slate'
    },
    dualWidth: {
      type: Boolean,
      default: false
    },
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
    link: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  computed: {
    cardClass(){
      let classList = 'rt-card-help';
      if(this.dualWidth) {
        classList += ' rt-card-help--dual';
      }
      if(this.isWhiteFont) {
        classList += ' color-white'
      }
      classList += ` color-block--${this.color}`;
      return classList;
    }
  },
  mounted () {},
  updated() {},
  methods: {},
  render(h){
    if(this.dualWidth) {
      return <a class={this.cardClass} href={this.link}>
        <div class="rt-card-help__content-wrapper">
          <div class="rt-card-help__content">
            <div>
              <h4 class="rt-font-h4 sp-b-1 td-sp-b-0-3">{this.$slots.title}</h4>
              <p class="rt-font-small-paragraph sp-b-3-2 td-sp-b-2">{this.$slots.description}</p>
            </div>
            <div class="rt-card-help__link flex-start-center">
              <span class="rt-card-help__link-text rt-font-small-paragraph">Перейти</span>
              <rt-system-icons name="arrow right" color="white"/>
            </div>
          </div>
          <div class="rt-card-help__image">
            <rt-img src={this.src}
                    webp-src={this.webpSrc}
                    lazy-src={this.lazySrc}
                    lg-src={this.lgSrc}
                    x2-src={this.x2Src}/>
          </div>
        </div>
      </a>
    } else {
      return <a class={this.cardClass} href={this.link}>
        <div class="rt-card-help__inner">
          <div class="">
            <h4 class="rt-font-h4 sp-b-1 td-sp-b-0-3">{this.$slots.title}</h4>
            <p class="rt-font-small-paragraph sp-b-0-2 md-sp-b-3-4">{this.$slots.description}</p>
          </div>
          <div class="rt-card-help__bottom">
            <div class="rt-card-help__link flex-start-center">
              <span class="rt-card-help__link-text rt-font-small-paragraph">Перейти</span>
              <rt-system-icons name="arrow right" color="white"/>
            </div>
            <div class="rt-card-help__image">
              <rt-img src={this.src}
                      webp-src={this.webpSrc}
                      lazy-src={this.lazySrc}
                      lg-src={this.lgSrc}
                      x2-src={this.x2Src}/>
            </div>
          </div>
        </div>
      </a>
    }
  }
};
</script>
