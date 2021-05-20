<script type="text/jsx">
import {tabsSliderStore} from "./TabsSliderStore";

export default {
  name: "RtTabsSliderVirtualItem",
  props: {
    label: {
      type: String,
      default: ''
    },
    tabsSliderName: {
      type: String,
      default: ''
    },
    isBeforeActive:{
      type:Boolean,
      default: false
    },
    isShow:{
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),
  computed: {
    tabSliderClass(){
      const classList = ['tab-slider__item', 'sp-t-2','td-sp-t-1-1','md-sp-t-0-4'];
      if(this.isBeforeActive){
        classList.push('tab-slider__item--before-active')
      }
      if(this.isShow){
        classList.push('tab-slider__item--show')
      }
      return classList.join(' ')
    }
  },
  beforeUpdate() {
  },
  destroyed() {
  },
  updated() {
  },
  mounted: function () {
    if(this.isBeforeActive){
      this.$parent.minHeight = this.$refs.slide.clientHeight
    }
  },

  methods: {
  },

  render(h) {

    return <div ref="slide" class={this.tabSliderClass}>
      <rt-row class="row-td-reverse">
        <rt-col size={6} tablet-size={6} mobile-size={3}>
          <div class="tab-slider__body td-sp-t-1-3 md-sp-t-1-1">
            {this.$slots.content}
          </div>
        </rt-col>
        <rt-col size={6} tablet-size={4} mobile-size={3}>
          <div class="tab-slider__img">
            {this.$slots.image}
          </div>
        </rt-col>
      </rt-row>


    </div>
  }
};
</script>
