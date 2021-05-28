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
    getParent(node = this.$parent) {
      console.info('node', node, this.$parent, node.$parent, node.$parent.$parent)
      if (node.$vnode.data.attrs.rtCarouselId) {
        return node.$vnode.data.attrs.rtCarouselId
      } else {
        console.info('##@@')
        return this.getParent(node.$parent)
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
            console.info('setParent', this.name)
            this.setParent()
          }, 400)


        }
      }
    }
  },
  mounted() {

  },
  render() {
    let name = this.name;
    if (name.length == 0) {
      name = this.parentName
    }
    if (name.length > 0) {
      carouselV3Store.createSlide(name, this._uid, this.$slots.default, this.index)
    }
    return null
  }

}

</script>
