<template>
  <a
    :data-key="key"
    :class="cmpClasses"
    :style="{ color: cmpColor }"
    @click="setActive"
  >
    <slot></slot>
    <div :class="`${cmpName}-opacity`">
      <div
        :class="`${cmpName}-tgl`"
        :style="{ borderTopColor: cmpBackground }"
      ></div>
      <div
        :class="`${cmpName}-bg`"
        :style="{ background: cmpBackground }"
      ></div>
    </div>
  </a>
</template>

<script>
import { cmpName, inverseColor, getBackground, getColor } from './common'

export default {
  name: 'RtMicrotabsNavi',
  props:{
    theme:{
      type: String,
      default: 'default'
    },
    // customBg:{
    //   type: String
    // },
    // customColor:{
    //   type: String
    // }
  },
  data(){
    return {
      key: null,
      themeLocal: null,
      customLocal: {},
      rightPos: null,
      cmpName: `${cmpName}-navi__item`
    }
  },
  computed:{
    cmpClasses(){
      return [
        this.cmpName,
        this.themeLocal !== 'default' ? `is--theme-${this.themeLocal}` : null,
        {
          'is--active': this.key === this.activeTab,
          'is--hidden': this.$parent.navList[this.key] && this.$parent.navList[this.key].hidden
        }
      ]
    },
    cmpBackground(){
      return getBackground(this)
    },
    cmpColor(){
      return getColor(this)
    },
    activeTab(){
      return this.$parent.activeTab
    }
  },
  methods:{
    setActive(e){
      this.$parent.$emit('setActiveTab', this.key)
    }
  },
  mounted(){
    this.themeLocal = this.$parent.theme || this.theme
    if (this.$parent.inverse) {
      this.customColorLocal = inverseColor
      this.customBgLocal = inverseColor
    }
    // if (this.customBg || this.customColor || this.$parent.customBg || this.$parent.customColor) {
    //   this.customBgLocal = this.customBg || this.$parent.customBg
    //   this.customColorLocal = this.customColor || this.$parent.customColor
    //   this.themeLocal = 'custom'
    // }
    let data = this.$parent.activateNav(this)
    this.key = data.key
    this.rightPos = data.rightPos
  },
  destroyed(){
    this.$parent.destroy()
  }
}
</script>
