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
    parentName : ''
  }),
  mounted() {

    if(this.name.length == 0 && this.$parent.$vnode.data.attrs.rtCarouselId){
        this.parentName = this.$parent.$vnode.data.attrs.rtCarouselId + ''
    }
  },
  render() {
    let name = this.name;
    if(name.length == 0){
      name = this.parentName
    }
    if(name.length > 0) {
      carouselV3Store.createSlide(name, this._uid, this.$slots.default, this.index)
    }
    return null
  }

}

</script>
