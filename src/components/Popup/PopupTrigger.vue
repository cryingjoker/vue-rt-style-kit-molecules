<script type="text/jsx">
import {popupStore} from "./PopupStore";

export default {
  name: "RtPopupTrigger",
  props: {
    name: {
      type: String,
      default: null,
    }
  },

  mounted() {

  },

  methods: {
    triggerOpen() {
      if (this.name) {
        popupStore.setActiveId(this.name)
      }
    },
  },
  render: function (h) {
    return <span onClick={this.triggerOpen}>{this.$slots.default}</span>
  }
};
</script>
