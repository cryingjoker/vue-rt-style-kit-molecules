<script type="text/jsx">
  import variables from "../../variables.json";
  export default {
    name: "RtRowListItem",
    props: {},
    data: () => ({
      show: false
    }),
    computed: {
      contentClass() {
        let classList = '';
        if (this.$slots.icon) {
          classList = " rt-col-7 rt-col-md-3";
        } else {
          classList = " rt-col-8 rt-col-md-3";
        }
        return classList;
      }
    },
    mounted(){},
    methods: {
      toggleShow(e) {
        this.show = !this.show;
        e.stopPropagation()
      }
    },
    render: function(h) {
      if (this.$slots.moreInfo) {
        return (
          <div class={"rt-row-list__item rt-col-12 rt-col-md-3"}
               onClick={this.toggleShow}>
            <div class="rt-row-list__header rt-row-list__header--has-more-content row">
              {this.$slots.icon ? (
                <div class="rt-row-list__icon rt-col-1 rt-col-md-3 rt-md-space-bottom">
                  {this.$slots.icon}
                </div>
              ) : null}
              <div class={"rt-row-list__content" + this.contentClass}>
                {this.$slots.option}
              </div>
              <div class="rt-row-list__value rt-col-4 rt-col-md-3 rt-md-space-top">
                {this.$slots.value}
              </div>
            </div>
            <div class={"rt-row-list__body row" + (this.show ? " rt-row-list__item--active" : "")}>
              {this.$slots.icon ? <div class="rt-col-1 rt-col-md-3"/> : null}
              <div class={this.contentClass}>
                {this.$slots.moreInfo}
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div class="rt-row-list__item rt-col-12 rt-col-md-3">
            <div class="rt-row-list__header row">
              {this.$slots.icon ? (
                <div class="rt-row-list__icon rt-col-1 rt-col-md-3 rt-md-space-bottom">
                  {this.$slots.icon}
                </div>
              ) : null}
              <div class={"rt-row-list__content" + this.contentClass}>
                {this.$slots.option}
              </div>
              <div class="rt-row-list__value rt-col-4 rt-col-md-3 rt-md-space-top">
                {this.$slots.value}
              </div>
            </div>
          </div>
        );
      }
    }
  };
</script>
