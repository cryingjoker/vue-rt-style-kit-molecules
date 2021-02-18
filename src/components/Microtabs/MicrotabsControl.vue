<template>
  <a
    :class="[
      `${cmpName}-nav__control`,
      { 'is--hidden': hidden }
    ]"
    :style="{ color: cmpColor }"
     @click="controlClick"
  >
    <rt-system-icons
      :style="{ fill: cmpColor }"
      :name="`chevron ${direction}`"
    ></rt-system-icons>
    <div :class="`${cmpName}-nav__item-opacity`">
      <div
        :class="`${cmpName}-nav__item-bg`"
        :style="{ background: cmpBackground }"
      ></div>
    </div>
  </a>
</template>

<script>
import { cmpName, inverseColor, getBackground, getColor } from './common'

export default {
  props:{
    hidden: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      cmpName,
      themeLocal: null,
      customBgLocal: null,
      customColorLocal: null
    }
  },
  computed:{
    cmpBackground(){
      return getBackground(this)
    },
    cmpColor(){
      return getColor(this)
    }
  },
  methods:{
    controlClick(e){
      return this.$emit('click', e)
    }
  },
  mounted(){
    this.themeLocal = this.$parent.theme || 'default'
    if (this.$parent.inverse) {
      this.customColorLocal = inverseColor
      this.customBgLocal = inverseColor
    }
    // if (this.$parent.customBg || this.$parent.customColor) {
    //   this.customBgLocal = this.$parent.customBg
    //   this.customColorLocal = this.$parent.customColor
    //   this.themeLocal = 'custom'
    // }
  }
}
</script>
