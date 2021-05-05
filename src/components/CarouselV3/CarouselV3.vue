<script type="text/jsx">
import CarouselV3RenderItem from "./CarouselV3RenderItem.vue"
import {carouselV3Store} from "./CarouselV3Store";
import {sliderStore} from "../Slider/SliderStore";

export default {
  name: "RtCarouselV3",
  props: {
    name: {
      type: String,
      default: ''
    },
    colInRow: {
      type: [String, Number],
      default: 3
    },
    scrollableOnDesktop: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    slides: [],
    activeItemIndex: 0
  }),
  mounted() {
    let localName = this.name;
    if (localName.length == 0) {
      localName = this._uid + '';
    }
    carouselV3Store.addWatcher(localName, this.getSlide)
  },
  methods: {
    getSlide() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      this.slides = [...carouselV3Store.getSliderContent(localName)]
      this.activeItemIndex = carouselV3Store.getActiveIndex(localName)
    },
    setPrewActive() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      carouselV3Store.setPrewSlide(localName)
    },
    setNextActive() {
      let localName = this.name;
      if (localName.length == 0) {
        localName = this._uid;
      }
      carouselV3Store.setNextSlide(localName)
    }
  },
  render(h) {
    //calc(-27.5% - 33.33%*2);
    const renderSlides = () => {
      if (this.slides.length > 0) {
        return this.slides.reduce((a, b) => {
          if (!Array.isArray(a) || !Array.isArray(a[0])) {
            return [[a, b]]
          } else {
            let size = a.length;
            if (a[size - 1].length == this.colInRow) {
              a.push([])
              size += 1
            }
            a[size - 1].push(b)
            return a
          }
        }).map((row, index) => {
            if (!Array.isArray(row)) {
              return null
            }
            const options = {}
            if (!this.scrollableOnDesktop && index > 0) {
              options.class = ['sp-t-1', 'td-sp-t-none']
            }
            console.info('row', row)
            return h('rt-row', options, row.map((slot) => {
              return h(CarouselV3RenderItem, {props: {colInRow: this.colInRow - 0}}, slot)
            }))
          }
        )

      }
      return null
    }
    const arrowRender = () => {
      return <div class="rt-carousel-v3-arrows">
        <div onClick={this.setPrewActive}
             class="rt-carousel-v3-arrow rt-sys-icon-hover--orange rt-carousel-v3-arrow-left">
          <rt-system-icons name="chevron left"></rt-system-icons>
        </div>
        <div onClick={this.setNextActive}
             class="rt-carousel-v3-arrow rt-sys-icon-hover--orange rt-carousel-v3-arrow-right">
          <rt-system-icons name="chevron right"></rt-system-icons>
        </div>
      </div>
    }
    //-21.7%; 1
    // -51.8% 2 30.1
    // -83.3%; 31.5
    // -111.5%%; 28.2

    const getStyle = ()=>{
      const style = {}
      if(this.activeItemIndex > 0 && this.scrollableOnDesktop){
        const step = parseInt(this.activeItemIndex/this.colInRow)+1;
        style.marginLeft = -21.7*step
        if(this.activeItemIndex > 1){
          style.marginLeft -= 30.1* (this.activeItemIndex-step)
        }

        console.info('Math.abs(style.marginLeft)%1',Math.abs(style.marginLeft)%1);
        // if(style.marginLeft == parseInt(style.marginLeft)){
        //   style.marginLeft -= 0.5
        // }
        style.marginLeft = style.marginLeft+'%'
      }
      return style
    }
    return <div class="rt-carousel-v3">

      <div class="rt-container relative">
        <div class="rt-carousel-v3-wrap">
          {arrowRender()}
            {h('rt-col', {
              attrs: {rtCarouselId: this.name || this._uid},
              props: {size: this.scrollableOnDesktop ? 11 : 12},
              class: [(this.scrollableOnDesktop ? 'rt-carousel-v3--scroll' : '')],
              style: getStyle()
            }, [
              renderSlides(),
              this.$slots.default
            ])}
        </div>
      </div>
    </div>
  }

}

</script>
