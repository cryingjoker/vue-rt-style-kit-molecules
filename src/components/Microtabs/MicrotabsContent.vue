<template>
  <div
    :class="cmpClasses"
  >
    <slot></slot>
  </div>
</template>

<script>
import { cmpName } from './common'

export default {
  name: 'RtMicrotabsCnt',
  data(){
    return {
      key: null
    }
  },
  computed:{
    cmpClasses(){
      return [
        `${cmpName}-cnt__item`,
        this.key !== this.activeTab ? 'is--hidden' : null
      ]
    },
    activeTab(){
      return this.$parent.activeTab
    }
  },
  beforeMount(){
    this.key = this.$parent.activateCnt(this)
  },
  destroyed(){
    this.$parent.destroy()
  }
}
</script>
