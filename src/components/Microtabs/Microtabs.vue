<template>
  <div
    :class="cmpClasses"
  >
    <div :class="cmpName+'-navi'">
      <slot name="navi"></slot>
    </div>
    <div
      :class="cmpName+'-coni'"
      :style="conveerStyles"
    >
      <slot name="coni"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RtMicrotabs',
  data(){
    return {
      cmpName: 'rt-microtabs',
      navList: [],
      cntList: [],
      activeTab: 0
    }
  },
  computed:{
    cmpClasses(){
      return [
        this.cmpName
      ]
    },
    conveerStyles(){
      return {
        transform: `translateX(${this.activeTab ? -this.activeTab * 100 : 0}%)`
      }
    }
  },
  mounted(){
    this.$on('setActiveTab', name => {
      if (name !== this.activeTab) {
        this.activeTab = name
      }
    })
  },
  methods:{
    activateNav(cmp){
      this.navList.push(cmp)
      return this.navList.length - 1
    },
    activateCnt(cmp){
      this.cntList.push(cmp)
      return this.cntList.length - 1
    },
    destroy(){
      this.navList = []
      this.cntList = []
    }
  }
}
</script>
