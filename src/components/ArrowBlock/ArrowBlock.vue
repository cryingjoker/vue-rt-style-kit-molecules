<script type="text/jsx">
export default {
  name: "RtArrowBlock",
  props: {
    href: {
      type: String,
      default: ''
    }
  },
  data: () => ({}),
  computed: {
    renderIcon() {
      return this.$slots.icon
        ? <div class="rt-arrow-block__icon sp-r-1-2 md-sp-r-1">{this.$slots.icon}</div>
        : null
    },
    renderBody() {
      return <div class="rt-arrow-block__body d-inline-block">
        <div class="rt-arrow-block__label rt-font-h4">
          {this.$slots.label}
        </div>
        <div class="rt-arrow-block__content sp-t-0-3 sp-r-1-1">
          {this.$slots.content}
        </div>
      </div>
    }
  },
  mounted: function () {
  },
  updated() {
  },
  beforeDestroy: function () {
  },
  methods: {},
  render(h) {
    if(this.href.length > 0) {
      return <a href={this.href} class="rt-arrow-block sp-v-1-3 sp-l-1-3 sp-r-2-3 md-sp-h-1 rt-sys-icon-hover--orange">
        {this.renderIcon}
        {this.renderBody}
        <div class="rt-arrow-block__arrow">
          <rt-system-icons name="arrow right"></rt-system-icons>
        </div>
      </a>
    }
    return <div class="rt-arrow-block sp-v-1-3 sp-l-1-3 sp-r-2-3 md-sp-h-1 rt-sys-icon-hover--orange">
      {this.renderIcon}
      {this.renderBody}
      <div class="rt-arrow-block__arrow">
        <rt-system-icons name="arrow right"></rt-system-icons>
      </div>
    </div>
  }
};
</script>
