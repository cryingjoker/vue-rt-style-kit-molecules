<script type="text/jsx">

import Global from '../../variables.json'

export default {
  name: 'RtMinibanner',
  data() {
    return {
      show: false
    }
  },
  props: {
    tabletInLine:{
      type: Boolean,
      default: false
    },
    background:{
      type: String,
      default: 'white'
    },
    color:{
      type: String,
      default: 'main'
    },
    shadowColor:{
      type: String,
      default: 'white'
    },
    hasShadow:{
      type: Boolean,
      default: true
    },

    reverse:{
      type: Boolean,
      default: false
    },
    fixImage:{
      type:Boolean,
      default: false
    }
  },
  mounted() {
  },
  methods: {},
  render(h) {
    const renderImage = ()=>{
      const childs = [this.$slots.image]

      if(this.hasShadow){
        const shadowClass = ['rt-shadow']
        shadowClass.push('rt-shadow-'+this.shadowColor)
        const shadowItemClass = [];
        if(!this.tabletInLine){
          shadowItemClass.push('td-d-none')
        }
        if(this.reverse ){
          shadowItemClass.push("rt-shadow-right")
          childs.push(<div class={shadowClass}>
            <div class={shadowItemClass}></div>
          </div>)
        }else {
          shadowItemClass.push("rt-shadow-left")
          childs.push(<div class={shadowClass}>
            <div class={shadowItemClass}></div>
          </div>)
        }
      }
      const imageContainerClassList = ['rt-minibanner-image'];
      if(this.fixImage){
        imageContainerClassList.push('rt-minibanner-image--fix')
        if(!this.tabletInLine){
          imageContainerClassList.push('td-sp-t-2')
          imageContainerClassList.push('td-d-flex')
          imageContainerClassList.push('td-flex-v-center')
          imageContainerClassList.push('td-d-space-center')
          imageContainerClassList.push('rt-minibanner-image--fix-td')

        }
      }

      if(!this.tabletInLine){
        imageContainerClassList.push('rt-minibanner-image--block')
        imageContainerClassList.push('td-sp-h-2')
        imageContainerClassList.push('td-sp-t-2')
        imageContainerClassList.push('rt-minibanner-image--round')
      }
      imageContainerClassList.push('md-sp-t-1')
      imageContainerClassList.push('md-sp-h-1')

      return h('div', {
        class: imageContainerClassList
      },childs)
    }
    const renderContent = ()=>{
      const childs = []

      if(this.$slots['icon']){
        childs.push(<div class="sp-b-0-4 rt-minibanner-icon">{this.$slots['icon']}</div>)
      }
      if(this.$slots['label']){
        childs.push(<p class="font-h3 sp-b-0-3 rt-minibanner-label">{this.$slots['label']}</p>)
      }
      if(this.$slots['content']){
        childs.push(<p class="font-t-l rt-minibanner-content">{this.$slots['content']}</p>)
      }
      if(this.$slots['html']){
        childs.push(<div class="sp-t-1-1">{this.$slots['html']}</div>)
      }
      const contentWrapperClass = ["rt-minibanner-content-wrap","sp-v-2"]
      if(!this.tabletInLine){
        contentWrapperClass.push('td-sp-t-1-3')
        contentWrapperClass.push('td-sp-h-2')
      }else{
        if(!this.reverse){
          contentWrapperClass.push('td-sp-l-2')
        }
      }
      contentWrapperClass.push('md-sp-t-1-3')
      contentWrapperClass.push('md-sp-h-1')
      const inner = h('div',{class:'rt-minibanner-content-wrap-inner'},childs)
      return  h('div',{class:contentWrapperClass}, [inner])
    }
    const rowClassList = [];
    if(this.reverse){
      rowClassList.push('flex-row-reverse')
    }

    if(!this.tabletInLine){
      rowClassList.push('td-flex-column-reverse')
    }
    rowClassList.push('md-flex-column-reverse')
    const miniBannerWrapperClass = ["rt-minibanner"]
    miniBannerWrapperClass.push('color-block--'+this.background)
    miniBannerWrapperClass.push('color-'+this.color)
    let tabletSize = 6
    if(this.tabletInLine){
      tabletSize = 3
    }
    return <div class="rt-container">
      <rt-col>
        <div class={miniBannerWrapperClass}>
          <rt-row class={rowClassList}>
            <rt-col size="1" t-hide={true} m-hide={true} ></rt-col>
            <rt-col size="6" tablet-size={tabletSize} mobile-size={3}>
              {renderContent()}
            </rt-col>
            <rt-col size="5" tablet-size={tabletSize} mobile-size={3} class="relative">
              {renderImage()}
            </rt-col>
          </rt-row>
        </div>
      </rt-col>

    </div>
  }
}
</script>
