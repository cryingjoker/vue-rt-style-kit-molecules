<script type="text/jsx">

  // import debounce from "debounce";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import {bannerStore} from "./BannerStore";
  import RtBannerVirtualItemV2 from './BannerVirtualItem.vue'

  const componentsList = {};
  componentsList[RtBannerVirtualItemV2.name] = RtBannerVirtualItemV2

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
      }
    },
    data: () => ({
      customSlots: {},
      customSlotsSort: [],
      bannerActiveId: null
    }),


    mounted: function () {
      console.info('this.bannerName', this.bannerName)
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
        this.bannerActiveId = bannerStore.getActiveId(this.bannerName)
      },
      getSlots() {
        this.customSlotsSort  = bannerStore.getSlotSort(this.bannerName)
      },
      getSlotSort() {
        this.customSlots = bannerStore.getSlot(this.bannerName)

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
          return <rt-banner-virtual-item-v2 active-id={this.bannerActiveId} data={slide}/>
        })
      }
    },
    render(h) {
      return <div class="rt-container">
        <div class={this.bannerClass}>

          {this.bannerItems}
          {this.$slots.default}

        </div>
      </div>

    }
  }

</script>
