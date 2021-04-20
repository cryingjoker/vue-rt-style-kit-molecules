<script type="text/jsx">
import TabsSliderVirtualItem from './TabsSliderVirtualItem.vue'
import TabsSliderPaginator from './TabsSliderPaginator.vue'
import {tabsSliderStore} from "./TabsSliderStore";

const components = {}
components[TabsSliderVirtualItem.name] = TabsSliderVirtualItem;
components[TabsSliderPaginator.name] = TabsSliderPaginator;
export default {
  name: "RtTabsSlider",
  props: {
    tabsHtmlMode: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    preventScroll: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    onClickStopPlay: {
      type: Boolean,
      default: true
    },
    timerDuration: {
      type: Number,
      default: 6000
    },
    scrollDuration: {
      type: Number,
      default: 500
    },
    scrollDurationFn: {
      type: String,
      default: 'easeInOutCubic'
    },
    stopWhenNotShow:{
      type: Boolean,
      default: false
    }
  },
  components: components,
  data: () => ({
    isRegistered: false,
    customSlots: {},
    customSlotsSort: [],
    activeItem: {},
    xDown: null,
    yDown: null,
    pause: false,
    hover: false,
    minHeight: 0

  }),
  computed: {
    renderMenu() {
      return <rt-tabs-slider-paginator on-click-stop-play={this.onClickStopPlay} pause={this.pause}
                                       time={this.timerDuration}
                                       stop-when-not-show={this.stopWhenNotShow}
                                       duration-time={this.scrollDuration}
                                       slider-name={this.name}></rt-tabs-slider-paginator>
    },
    renderTabs() {

      let indexesShow = [this.customSlotsSort.filter((i) => i == this.activeItem.activeId)];
      let indexBeforeEl = this.customSlotsSort.indexOf(this.activeItem.beforeActiveId);
      console.info('indexBeforeEl',indexBeforeEl)
      if (indexBeforeEl >= 0) {
        indexesShow.push(this.customSlotsSort[indexBeforeEl]);
      }
      return indexesShow.map((id, index) => {
        const showThisTab = this.activeItem.beforeActiveId && this.activeItem.activeId == id
        const isBeforeActive = this.activeItem.beforeActiveId == id
        if (isBeforeActive || this.activeItem.activeId == id) {
          return <rt-tabs-slider-virtual-item is-before-active={isBeforeActive} is-show={showThisTab}>
            <template slot="image">{this.customSlots[id].image}</template>
            <template slot="content">{this.customSlots[id].content}</template>
          </rt-tabs-slider-virtual-item>
        } else {
          return null
        }
      })
    }
  },

  mounted: function () {
    this.registerTabsSlider();

  },
  methods: {
    mouseenter() {
      if (this.pauseOnHover) {
        this.hover = true;
        this.pause = true
      }
    },
    mouseleave() {
      if (this.pauseOnHover) {
        this.hover = false;
        this.pause = false
      }
    },
    touchstart(evt) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    },
    touchmove(evt) {
      if (!this.xDown || !this.yDown) {
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;
      const activeIndex = this.customSlotsSort.indexOf(this.activeItem.activeId);
      const size = this.customSlotsSort.length;
      const prev = (activeIndex - 1 + size) % size;
      const next = (activeIndex + 1) % size;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (this.preventScroll) {
          evt.preventDefault();
        }
        if (xDiff > 0) {
          tabsSliderStore.setActiveId(this.name, this.customSlotsSort[next])

        } else {
          tabsSliderStore.setActiveId(this.name, this.customSlotsSort[prev])
        }
      }
      this.xDown = null;
      this.yDown = null;
    },

    registerTabsSlider() {
      if (this.name.length > 0) {
        tabsSliderStore.register(this.name, this.tabsHtmlMode).then(() => {
          this.isRegistered = true
          tabsSliderStore.setSettings(this.name, 'autoplay', this.autoplay)
          tabsSliderStore.setSettings(this.name, 'stopWhenNotShow', this.stopWhenNotShow)
          tabsSliderStore.runWatchersById(this.name)
        })
      }
    },
    initMethods() {
      this.updateSlots();
      this.addStoreWatcher()
    },
    getSlots() {
      this.customSlots = tabsSliderStore.getSlot(this.name)
    },
    getSlotSort() {
      this.customSlotsSort = tabsSliderStore.getSlotSort(this.name) || []
    },
    getActiveItems() {
      this.activeItem = tabsSliderStore.getActiveId(this.name)
    },
    updateSlots() {
      this.getSlots();
      this.getSlotSort();
      this.getActiveItems();
    },
    addStoreWatcher() {
      tabsSliderStore.addWatcher(this.name, this.updateSlots)
    },

  },
  watch: {
    isRegistered(newVal, oldVal) {
      if (newVal != oldVal && newVal) {
        this.initMethods()
      }
    }
  },
  render(h) {
    if (this.name.length > 0) {
      return <div class="tab-slider" ref="slider"
                  style={{minHeight: this.minHeight+'px'}}
                  onMouseenter={this.mouseenter}
                  onMouseleave={this.mouseleave}
      >
        {this.renderMenu}
        <div class="tab-slider__content"
             onTouchstart={this.touchstart}
             onTouchmove={this.touchmove}
        >
          {this.renderTabs}
          {this.$slots.default}
        </div>

      </div>
    }
    return null
  }
};
</script>
