<script type="text/jsx">
  import TabsSliderVirtualItem from './TabsSliderVirtualItem.vue'
  import TabsSliderPaginator from './TabsSliderPaginator.vue'
  import { tabsSliderStore } from "./TabsSliderStore";
  const components = {}
  components[TabsSliderVirtualItem.name] = TabsSliderVirtualItem;
  components[TabsSliderPaginator.name] = TabsSliderPaginator;
  export default {
    name: "RtTabsSlider",
    props: {
      tabsHtmlMode:{
        type: Boolean,
        default: false
      },
      hasTimer:{
        type: Boolean,
        default: true
      },
      name: {
        type: String,
        default: ''
      }
    },
    components:components,
    data: () => ({
      isRegistered: false,
      customSlots: {},
      customSlotsSort: [],
      activeItem: {},
      xDown: null,
      yDown: null

    }),
    computed: {
      renderMenu(){
       return <rt-tabs-slider-paginator slider-name={this.name}></rt-tabs-slider-paginator>
      },
      renderTabs(){


        let indexesShow = [this.customSlotsSort.filter((i)=>i == this.activeItem.activeId)];
        let indexBeforeEl = this.customSlotsSort.indexOf(this.activeItem.beforeActiveId);

        if(indexBeforeEl>=0){
          indexesShow.push(this.customSlotsSort[indexBeforeEl]);
        }

        return indexesShow.map((id,index)=>{
          const showThisTab =  this.activeItem.beforeActiveId && this.activeItem.activeId == id
          const isBeforeActive = this.activeItem.beforeActiveId == id
          if(isBeforeActive || this.activeItem.activeId == id ) {

            return <rt-tabs-slider-virtual-item is-before-active={isBeforeActive} is-show={showThisTab}>
              <template slot="image">{this.customSlots[id].image}</template>
              <template slot="content">{this.customSlots[id].content}</template>
            </rt-tabs-slider-virtual-item>
          }else{
            return null
          }
        })
      }
    },

    mounted: function() {
      this.registerTabsSlider();
    },
    methods: {
      touchstart(event) {
        this.xDown = event.touches[0].clientX;
        this.yDown = event.touches[0].clientY;
      },
      touchmove(event) {
        if (!this.xDown || !this.yDown) {
          return;
        }
        var xUp = event.touches[0].clientX;
        var yUp = event.touches[0].clientY;

        var xDiff = this.xDown - xUp;
        var yDiff = this.yDown - yUp;


        const activeIndex = this.customSlotsSort.indexOf(this.activeItem.activeId);
        const size = this.customSlotsSort.length;
        const prev = (activeIndex - 1 + size) % size;
        const next = (activeIndex + 1) % size;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
          if (xDiff > 0) {
            tabsSliderStore.setActiveId(this.name, this.customSlotsSort[next])

          } else {
            tabsSliderStore.setActiveId(this.name, this.customSlotsSort[prev])
          }
        }

        this.xDown = null;
        this.yDown = null;
      },

      registerTabsSlider(){
        if (this.name.length > 0) {
          tabsSliderStore.register(this.name,this.tabsHtmlMode).then(()=>{
            this.isRegistered = true
          })
        }
      },
      initMethods(){
        this.updateSlots();
        this.addStoreWatcher()
      },
      getSlots() {
        this.customSlots = tabsSliderStore.getSlot(this.name)
      },
      getSlotSort() {
        this.customSlotsSort = tabsSliderStore.getSlotSort(this.name) || []
      },
      getActiveItems(){
        this.activeItem = tabsSliderStore.getActiveId(this.name)
      },
      updateSlots(){
        this.getSlots();
        this.getSlotSort();
        this.getActiveItems();
      },
      addStoreWatcher(){
        tabsSliderStore.addWatcher(this.name, this.updateSlots)
      },

    },
    watch:{
      isRegistered(newVal, oldVal){
        if(newVal != oldVal && newVal){
          this.initMethods()
        }
      }
    },
    render(h) {
      if (this.name.length > 0) {
        return <div class="tab-slider" ref="slider"
                    onTouchstart={this.touchstart}
                    onTouchmove={this.touchmove}>
          {this.renderMenu}
          <div class="tab-slider__content">
            {this.renderTabs}
            {this.$slots.default}
          </div>

        </div>
      }
      return null
    }
  };
</script>
