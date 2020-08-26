<script type="text/jsx">

import {filterStore} from "./FitlerStore";

export default {
  name: "RtFilterNItem",

  props:{
    filterName:{
      type: String
    },
    filterTags:{
      type:Array
    }

  },
  data: () => ({
  }),

  mounted() {
    if(this.filterName && this.filterTags) {
      filterStore.setSlot(this.filterName, this.$slots.default,this._uid,this.filterTags);
    }
  },
  beforeDestroy() {
    filterStore.removeSlot(this.filterName,this._uid)
  },
  methods: {

  },
  render() {
    return null
  }
};
</script>
