<script type="text/jsx">
export default {
  name: "RtTableRow",
  components: {},

  inject: ['tableLabels','checkTableItemIndex', 'setTableItemRowspanIndex'],
  // provide() {
  //     const hasRowSpanBefore = 1;
  //     return {  hasRowSpanBefore };
  // },


  props: {
    fill: {
      type: Boolean,
      default: false
    }
  },
  render: function(h) {
    const renderSlots = () => {
      let counter = 0;
      let rowspanIndexBeforeRow = -1;
      let rowspanSizeBeforeRow = 0;
      return this.$slots.default.map((slotVNode, indexNode) => {
        if (slotVNode.tag && slotVNode.tag.search(/RtTableItem/gi) >= 0) {
          slotVNode.componentOptions = slotVNode.componentOptions || {};
          slotVNode.componentOptions.propsData =
            slotVNode.componentOptions.propsData || {};

          slotVNode.componentOptions.propsData.slotIndex = counter;
          if(slotVNode.componentOptions.propsData.colspan){
           counter +=  slotVNode.componentOptions.propsData.colspan - 0 ;
          }else {
            counter++;
          }
          // if(, )
            if(this.checkTableItemIndex(indexNode, this._uid)){
                slotVNode.componentOptions.propsData.hasRowSpanBefore = true;
            }else{

                slotVNode.componentOptions.propsData.hasRowSpanBefore = false;
            }
            if(slotVNode.componentOptions.propsData.rowspan) {
              this.setTableItemRowspanIndex(indexNode, parseInt(slotVNode.componentOptions.propsData.rowspan), this._uid)
          }


          if(slotVNode.componentOptions.propsData.rowspan){

              rowspanIndexBeforeRow = indexNode;
              rowspanSizeBeforeRow = parseInt(slotVNode.componentOptions.propsData.rowspan)
          }

        }
        return slotVNode;
      });
    };
    return (
      <tr class={"rt-table-body__row" + (this.fill ? " rt-table-body__row--fill" : "")}>
        {renderSlots()}
      </tr>
    );
  }
};
</script>
