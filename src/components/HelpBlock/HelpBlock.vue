<script type="text/jsx">
  export default {
    name: "RtHelpBlock",
    props: {
      onClick: {
        type: Function,
        default: null
      },
      hideIcon: {
        type: Boolean,
        default: false
      }

    },

    data: () => ({}),

    mounted() {

    },
    methods: {
      runAction() {
        if (this.onClick) {
          this.onClick(this)
        }
      }
    },
    render(h) {
      return <div class="rt-help-block d-inline-block">
        <div class="rt-help-block-content sp-b-0-2">
          {this.$slots.content}
        </div>
        <div class="rt-help-footer  d-flex align-center" onClick={this.runAction}>
          {!this.hideIcon ? <div class="rt-help-icon d-inline-block sp-r-0-2"></div> : null}
          {this.$slots['action-text']}
        </div>
      </div>
    }
  };
</script>
