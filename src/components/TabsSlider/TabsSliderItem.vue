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
    }
  },
  data: () => ({
    tabsHtmlMode: false
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
    if (this.label.length > 0 && this.tabsSliderName.length > 0) {
      tabsSliderStore.runAfterInit(this.tabsSliderName, this.fillTabsSliderStore)
    }
  },
  methods: {
    clearTabsSliderStore(){
      tabsSliderStore.removeSlots(this.tabsSliderName, this._uid)
    },
    fillTabsSliderStore() {
      tabsSliderStore.setSlot(this.tabsSliderName, 'label', this.label, this._uid)
      tabsSliderStore.setSlot(this.tabsSliderName, 'content', this.$slots.content, this._uid)
      tabsSliderStore.setSlot(this.tabsSliderName, 'image', this.$slots.image, this._uid)
    }
  },
  render(h) {

    if (this.label.length > 0 && this.tabsSliderName.length > 0) {
      if(this.tabsHtmlMode){
        return this.$slots.default
      }
      // return
    }
    return null
  }
};
</script>
