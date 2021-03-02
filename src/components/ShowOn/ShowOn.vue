<script type="text/jsx">

import isMobile from 'ismobilejs';


const componentsList = {};

export default {
  name: "ShowOn",
  data: () => ({
    isIos: false,
    isAndroid: false,
    isHuawei: false

  }),

  mounted: function () {
    this.getMobileType()
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
    getMobileType(){
      if(window?.navigator) {
        this.isIos = isMobile(window.navigator).apple.device
        this.isAndroid = isMobile(window.navigator).android.device
        this.isHuawei = window.navigator.userAgent.search(/huawei/gi)>=0
      }
    },
  },

  render(h) {
    if(this.$slots.ios && this.isIos){
      return this.$scopedSlots.ios()
    }
    if(this.$slots.android && this.isAndroid){
      return this.$scopedSlots.android()
    }
    if(this.$slots.huawei && this.isHuawei){
      return this.$scopedSlots.huawei()
    }
    if(this.$slots.pc) {
      return this.$scopedSlots.pc()
    }
    return null

  }
}

</script>
