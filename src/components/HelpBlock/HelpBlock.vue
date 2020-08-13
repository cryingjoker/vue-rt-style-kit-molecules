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
      },
      bright:{
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
    computed:{
      helpBlockClass(){
        const classNames = ['rt-help-block','d-inline-block'];
        if(this.bright){
          classNames.push('rt-help-block-bright')
        }
        return classNames.join(' ')
      }
    },
    render(h) {
      return <div class={this.helpBlockClass}>
        <div class="rt-help-block-content sp-b-0-2">
          {this.$slots.content}
        </div>
        <div class="rt-help-footer  d-flex flex-v-center" onClick={this.runAction}>
          {!this.hideIcon ? <div class="rt-help-icon d-inline-block sp-r-0-2"></div> : null}
          {this.$slots['action-text']}
        </div>
      </div>
    }
  };
</script>
