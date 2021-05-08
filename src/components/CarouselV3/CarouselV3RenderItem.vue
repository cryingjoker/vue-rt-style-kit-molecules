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
    }
  },
  render(){
    const classListItem = ['rt-carousel-slide-v3'];
    if(this.colInRow == 4){
      classListItem.push('rt-col-3')
    }
    if(this.colInRow == 3){
      classListItem.push('rt-col-4')
    }
    if(this.colInRow == 2){
      classListItem.push('rt-col-6')
    }
    if(this.notActive){
      classListItem.push('rt-carousel-slide-v3--not-act')
    }

    return <div class={classListItem}>{this.$slots.default}</div>
  }

}

</script>
