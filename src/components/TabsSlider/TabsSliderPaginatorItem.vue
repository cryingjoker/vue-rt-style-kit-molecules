<script type="text/jsx">
import {tabsSliderStore} from "./TabsSliderStore";

const components = {}
export default {
  name: "RtTabsSliderPaginatorItem",
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 0
    }
  },
  components: components,
  computed: {
    tabsSliderClass() {
      const classNames = ['tab-slider__header-item', 'sp-h-1-3']
      if (this.isActive) {
        classNames.push('tab-slider__header-item--active')
      }
      return classNames.join(' ')
    },
    renderTimer() {
      if (this.isActive && this.step > 0 || true) {
        const style = {
          width: this.step.toFixed(2) + '%'
        }
        return <div class="tab-slider__timer" style={style}></div>
      }
      return null
    }
  },
  methods: {
    onClickEmit() {
      this.$emit('click')
    }
  },

  render(h) {
    return <button type="button" onClick={this.onClickEmit} class={this.tabsSliderClass}>
      {this.renderTimer}
      <p class="tab-slider__header-text rt-font-paragraph">{this.$slots.default}</p>
    </button>
  }
};
</script>
