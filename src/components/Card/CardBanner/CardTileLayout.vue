<script type="text/jsx">
import variables from "../../../variables.json";
import debounce from "debounce";
const componentsList = {};
export default {
  name: "RtCardTileLayout",
  components: componentsList,
  props: {
    name: {
      type: String,
      default: 'tile'
    }
  },
  data: () => ({
    resizeData: ['.rt-font-h4', '.rt-font-small-paragraph', '.rt-card-banner'],
    isDesktop: window.innerWidth > parseInt(variables["tablet-upper-limit"]),
    children: []
  }),
  computed: {},
  mounted () {
    this.checkWidth();
    // this.children = Array.from(this.$el.querySelectorAll('.rt-card-banner-wrapper'))
    // if(this.isDesktop) {
    //   this.setChildrenWidth();
    // }
    window.addEventListener('resize', debounce(this.checkWidth, 1))
  },
  updated() {
    // this.children = Array.from(this.$el.querySelectorAll('.rt-card-banner-wrapper'))
    if(this.isDesktop) {
      this.setChildrenWidth()
    }
  },
  methods: {
    setChildrenWidth() {
      this.children = Array.from(this.$el.querySelectorAll('.rt-card-banner-wrapper'));
      if(this.isDesktop && this.children.length > 0) {
        this.children.map((item, index) => {
          item.classList.remove('rt-card-banner-wrapper--double-sized');
          item.querySelector('.rt-card-banner__image').removeAttribute('style');
          if (this.children.length % 4 == 0) {
            item.style.flexBasis = '25%';
            item.style.maxWidth = '25%'
          } else if (this.children.length % 5 == 0) {
            item.style.flexBasis = '20%';
            item.style.maxWidth = '20%';
            if(window.innerWidth < parseInt(variables['desktop-upper-limit'])) {
              item.querySelector('.rt-card-banner__image').style.width = '208px';
              item.querySelector('.rt-card-banner__image').style.height = '136px'
            }
            if(window.innerWidth <= parseInt(variables['laptop-upper-limit'])) {
              if(index < 2) {
                item.style.flexBasis = '50%';
                item.style.maxWidth = '50%';
              } else {
                item.style.flexBasis = 'calc(100% / 3)';
                item.style.maxWidth = 'calc(100% / 3)';
              }
            }
          } else if (this.children.length % 3 == 0) {
            if (index % 3 == 0) {
              item.style.flexBasis = '50%';
              item.style.maxWidth = '50%';
              item.classList.add('rt-card-banner-wrapper--double-sized')
            } else {
              item.style.flexBasis = '25%';
              item.style.maxWidth = '25%'
            }
          } else if (this.children.length % 7 == 0) {
            if (index == 0) {
              item.style.flexBasis = '50%';
              item.style.maxWidth = '50%';
              item.classList.add('rt-card-banner-wrapper--double-sized')
            } else {
              item.style.flexBasis = '25%';
              item.style.maxWidth = '25%'
            }
          }
        })
      } else {
        setTimeout(() => {
          this.setChildrenWidth();
        },100)
      }
    },
    checkWidth() {
      if(window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
        this.isDesktop = false
      } else {
        this.isDesktop = true
        this.setChildrenWidth();
      }
      this.$forceUpdate()
    }
  },
  render(h){
    const resizeData = {
      querySelectorsNames: this.resizeData
    };
    if(this.isDesktop) {
      return <div v-rt-resize-content-height={resizeData}>
        <div class="rt-container">
          <div class="rt-col">
            <div class="row">
              {this.$slots.default}
            </div>
          </div>
        </div>
      </div>
    } else {
      return <rt-carousel-v2 carousel-name={this.name} v-rt-resize-content-height={resizeData}>
        {this.$slots.default}
      </rt-carousel-v2>
    }
  }
};
</script>
