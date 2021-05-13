<script type="text/jsx">
export default {
  name: "RtCarouselV3RenderItem",
  props: {
    name: {
      type: String,
      default: ''
    },
    colInRow:{
      type: Number
    },
    notActive: {
      type: Boolean
    },
    tabletNotActive: {
      type: Boolean
    }
  },
  render(){
    const classListItem = ['rt-carousel-slide-v3'];
    classListItem.push('rt-col-'+(12/this.colInRow))
    classListItem.push('rt-col-td-3')
    if(this.notActive){
      classListItem.push('rt-carousel-slide-v3--not-act')
    }
    if(this.tabletNotActive){
      classListItem.push('rt-carousel-slide-v3--td-not-act')
    }

    return <div class={classListItem}>{this.$slots.default}</div>
  }

}

</script>
