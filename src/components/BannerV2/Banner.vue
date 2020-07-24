<script type="text/jsx">

  // import debounce from "debounce";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import {bannerStore} from "./BannerStore";
  import RtBannerVirtualItemV2 from './BannerVirtualItem.vue'
  import BannerPaginator from "./BannerPaginator.vue";

  const componentsList = {};
  componentsList[RtBannerVirtualItemV2.name] = RtBannerVirtualItemV2
  componentsList[BannerPaginator.name] = BannerPaginator

  //dark-slate
  //gray
  //orange-super

  export default {
    name: "RtBannerV2",
    components: componentsList,
    props: {
      colorType: {
        default: 'gray',
        type: String
      },
      name: {
        type: String,
        default: ''
      },
      time: {
        type: Number,
        default: 3000
      },
      fps: {
        type: Number,
        default: 60
      },
      pauseOnHover:{
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      customSlots: {},
      customSlotsSort: [],
      bannerActiveId: null,
      isHover: false,
      bannerNextOrientation: null,
      bannerNextActiveId: null
    }),


    mounted: function () {
      this.updateSlots()
      bannerStore.addWatcher(this.bannerName, this.updateSlots)
    },
    beforeMount() {

    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy: function () {
    },

    methods: {
      updateSlots() {
        this.getSlots();
        this.getSlotSort();
        this.getActiveSlotIndex()
      },
      getActiveSlotIndex(){
        const data = bannerStore.getActiveId(this.bannerName);
        this.bannerActiveId = data.activeId
        this.bannerNextActiveId = data.nextActiveId
        this.bannerNextOrientation = data.nextOrientation
      },
      getSlots() {
        this.customSlotsSort  = bannerStore.getSlotSort(this.bannerName)
      },
      getSlotSort() {
        this.customSlots = bannerStore.getSlot(this.bannerName)
      },
      mouseenter(){
        this.isHover = true
      },
      mouseleave(){
        this.isHover = false
      }
    },
    computed: {
      bannerName() {
        if (this.name.length > 0) {
          return this.name
        } else {
          return this._uid
        }
      },
      bannerClass() {
        const classList = ['rt-n-banner']
        classList.push('color-block--' + this.colorType)
        if (this.colorType != 'gray') {
          classList.push('color-white')
        }
        return classList.join(' ')
      },
      bannerItems(){
        return this.customSlotsSort?.map((key)=>{
          const slide = this.customSlots[key];
          const isActive = key == this.bannerActiveId
          return <rt-banner-virtual-item-v2
            next-id={this.bannerNextActiveId}
            id={key}
            active-id={this.bannerActiveId}
            orientation={this.bannerNextOrientation}
            data={slide} id={key}/>
        })
      }
    },
    render(h) {
      return <div class={this.bannerClass} onMouseenter={this.mouseenter} onMouseleave={this.mouseleave}>
          {this.bannerItems}
          {this.$slots.default}
          <rt-banner-paginator-v2 pause-on-hover={this.pauseOnHover}
                                  pause={this.isHover}
                                  fps={this.fps}
                                  active-id={this.bannerActiveId}
                                  items={this.customSlotsSort}
                                  banner-name={this.bannerName}
                                  time={this.time}></rt-banner-paginator-v2>
        </div>

    }
  }

</script>
