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
    },
    boost:{
      type:Boolean,
      default: false
    }
  },
  data: () => ({
    parentName: '',
    oldHtml: ''
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
    checkHtml(){
      const html = this.$el.innerHTML
      const res = this.oldHtml == html
      this.oldHtml = html
      return res

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
    },
    getName(){
      let name = this.name;
      if (name.length == 0) {
        name = this.parentName
      }
      return name
    }
  },
  mounted() {
    this.setParent()
    const name = this.getName()
    carouselV3Store.createSlide(name, this._uid, this.$slots.default, this.index)
    this.checkHtml()
  },
  beforeUpdate() {

  },
  updated(a,b) {

    if(!this.checkHtml() && !this.boost) {
      const name = this.getName()
      carouselV3Store.updateSlide(name, this._uid, this.$slots.default, this.index)
    }
  },
  beforeDestroy() {
    let name = this.name;
    if (name.length == 0) {
      name = this.parentName
    }
    carouselV3Store.removeSlide(name, this._uid)
  },

  render() {
    if(!this.boost) {
      setTimeout(() => {
        this.$el.remove()
      }, 10)

      return <span class="d-none" id={"v-" + this._uid}>{this.$slots.default}</span>
    }
      if (this.parentName.length > 0 || this.name.length > 0) {
        return null
      }

      return <span class="d-none">slide item</span>

  }

}

</script>
