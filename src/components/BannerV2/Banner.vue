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
      bannerNextActiveId: null,
      activeSlideColor: null,
      slotHeight: null,
      type: null
    }),


    mounted: function () {
      this.updateSlots()
      bannerStore.addWatcher(this.bannerName, this.updateSlots)
      deviceTypeStore.addWatcher(this._uid,this.setDeviceType);
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
      setDeviceType(){
        const type = deviceTypeStore.getStatus()
        if(this.type != type){
          this.type = type;
        }
      },

      updateSlots() {
        this.getSlots();
        this.getSlotSort();
        this.getActiveSlotIndex()
        this.getSlotHeight();
      },
      getActiveSlotIndex(){
        const data = bannerStore.getActiveId(this.bannerName);
        this.bannerActiveId = data.activeId
        this.bannerNextActiveId = data.nextActiveId
        this.bannerNextOrientation = data.nextOrientation
        this.activeSlideColor = data.activeColor
      },
      getSlots() {
        this.customSlotsSort  = bannerStore.getSlotSort(this.bannerName)
      },
      getSlotSort() {
        this.customSlots = bannerStore.getSlot(this.bannerName)
      },
      getSlotHeight(){
        this.slotHeight = bannerStore.getHeight(this.bannerName)
      },
      mouseenter(){
        if (this.type != 'mobile') {
          this.isHover = true
        }
      },
      mouseleave() {
        if (this.type != 'mobile') {
          this.isHover = false
        }
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
        return classList.join(' ')
      },
      bannerItems(){
        return this.customSlotsSort?.map((key)=>{
          const slide = this.customSlots[key];
          const isActive = key == this.bannerActiveId
          return <rt-banner-virtual-item-v2
            next-id={this.bannerNextActiveId}
            id={key}
            height={this.slotHeight}
            banner-name={this.bannerName}
            active-id={this.bannerActiveId}
            orientation={this.bannerNextOrientation}
            data={slide} id={key}/>
        })
      },
      paginator(){
        if(this.customSlotsSort.length > 1) {
          return <rt-banner-paginator-v2 pause-on-hover={this.pauseOnHover}
                                         color={this.activeSlideColor}
                                         height={this.slotHeight}
                                         pause={this.isHover}
                                         fps={this.fps}
                                         active-id={this.bannerActiveId}
                                         items={this.customSlotsSort}
                                         banner-name={this.bannerName}
                                         time={this.time}></rt-banner-paginator-v2>
        }
        return null
      },
      bannerStyle(){
        if(this.type == 'mobile'){
          return {
            minHeight : (this.slotHeight)+'px'
          }
        }
        return {}

      }

    },
    render(h) {
      return <div class={this.bannerClass} onMouseenter={this.mouseenter} onMouseleave={this.mouseleave} style={this.bannerStyle}>
          {this.bannerItems}
          {this.$slots.default}
          {this.paginator}
        </div>

    }
  }

</script>
