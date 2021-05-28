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

      if (node?.$vnode?.data?.attrs?.rtCarouselId) {
        return node.$vnode.data.attrs.rtCarouselId
      } else {
        if(this.$parent) {
          return this.getParent(node.$parent)
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
            console.info('setParent', this.name)
            this.setParent()
          }, 400)


        }
      }
    }
  },
  mounted() {
    this.setParent()
  },
  render() {
    let name = this.name;
    if (name.length == 0) {
      name = this.parentName
    }
    if (name.length > 0) {
      carouselV3Store.createSlide(name, this._uid, this.$slots.default, this.index)
    }
    if(this.parentName.length > 0 || this.name.length > 0){
      return null
    }
    return <span class="d-none">slide item</span>
  }

}

</script>
