<script type="text/jsx">
import variables from "../../variables.json";
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
    desktop: window.innerWidth > parseInt(variables["tablet-upper-limit"])
  }),
  computed: {

  },
  mounted () {
    this.isDesktop();
    if(this.desktop) {
      this.setChildrenWidth();
    }
    window.addEventListener('resize', debounce(this.isDesktop, 500))
  },
  updated() {
    if(this.desktop) {
      this.setChildrenWidth()
    }
  },
  methods: {
    setChildrenWidth() {
      if(this.desktop) {
        this.$children?.map((item, index) => {
          item.$el.classList.remove('rt-card-banner-wrapper--double-sized')
          if (this.$children.length % 4 == 0) {
            item.$el.style.flexBasis = '25%';
            item.$el.style.maxWidth = '25%'
          } else if (this.$children.length % 5 == 0) {
            item.$el.style.flexBasis = '20%';
            item.$el.style.maxWidth = '20%'
          } else if (this.$children.length % 3 == 0) {
            if (index % 3 == 0) {
              item.$el.style.flexBasis = '50%';
              item.$el.style.maxWidth = '50%';
              item.$el.classList.add('rt-card-banner-wrapper--double-sized')
            } else {
              item.$el.style.flexBasis = '25%';
              item.$el.style.maxWidth = '25%'
            }
          } else if (this.$children.length % 7 == 0) {
            if (index == 0) {
              item.$el.style.flexBasis = '50%';
              item.$el.style.maxWidth = '50%';
              item.$el.classList.add('rt-card-banner-wrapper--double-sized')
            } else {
              item.$el.style.flexBasis = '25%';
              item.$el.style.maxWidth = '25%'
            }
          }
        })
      }
    },
    isDesktop() {
      if(window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
        this.desktop = false
      }
      this.desktop = true
      this.$forceUpdate()
    }
  },
  render(h){
    const resizeData = {
      querySelectorsNames: this.resizeData
    };
    if(window.innerWidth > parseInt(variables["tablet-upper-limit"])) {
      return <div v-rt-resize-content-height={resizeData}>
        <div class="rt-container">
          <div class="rt-col">
            <div class="row">
              {this.$slots.default}
            </div>
          </div>
        </div>
      </div>
    }
    return <rt-carousel-v2 carousel-name={this.name} v-rt-resize-content-height={resizeData}>
      {this.$slots.default}
    </rt-carousel-v2>
  }
};
</script>
