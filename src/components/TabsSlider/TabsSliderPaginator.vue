<script type="text/jsx">
import {tabsSliderStore} from "./TabsSliderStore";
import TabsSliderPaginatorItem from './TabsSliderPaginatorItem.vue'
import Animate from "../../utils/animate";

const components = {}
components[TabsSliderPaginatorItem.name] = TabsSliderPaginatorItem;
export default {
  name: "RtTabsSliderPaginator",
  props: {
    fps: {
      type: Number,
      default: 30
    },
    time: {
      type: Number,
      default: 10000
    },

    sliderName: {
      type: String,
      default: ''
    },
    durationTime: {
      type: Number,
      default: 300
    },
    pause: {
      type: Boolean,
      default: false
    },
    onClickStopPlay: {
      type: Boolean,
      default: true
    },
    durationFn: {
      type: String
    },
    stopWhenNotShow: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    }
  },
  components: components,
  data: () => ({
    autoplay: false,
    step: 0,
    customSlots: {},
    customSlotsSort: [],
    activeItem: {},
    timeout: null,
    localPause: false,

  }),
  computed: {
    renderPaginatiorItems() {
      return this.customSlotsSort.map((id) => {
        let isActive = this.activeItem.activeId == id
        if (this.activeItem.activeId != id) {
          isActive = id == this.activeItem.nextActiveId
        }
        const setActive = () => {
          this.setActive(id)
          this.stopAutoplayFn()
        }
        if (isActive) {
          return <rt-tabs-slider-paginator-item has-timer={this.hasTimer} id={id}
                                                ref={'tabs-slider-paginator-item-' + id}
                                                tabs-slider-name={this.name}
                                                is-active={isActive} step={this.step}>
            {this.customSlots[id].label}
          </rt-tabs-slider-paginator-item>
        }
        return <rt-tabs-slider-paginator-item onClick={setActive} has-timer={this.hasTimer} id={id}
                                              ref={'tabs-slider-paginator-item-' + id}
                                              tabs-slider-name={this.name}>
          {this.customSlots[id].label}
        </rt-tabs-slider-paginator-item>
      })
    },
    tabsSliderClass() {
      const classNames = ['tab-slider__header-item', 'sp-h-1-3', 'sp-v-0-2']
      if (this.isActive) {
        classNames.push('tab-slider__header-item--active')
      }
      return classNames.join(' ')
    },
    renderTimer() {
      if (this.isActive && this.hasTimer)
        return <div class="tab-slider__timer"></div>
      return null
    },
  },
  watch: {
    autoplay(newWal, oldVal) {
      if (newWal != oldVal && newWal) {
        this.tick()
      }
    },


    activeItem(newVal, oldVal) {
      if (newVal && JSON.stringify(newVal) != JSON.stringify(oldVal) && this.activeItem.beforeActiveId) {
        this.scrollToActive()
        this.step = 0
      }
    },
    pause(newVal, oldVal) {
      if (newVal != oldVal && oldVal && !newVal && this.autoplay) {
        this.tick()
      }
    }

  },
  mounted: function () {
    this.initMethods()
    if (this.autoplay) {
      this.tick()
    }

  },


  methods: {
    getViewPortPosition() {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop
      const top = this.$el.getBoundingClientRect().top
      const innerHeight = window.innerHeight;
      if (Math.abs(scrollPos + top) < innerHeight * 1.5) {
        this.localPause = true
      } else {
        if (!this.pause) {
          this.localPause = true
        }
      }
    },
    scrollTo(element, from, to) {
      if (element) {
        Animate.start({
          draw: (dist, rId) => {
            element.scrollLeft = from + (to - from) * dist
          },
          duration: this.durationTime,
          onLeave: () => {
          },
          timing: Animate.timingFunctions['easeInOutCubic']
        })
      }


    },
    scrollToActive(id) {
      let activeId = id || this.activeItem.nextActiveId || this.activeItem.activeId;
      let activeEl = this.$refs['tabs-slider-paginator-item-' + activeId]
      if (!activeEl) {
        return null
      }
      const goToEl = () => {
        this.scrollTo();
        activeEl = activeEl.$el
        const header = this.$refs.header;
        const left = parseInt(activeEl.getBoundingClientRect().left - 20 + header.scrollLeft)
        if (header.scrollLeft != left) {
          this.scrollTo(header, header.scrollLeft, left, 300)
        }
      }
      if (activeEl) {
        goToEl()
      } else {
        this.$nextTick(() => {
          activeEl = this.$refs['tabs-slider-paginator-item-' + activeId]
          goToEl()
        })
      }
    },

    initMethods() {
      this.updateSlots();
      this.addStoreWatcher()
    },
    setNextSlide() {
      const slideSize = this.customSlotsSort.length;
      const nextIndex = (this.customSlotsSort.indexOf(this.activeItem.activeId) + 1 + slideSize) % slideSize;
      this.setActive(this.customSlotsSort[nextIndex])
    },
    getSlots() {
      this.customSlots = tabsSliderStore.getSlot(this.sliderName)
    },
    getSettings() {
      this.autoplay = tabsSliderStore.getSettings(this.sliderName, 'autoplay')
    },
    getSlotSort() {
      this.customSlotsSort = tabsSliderStore.getSlotSort(this.sliderName) || []
    },
    getActiveItems() {
      this.activeItem = tabsSliderStore.getActiveId(this.sliderName)
    },
    updateSlots() {
      this.getSlots();
      this.getSlotSort();
      this.getActiveItems();
      this.getSettings();
    },
    addStoreWatcher() {
      tabsSliderStore.addWatcher(this.sliderName, this.updateSlots)
    },
    tick() {
      if (!this.pause && this.autoplay) {
        this.step += 100 / (this.time / 1000 * this.fps)
        if (this.step >= 100) {
          this.step = 0
          this.setNextSlide()
          this.tick()
        } else {
          if (this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = null
          }
          this.timeout = setTimeout(() => {
            this.tick()
          }, 1000 / this.fps)
        }
      }
    },
    setActive(id) {
      if (!this.isActive) {
        tabsSliderStore.setActiveId(this.sliderName, id)
        this.step = 0
      }
    },
    stopAutoplayFn() {
      if (this.onClickStopPlay && this.autoplay) {
        tabsSliderStore.setSettings(this.sliderName, 'autoplay', false)
      }
    }
  },
  render(h) {
    return <div class="tab-slider__header" ref="header">{this.renderPaginatiorItems}</div>

  }
};
</script>
