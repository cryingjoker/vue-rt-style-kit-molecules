<script type="text/jsx">
  const componentsList = {};
  import {carouselStore} from "./CarouselStore";

  export default {
    name: "RtCarouselSlideV2",
    components: componentsList,
    props: {
      parentCarouselName: {
        type: String,
        default: '123'
      }
    },
    data: () => ({}),
    computed: {},
    mounted() {
      if (this.parentCarouselName.length > 0) {
        carouselStore.runAfterInit(this.parentCarouselName, this.fillCarouselSliderStore)
      }
    },
    beforeDestroy() {
      this.clearCarouselSliderStore()
    },
    methods: {
      clearCarouselSliderStore() {
        carouselStore.removeSlots(this.parentCarouselName, this._uid)
      },
      fillCarouselSliderStore() {
        carouselStore.setSlot(this.parentCarouselName, this.$slots.default, this._uid);
      }
    },
    render(h) {
      return null
    }
  };
</script>
