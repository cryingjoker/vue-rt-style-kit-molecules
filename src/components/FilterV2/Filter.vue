<script type="text/jsx">
import {filterStore} from "./FitlerStore";
import debounce from 'debounce';
const componentsList = {};

export default {
  name: "RtFilterN",

  props: {
    filterName:{
      type: String
    },
    customClass:{
      type: String,
      default: ''
    },
    hasCarousel:{
      type: Boolean,
      default: false
    },
    carouselUp:{
      type: Number,
      default: 1
    }
  },
  comments: componentsList,
  data: () => ({
    items: {},
    itemsSort: [],
    parent: null,
    spacerStylesState: null
  }),

  beforeDestroy() {
    window.removeEventListener('resize', debounce(this.getSlideInCarousel, 10));
  },
  mounted: function () {
    if(this.filterName){
      filterStore.addWatcher(this.filterName,this.getFilterItems)
      if(this.hasCarousel){
        this.getSlideInCarousel();
      }
      window.addEventListener('resize', debounce(this.getSlideInCarousel, 10));
    }
  },
  methods: {
    getSlideInCarousel(){
      let getParent = (lvl,el)=>{
        if(lvl < this.carouselUp){
          return getParent(lvl+1, el.$parent)
        }else{
          return el
        }
      }
      this.parent = getParent(0,this);
      this.$nextTick(()=>{
        this.parent.createMoves()
        this.parent.getSlides()
        this.getStyleSpacer();
      })
    },
    getStyleSpacer(){
      this.spacerStylesState =  this.parent.spacerStylesState
    },
    getFilterItems(){
      this.items = filterStore.getSlot(this.filterName)
      this.itemsSort = filterStore.getSlotSort(this.filterName)
      if(this.hasCarousel){
        this.getSlideInCarousel();
      }
    }
  },
  computed:{
    filterSlots(){
      return this.itemsSort.map((itemId)=>{

        return this.items[itemId].map(i=>i)
      })
    },
    wrapperClass(){
      if(this.customClass.length > 0){
        return this.customClass
      }
      return "d-static"
    },
    spacer(){
      if(this.hasCarousel){
        return <div style={this.spacerStylesState}></div>
      }
      return null
    }
  },
  render() {

    if(this.filterName){

      return <div class={this.wrapperClass}>{this.filterSlots}
        {this.spacer}</div>

    }else{
      return null
    }

  }
};
</script>
