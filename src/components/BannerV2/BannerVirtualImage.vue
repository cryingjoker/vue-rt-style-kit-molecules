<script type="text/jsx">

  import {deviceTypeStore} from "vue-rt-style-kit-atoms";

  const componentsList = {};


  export default {
    name: "RtBannerVirtualImageV2",
    components: componentsList,
    props: {
      image: {
        type: Array,

      },
      imageX2:{
        type: Array,

      },
      imageTablet:{
        type: Array,

      },
      imageMobile:{
        type: Array,
      },
      useGradient: {
        type: Boolean
      }
    },


    mounted: function () {

    },
    beforeMount() {

    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy: function () {
    },
    methods: {},
    computed: {
      gradient(){
        if(this.useGradient){
          return <div class="rt-n-banner-gradient md-d-none"></div>
        }
        return null
      },
      imageRender(){
        if(this.image){
          const classList = ['rt-n-banner-image-container']
          if(this.imageX2){
            classList.push('x2-d-none')
          }
          if(this.imageTablet){
            classList.push('td-d-none')
          }
          if(this.imageMobile){
            classList.push('md-d-none')
          }
          return <div class={classList.join(' ')}>{this.image}</div>
        }
        return null
      },
      imageX2Render(){
        if(this.imageX2){
          const classList = ['rt-n-banner-image-container', 'd-none', 'x2-d-block'];
          if(this.imageTablet){
            classList.push('td-d-none')
          }
          if(this.imageMobile){
            classList.push('md-d-none')
          }
          return <div class={classList.join(' ')}>{this.imageX2}</div>
        }
        return null
      },
      imageTabletRender(){

        if(this.imageTablet){
          const classList = ['rt-n-banner-image-container', 'td-d-block', 'd-none'];
          if(this.imageMobile){
            classList.push('md-d-none');
          }
          return <div class={classList.join(' ')}>{this.imageTablet}</div>
        }
        return null
      },
      imageMobileRender(){
        if(this.imageMobile){
          const classList = ['rt-n-banner-image-container', 'md-d-block', 'd-none'];

          return <div class={classList.join(' ')}>{this.imageMobile}</div>
        }
        return null
      }
    },
    render(h) {
      return <rt-row class="flex-fill rt-n-banner-image">
        <rt-col size={5} tablet-size={3} m-hide={true}></rt-col>
        <rt-col size={7} tablet-size={3} mobile-size={3}>
          {this.gradient}
          {this.imageRender}
          {this.imageX2Render}
          {this.imageTabletRender}
          {this.imageMobileRender}
        </rt-col>
      </rt-row>
    }
  }
  ;
</script>
