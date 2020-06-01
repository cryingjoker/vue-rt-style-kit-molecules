<script type="text/jsx">
export default {
  name: "RtTableItem",
  components: {},
  inject: ['tableLabels'],
//    data: () => ({
//        hasRowSpanBefore: 0
//    }),
  props: {
    mobileWidth: {
      type: String,
      default: ''
    },
    html: {
      type: String,
      default: ''
    },
    verticalAlign: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    colspan: {
      type: [Number, String],
      default: 1
    },
    rowspan: {
      type: [Number, String],
      default: 1
    },
    slotIndex: {
      type: Number,
      default: null
    },
    hasRowSpanBefore: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if(this.$parent.$parent._props.noBorders){
      let tableBorder = document.createElement("div");
      tableBorder.classList.add('border-element');
      this.$el.appendChild(tableBorder);
    };
  },
  render: function(h) {
    const style = {};
    let classList = "rt-table-body__item";
    if (this.verticalAlign) {
      style.verticalAlign = this.verticalAlign;
    }
    if (this.align) {
      style.textAlign = this.align;
    }

    if (this.mobileWidth) {
      if (this.mobileWidth === "50%") {
        classList += " rt-table-body__item--half-mobile-width";
      }
    }
    if(this.inactive) {
      classList += " rt-table-body__item--inactive";
    }
    if(this.hasRowSpanBefore){
      classList += " rt-table-body__item--has-rowspan-before";
      if(window.innerWidth <= 1024) {
        classList += " td-d-none"
      }
    }

    let slotLabel = '';
    if(this.colspan == 1){
      slotLabel = this.tableLabels[this.slotIndex]
    }else{
      for(let i = 0;  i <= this.colspan; i++){
        if(this.tableLabels[i] !== undefined && this.tableLabels[i].trim().length > 0) {
          slotLabel += this.tableLabels[i] + ', '
        }
      }
      slotLabel = slotLabel.substr(0, (slotLabel.length - 2));
    }
    return (
      <td
        style={style}
        colspan={this.colspan}
        rowspan={this.rowspan}
        class={classList}
        label={slotLabel}
      >
        {this.html ? <div domPropsInnerHTML={this.html} class="rt-table-body__content"></div> : <div class="rt-table-body__content">{this.$slots.default}</div>}
      </td>
    );

  }
};
</script>
