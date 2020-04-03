<script type="text/jsx">
export default {
  name: "RtResizeContentHeight",
  props: {
    querySelectorsNames: {
      type: Array,
      default: []
    },
    groupSize: {
      type: Number,
      default: null
    },
    tabletGroupSize: {
      type: Number,
      default: null
    },
    mobileGroupSize: {
      type: Number,
      default: null
    },
    desctopItem: {
      type: Number,
      default: null
    },
    tabletItem: {
      type: Number,
      default: null
    },
    mobileItem: {
      type: Number,
      default: null
    },
    mobileNotResize: {
      type: Boolean,
      default: false
    },
    desktopNotReasize: {
      type: Boolean,
      default: false
    },
    tabletNotReasize: {
      type: Boolean,
      default: false
    },
    reactive: {
      type: Boolean
    }
  },
  render(h) {
      const data = {
          querySelectorsNames: this.querySelectorsNames,
          groupSize: this.groupSize,
          tabletGroupSize: this.tabletGroupSize,
          mobileGroupSize: this.mobileGroupSize,
          desctopItem: this.desctopItem,
          tabletItem: this.tabletItem,
          mobileItem: this.mobileItem,
          mobileNotResize: this.mobileNotResize,
          desktopNotReasize: this.desktopNotReasize,
          tabletNotReasize: this.tabletNotReasize,
          reactive: this.reactive,
      }
    return <div v-rt-resize-content-height={data}>{this.$slots.default}</div>;
  }
};
</script>
