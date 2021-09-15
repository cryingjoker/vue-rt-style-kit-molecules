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
    },
    shadowColor: {
      type: String,
      default: ''
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
    showShadowLeft: false,
    showShadowRight: false
  }),
  computed: {

    activeIndex() {
      return this.customSlotsSort.findIndex((id) => {
        return this.activeItem.activeId == id
      })
    },
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
  beforeDestroy() {
    this.unbindScroll()
  },
  watch: {
    autoplay(newWal, oldVal) {
      if (newWal != oldVal && newWal) {
        this.tick()
      }
    },
    showShadowRight(newVal, oldVal) {
      if (newVal != oldVal) {
        if (newVal) {
          this.$refs.shadowRight.style.display = 'block'
        } else {
          this.$refs.shadowRight.style.display = 'none'
        }
      }
    },
    showShadowLeft(newVal, oldVal) {
      if (newVal != oldVal) {
        if (newVal) {
          this.$refs.shadowLeft.style.display = 'block'
        } else {
          this.$refs.shadowLeft.style.display = 'none'
        }
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
    this.bindScroll()
    setTimeout(() => {
      this.setShowRShadow()
    }, 300)
  },


  methods: {
    setShowRShadow() {
      const line = this.$refs.line;
      let x = false
      let windowWidth = window.innerWidth

      if (line) {
        const r = line.getClientRects()[0];
        if (r.width > 768) {
          x = r.right - r.width - line.scrollLeft > 50;
        } else {
          x = r.right - line.scrollLeft > 86;
        }
        this.showShadowLeft = line.scrollLeft > 50
      } else {
        setTimeout(() => {
          if (!this._isDestroyed) {
            this.setShowRShadow().bind(this)
          }
        }, 100)
      }

      this.showShadowRight = x && this.activeIndex < this.customSlotsSort.length - 1
      // }
    },
    bindScroll() {
      window.addEventListener('resize', this.setShowRShadow)
    },
    unbindScroll() {
      window.removeEventListener('resize', this.setShowRShadow)
    },

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
        const header = this.$refs.line
        const left = parseInt(activeEl.getBoundingClientRect().left - 20 + header.scrollLeft - header.getBoundingClientRect().left)
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

    let shadowClassName = ['tab-slider__header']

    let className = ['relative']
    if (this.shadowColor.length > 0) {
      className.push('rt-shadow-' + this.shadowColor)
    }
    return <rt-col class={className.join(' ')}>
      <div class="tab-slider__header-shadows">
        <div class="rt-shadow rt-shadow-left rt-tabs-v2-navigation-shadow-left" ref="shadowLeft"
             style="display:none"></div>
        <div class="rt-shadow rt-shadow-right rt-tabs-v2-navigation-shadow-right" ref="shadowRight"
             style="display:block"></div>
      </div>
      <div class={shadowClassName.join(' ')} ref="header">

        <div class="tab-slider__header-inner">
          <div class="tab-slider__header-round-wrapper" onScroll={() => {
            this.setShowRShadow()
          }} ref="line">
            <div class="tab-slider__header-round-outher">
              <div class="tab-slider__header-round">

                {this.renderPaginatiorItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </rt-col>

  }
};
</script>
