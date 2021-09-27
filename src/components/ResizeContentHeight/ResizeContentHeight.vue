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
    mobileNotResize: {
      type: Boolean,
      default: false
    },
    desktopNotResize: {
      type: Boolean,
      default: false
    },
    tabletNotResize: {
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
          mobileNotResize: this.mobileNotResize,
          desktopNotResize: this.desktopNotResize,
          tabletNotResize: this.tabletNotResize,
          reactive: this.reactive,
      }
    return <div v-rt-resize-content-height={data}>{this.$slots.default}</div>;
  }
};
</script>
