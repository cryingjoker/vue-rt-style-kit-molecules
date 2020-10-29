<script type="text/jsx">

import {deviceTypeStore} from "vue-rt-style-kit-atoms";


const componentsList = {};

export default {
  name: "RtAdBanner",
  props: {
    androindUrl: {
      type: String,
      default: ''
    },
    iosUrl: {
      type: String,
      default: ''
    },
    qrCode: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    type : ''
  }),

  mounted: function () {
    deviceTypeStore.addWatcher(this._uid, this.setDeviceType);
    this.setGoogleAn()
  },
  beforeMount() {

  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy: function () {
  },

  methods: {

  },
  computed: {
  },
  render(h) {
    return <h1>AdvertisingBanner</h1>

  }
}

</script>
