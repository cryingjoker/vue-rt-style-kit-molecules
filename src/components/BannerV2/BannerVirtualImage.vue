<script type="text/jsx">

  import {deviceTypeStore} from "vue-rt-style-kit-atoms";

  const componentsList = {};


  export default {
    name: "RtBannerVirtualImageV2",
    components: componentsList,
    props: {
      image: {
        type: Array,
        default: () => {
          return {}
        }
      },
      imageX2:{
        type: Array,
        default: () => {
          return []
        }
      },
      imageTablet:{
        type: Array,
        default: () => {
          return []
        }
      },
      imageMobile:{
        type: Array,
        default: () => {
          return []
        }
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
      imageRender(){
        if(this.image){
          return <div class="rt-n-banner-image-container x2-d-none">{this.image}</div>
        }
        return null
      },
      imageX2Render(){
        if(this.imageX2){
          return <div class="rt-n-banner-image-container d-none x2-d-block">{this.imageX2}</div>
        }
        return null
      }
    },
    render(h) {
      return <rt-row class="flex-fill rt-n-banner-image">
        <rt-col size={5} tablet-size={3} t-hide={true} m-hide={true}></rt-col>
        <rt-col size={7} tablet-size={3} mobile-size={3}>
          {this.imageRender}
          {this.imageX2Render}
        </rt-col>
      </rt-row>
    }
  }
  ;
</script>
