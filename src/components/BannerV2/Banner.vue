<script type="text/jsx">

// import debounce from "debounce";
import {deviceTypeStore} from "vue-rt-style-kit-atoms";
import './BannersV2.styl'
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
      default: 4500
    },
    fps: {
      type: Number,
      default: 60
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    preventScroll:{
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    customSlots: {},
    customSlotsSort: [],
    bannerActiveId: null,
    bannerName: null,
    isHover: false,
    bannerNextOrientation: null,
    bannerNextActiveId: null,
    activeSlideColor: null,
    slotHeight: null,
    type: null,
    xDown: null,
    yDown: null,
    lastDateUpdate: new Date() - 0,
    wheelPause: false

  }),
  watch:{
    customSlotsSort(newVal,oldVal){
      if(JSON.stringify(newVal) != JSON.stringify(newVal)){
        this.lastDateUpdate = new Date() - 0;
      }
    }
  },

  mounted: function () {
    if (this.name.length > 0) {
      this.bannerName = this.name
    } else {
      this.bannerName = this._uid
    }

    this.updateSlots()
    bannerStore.addWatcher(this.bannerName, this.updateSlots)
    deviceTypeStore.addWatcher(this._uid, this.setDeviceType);
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
    wheelMove(e) {
      if (Math.abs(e.deltaX) > 0) {
        e.stopImmediatePropagation()
        e.preventDefault()
      }
      if(!this.wheelPause) {
        if (Math.abs(e.deltaX) > 30) {
          const activeIndex = this.customSlotsSort.indexOf(this.bannerActiveId);
          const size = this.customSlotsSort.length;
          const prev = (activeIndex - 1 + size) % size;
          const next = (activeIndex + 1) % size;
          if (e.deltaX > 0) {
            bannerStore.setActiveId(this.bannerName, this.customSlotsSort[next], false, false, 1)
          } else {
            bannerStore.setActiveId(this.bannerName, this.customSlotsSort[prev], false, false, -1)
          }
          this.wheelPause = true;
          setTimeout(() => {
            this.wheelPause = false
          }, 500)
        }
      }

    },
    setDeviceType() {
      const type = deviceTypeStore.getStatus()
      if (this.type != type) {
        this.type = type;
      }
    },

    updateSlots() {
      this.getSlots();
      this.getSlotSort();
      this.getActiveSlotIndex()
      this.getSlotHeight();
    },
    getActiveSlotIndex() {
      const data = bannerStore.getActiveId(this.bannerName);
      this.bannerActiveId = data.activeId
      this.bannerNextActiveId = data.nextActiveId
      this.bannerNextOrientation = data.nextOrientation
      this.activeSlideColor = data.activeColor
    },
    getSlots() {
      this.customSlots = bannerStore.getSlot(this.bannerName)
    },
    getSlotSort() {
      this.customSlotsSort = bannerStore.getSlotSort(this.bannerName) || []
    },
    getSlotHeight() {
        this.slotHeight = bannerStore.getHeight(this.bannerName)
    },
    mouseenter() {
      if (this.type != 'mobile') {
        this.isHover = true
      }
    },
    mouseleave() {
      if (this.type != 'mobile') {
        this.isHover = false
      }
    },
    touchstart(event) {
      this.xDown = event.touches[0].clientX;
      this.yDown = event.touches[0].clientY;
    },
    touchmove(event) {
      if (!this.xDown || !this.yDown) {
        return;
      }
      const xUp = event.touches[0].clientX
      const yUp = event.touches[0].clientY

      const xDiff = this.xDown - xUp
      const yDiff = this.yDown - yUp

      const activeIndex = this.customSlotsSort.indexOf(this.bannerActiveId);
      const size = this.customSlotsSort.length;
      const prev = (activeIndex - 1 + size) % size;
      const next = (activeIndex + 1) % size;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (this.preventScroll) {
          event.preventDefault();
        }
        if (xDiff > 0) {

          bannerStore.setActiveId(this.bannerName, this.customSlotsSort[next], false, false, 1)

        } else {
          bannerStore.setActiveId(this.bannerName, this.customSlotsSort[prev], false, false, -1)
        }
      }

      this.xDown = null;
      this.yDown = null;
    },

  },
  computed: {

    bannerClass() {
      const classList = ['rt-n-banner']
      return classList.join(' ')
    },
    bannerItems() {
      return this.customSlotsSort?.map((key) => {
        const slide = this.customSlots[key];
        return <rt-banner-virtual-item-v2
          next-id={this.bannerNextActiveId}
          id={key}
          last-date-update={this.lastDateUpdate}
          height={this.slotHeight}
          banner-name={this.bannerName}
          active-id={this.bannerActiveId}
          orientation={this.bannerNextOrientation}
          data={slide} id={key}/>
      })
    },
    paginator() {
      if (this.customSlotsSort.length > 1) {
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
    bannerStyle() {
      if (this.type == 'mobile') {
        return {
          minHeight: (this.slotHeight) + 'px'
        }
      }
      return {}

    },
  },
  render(h) {
    return <div class={this.bannerClass}
                onWheel={this.wheelMove}
                onMouseenter={this.mouseenter}
                onMouseleave={this.mouseleave}
                onTouchstart={this.touchstart}
                onTouchmove={this.touchmove}
                style={this.bannerStyle}>
      {this.bannerItems}
      {this.$slots.default}
      {this.paginator}
    </div>

  }
}

</script>
