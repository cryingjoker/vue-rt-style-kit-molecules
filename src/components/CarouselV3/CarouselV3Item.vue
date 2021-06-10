<script type="text/jsx">
import {carouselV3Store} from "./CarouselV3Store";

export default {
  name: "RtCarouselSlideV3",
  props: {
    name: {
      type: String,
      default: ''
    },
    index: {
      type: [Number, String],
      default: -1
    }
  },
  data: () => ({
    parentName: ''
  }),
  methods: {
    getParent(node = this.$el.parentNode, deep = 1) {
      if (node.getAttribute('rtcarouselid')) {
        return node.getAttribute('rtcarouselid')
      } else {
        if(node.parentNode && deep < 5) {
          return this.getParent(node.parentNode, deep + 1)
        }else {
          return undefined
        }
      }
    },
    setParent() {

      if (this.name.length == 0) {

        const rtCarouselId = this.getParent()
        if (rtCarouselId) {

          if (this.name.length == 0 && rtCarouselId) {
            this.parentName = rtCarouselId + ''

          }
        } else {
          setTimeout(() => {
            this.setParent()
          }, 400)


        }
      }
    }
  },
  mounted() {
    this.setParent()
    let name = this.name;
    if (name.length == 0) {
      name = this.parentName
    }
    carouselV3Store.createSlide(name, this._uid, this.$slots.default, this.index)
  },
  render() {




    if(this.parentName.length > 0 || this.name.length > 0){
      return null
    }
    return <span class="d-none">slide item</span>
  }

}

</script>
