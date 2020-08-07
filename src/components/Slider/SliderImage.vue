<script type="text/jsx">

  export default {
    name: "RtSliderImage",
    props: {
      data: {},
      index: {
        type: Number,
        default: 0
      },
      activeIndex:{
        type: Number,
        default: 0
      },
    },

    methods: {
      renderImageX2(){
        if(this.data['image-x2']){
          const classList = ['slider-image-tag']
          if(this.data['image-tablet']){
            classList.push('td-d-none')
          }
          if(this.data['image-mobile']){
            classList.push('md-d-none')
          }
          this.data['image-x2'][0].data.staticClass = classList.join(' ');
          return this.data['image-x2']
        }
        return null
      },
      renderImage(){

        if(this.data['image']){
          const classList = ['slider-image-tag']
          if(this.data['image-x2']){
            classList.push('x2-d-none')
          }
          if(this.data['image-tablet']){
            classList.push('td-d-none')
          }
          if(this.data['image-mobile']){
            classList.push('md-d-none')
          }
          this.data['image'][0].data.staticClass = classList.join(' ');

          return this.data['image']
        }
        return null
      },
      renderTabletImage(){

        if(this.data['image-tablet']){
          this.data['image-tablet'][0].data.staticClass = 'slider-image-tag d-none td-d-block'
          return this.data['image-tablet']
        }
        return null
      },
      renderMobileImage(){

        if(this.data['image-mobile']){
          this.data['image-mobile'][0].data.staticClass = 'slider-image-tag d-none md-d-block'
          return this.data['image-mobile']
        }
        return null
      },

    },
    computed:{
      sliderImageClass(){
        const classList = ['slider-image-container']
        if(this.activeIndex == this.index){
          classList.push('slider-image-container--active')
        }
        return classList.join(' ')
      }
    },
    render(h) {

      return <div class={this.sliderImageClass}>
        {this.renderImageX2()}
        {this.renderImage()}
        {this.renderTabletImage()}
        {this.renderMobileImage()}
      </div>
    }
  };
</script>
