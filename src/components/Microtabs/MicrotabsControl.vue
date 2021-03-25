<template>
  <a
    :class="[
      `${cmpName}-nav__control`,
      { 'is--hidden': hidden }
    ]"
     @click="controlClick"
  >
    <rt-system-icons
      :name="`chevron ${direction}`"
    ></rt-system-icons>
    <div :class="`${cmpName}-nav__item-opacity`">
      <div
        :class="`${cmpName}-nav__item-bg`"
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
      cmpName
    }
  },
  methods:{
    controlClick(e){
      return this.$emit('click', e)
    }
  }
}
</script>
