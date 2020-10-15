<script type="text/jsx">
import {tabsSliderStore} from "./TabsSliderStore";
import TabsSliderPaginatorItem from './TabsSliderPaginatorItem.vue'

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
    autoplay: {
      type: Boolean,
      default: true
    },
    sliderName: {
      type: String,
      default: ''
    }
  },
  components: components,
  data: () => ({
    step: 0,
    customSlots: [],
    customSlotsSort: [],
    activeItem: {},
  }),
  computed: {
    renderPaginatiorItems() {
      return this.customSlotsSort.map((id) => {
        let isActive = this.activeItem.activeId == id
        if (this.activeItem.nextActiveId) {
          isActive = id == this.activeItem.nextActiveId
        }
        const setActive = ()=>{
          this.setActive(id)
        }
        if(isActive) {
          return <rt-tabs-slider-paginator-item onClick={setActive} has-timer={this.hasTimer} id={id}
                                                ref={'tabs-slider-paginator-item-'+id}
                                                tabs-slider-name={this.name}
                                                is-active={isActive} step={this.step}>
            {this.customSlots[id].label}
          </rt-tabs-slider-paginator-item>
        }
        return <rt-tabs-slider-paginator-item onClick={setActive} has-timer={this.hasTimer} id={id}
                                              ref={'tabs-slider-paginator-item-'+id}
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
    }
  },
  watch:{
    activeItem(newVal, oldVal) {
      if (newVal && JSON.stringify(newVal) != JSON.stringify(oldVal)) {
        this.scrollToActive()
      }
    }

  },
  mounted: function () {
    this.initMethods()
    if(this.autoplay){
      this.tick()
    }
  },

  methods: {
    scrollToActive(id){
      let activeId = id || this.activeItem.nextActiveId || this.activeItem.activeId;
      let activeEl = this.$refs['tabs-slider-paginator-item-' + activeId]
      const goToEl = ()=>{
        activeEl = activeEl.$el
        const left = activeEl.getBoundingClientRect().left - 20 + this.$refs.header.scrollLeft
        this.$refs.header.scrollTo(left,0);
      }
      if(activeEl){
        goToEl()
      }else{
        this.$nextTick(()=> {

          activeEl = this.$refs['tabs-slider-paginator-item-' + activeId]
          goToEl()
        })
      }
    },

    initMethods(){
      this.updateSlots();
      this.addStoreWatcher()
    },
    setNextSlide(){
      const slideSize = this.customSlotsSort.length;
      const nextIndex = (this.customSlotsSort.indexOf(this.activeItem.activeId)+1+slideSize)%slideSize;
      this.setActive(this.customSlotsSort[nextIndex])
    },
    getSlots() {
      this.customSlots = tabsSliderStore.getSlot(this.sliderName)
    },
    getSlotSort() {
      this.customSlotsSort = tabsSliderStore.getSlotSort(this.sliderName) || []
    },
    getActiveItems(){
      this.activeItem = tabsSliderStore.getActiveId(this.sliderName)
    },
    updateSlots(){
      this.getSlots();
      this.getSlotSort();
      this.getActiveItems();
    },
    addStoreWatcher(){
      tabsSliderStore.addWatcher(this.sliderName, this.updateSlots)
    },
    tick() {
      if (!this.pause) {
        this.step += 100 / (this.time / 1000 * this.fps)
        if (this.step >= 100) {
          this.step = 0
          this.setNextSlide()
          this.tick()
        } else {
          setTimeout(() => {
            this.tick()
          }, 1000 / this.fps)
        }
      }
    },
    setActive(id) {
      if (!this.isActive) {
        tabsSliderStore.setActiveId(this.sliderName, id)
        this.scrollToActive(id);
        this.step = 0
      }
    }
  },
  render(h) {
    return <div class="tab-slider__header" ref="header">{this.renderPaginatiorItems}</div>

  }
};
</script>
