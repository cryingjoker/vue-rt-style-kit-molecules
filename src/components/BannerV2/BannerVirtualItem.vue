<script type="text/jsx">

  // import debounce from "debounce";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import {bannerStore} from "./BannerStore";
  import BannerVirtualImage from "./BannerVirtualImage.vue";


  const componentsList = {};
  componentsList[BannerVirtualImage.name] = BannerVirtualImage

  //dark-slate
  //gray
  //orange-super

  export default {
    name: "RtBannerVirtualItemV2",
    components: componentsList,
    props: {
      data: {
        type: Object,
        default: () => {
          return {}
        }
      },
      activeId: {
        type: Number
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
      header() {
        if (this.data.header) {
          return <div class="sp-b-0-4 d-flex">
            {this.data.header}
          </div>
        }
        return null
      },
      label() {
        if (this.data.label) {
          return <h2 class="rt-font-h2">
            {this.data.label}
          </h2>
        }
        return null
      },
      description() {
        if (this.data.description) {
          return <p class="rt-n-banner-description sp-t-0-4 color-main08">
            {this.data.description}
          </p>
        }
        return null
      },
      footer() {
        if (this.data.footer) {
          return <div class="sp-t-1-2">
            {this.data.footer}
          </div>
        }
        return null
      },
      image() {
        if (this.data.image) {
          return <rt-row class="flex-fill rt-n-banner-image">
            <rt-col size="5"></rt-col>
            <rt-col size="7">
              {this.data.image}
            </rt-col>
          </rt-row>
        }
      }

    },
    render(h) {
      console.info(this.data)

      return <div class="rt-n-banner-item rt-container d-flex">

        <rt-row class="flex-fill rt-n-banner-content">
          <rt-col size="1"></rt-col>
          <rt-col size="5" class="d-flex flex-fill">
            <div class="d-flex flex-start-center">
              <div>
                {this.header}
                {this.label}
                {this.description}
                {this.footer}
              </div>
            </div>
          </rt-col>
        </rt-row>
        <rt-banner-virtual-image-v2 image={this.data?.image}
                                   image-x2={this.data['image-x2']}
                                   image-tablet={this.data?.imageTablet}
                                   image-mobile={this.data?.imageMobile}>

        </rt-banner-virtual-image-v2>


      </div>
    }
  }
  ;
</script>
