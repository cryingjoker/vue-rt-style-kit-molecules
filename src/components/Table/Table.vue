<script type="text/jsx">
export default {
  name: "RtTable",
  components: {},
  props: {
    tabletListType: {
      type: Boolean,
      default: false
    },
    noBorders: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    tableLabels: [],
    rowspanIndexBeforeRow: -1,
    rowspanSizeBeforeRow: 0
  }),
  provide() {
    const tableLabels = this["tableLabels"];
    const checkTableItemIndex = this.checkTableItemIndex;
    const setTableItemRowspanIndex = this.setTableItemRowspanIndex;
    return { tableLabels, checkTableItemIndex, setTableItemRowspanIndex};
  },
  methods: {

    checkTableItemIndex(index, rowUid) {
      if(rowUid != this.rowspanUidRow) {
        if (this.rowspanIndexBeforeRow >= 0 && this.rowspanSizeBeforeRow > 0 && this.rowspanIndexBeforeRow === index) {
          this.rowspanSizeBeforeRow--;
          if(this.rowspanSizeBeforeRow === 0){
              this.rowspanUidRow = null;
          }
          return true
        }
      }
      return false
    },
    setTableItemRowspanIndex(index,rowspan, rowUid) {
       this.rowspanIndexBeforeRow = index;
       this.rowspanSizeBeforeRow = rowspan - 1;
       this.rowspanUidRow = rowUid;
    },

  },
  render: function(h) {
    const columns = () => {
      if (!this.$slots.columns) {
        return null;
      }
      return <div class="rt-table-colgroup">{this.$slots.columns}</div>;
    };
    const renderBodyFn = () => {
      if (!this.$slots.body) {
        return null;
      }
      return this.$slots.body.map(slotVNode => {
        if (slotVNode.tag && slotVNode.tag.search(/RtTableRow/gi) >= 0) {
          slotVNode.componentOptions = slotVNode.componentOptions || {};
          slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {};
          slotVNode.componentOptions.propsData.tableLabels = JSON.stringify(
            this.tableLabels
          );
        }
        return slotVNode;
      });
    };

    if (this.$slots.label) {
      return (
        <div>
          <p class="rt-table-title rt-space-bottom rt-td-space-bottom">
            {this.$slots.label}
          </p>
          {this.$slots.description}
          <table class={"rt-table" + (this.tabletListType ? " rt-table--list" : "") + (this.noBorders ? " rt-table--no-borders" : "")}>
            {columns()}
            <thead class="rt-table-head" ref="head">
              {this.$slots.header}
            </thead>
            <tbody>
              {renderBodyFn()}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <table class={"rt-table" + (this.tabletListType ? " rt-table--list" : "") + (this.noBorders ? " rt-table--no-borders" : "")}>
          {columns()}
          <thead class="rt-table-head" ref="head">
            {this.$slots.header}
          </thead>
          <tbody>
            {renderBodyFn()}
          </tbody>
        </table>
      );
    }
  }
};
</script>
