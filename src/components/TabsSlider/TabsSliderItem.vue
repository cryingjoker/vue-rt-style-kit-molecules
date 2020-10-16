<script type="text/jsx">
import {tabsSliderStore} from "./TabsSliderStore";

export default {
  name: "RtTabsSliderItem",
  props: {
    label: {
      type: String,
      default: ''
    },
    tabsSliderName: {
      type: String,
      default: ''
    },

    sort: {
      type: Number|String,
      default: -1
    },


  },
  data: () => ({
    tabsHtmlMode: false,
    index: NaN
  }),
  computed: {},
  beforeUpdate() {
    this.clearTabsSliderStore()
  },
  destroyed() {
    this.clearTabsSliderStore()
  },
  updated() {
    this.clearTabsSliderStore()
    this.fillTabsSliderStore()
  },
  mounted: function () {
    if(this.sort - 0 > -1){
      this.index = this.sort;
    }
    if (this.label.length > 0 && this.tabsSliderName.length > 0) {
      tabsSliderStore.runAfterInit(this.tabsSliderName, this.fillTabsSliderStore)
    }
  },
  methods: {
    clearTabsSliderStore() {
      tabsSliderStore.removeSlots(this.tabsSliderName, this._uid)
    },
    fillTabsSliderStore() {
      tabsSliderStore.setSlot(this.tabsSliderName, 'label', this.label, this._uid)
      tabsSliderStore.setSlot(this.tabsSliderName, 'content', this.$slots.content, this._uid)
      tabsSliderStore.setSlot(this.tabsSliderName, 'image', this.$slots.image, this._uid)
      if (isNaN(this.index)) {
        this.index = tabsSliderStore.getIndex(this.tabsSliderName, this._uid);
      }else{
        tabsSliderStore.setIndex(this.tabsSliderName, this._uid, this.index);
      }
    }
  },
  render(h) {
    if (this.label.length > 0 && this.tabsSliderName.length > 0) {
      if (this.tabsHtmlMode) {
        return this.$slots.default
      }
    }
    return null
  }
};
</script>
