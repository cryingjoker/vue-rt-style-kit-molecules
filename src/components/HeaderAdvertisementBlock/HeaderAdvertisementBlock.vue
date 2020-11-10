<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtHeaderAdvertisementBlock",
    components: componentsList,
    props:{
      image: {
        type: String,
        default: ''
      },
      linkTarget: {
        type: String,
        default: ''
      },
      linkText: {
        type: String,
        default: ''
      },
      newWindow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {

      }
    },
    mounted(){},
    computed: {
      fixRegion() {
        let linkHref = this.linkTarget;
        let locality = document.cookie.split('; ').find( i =>
            i.search('userLocalityEng=') == 0
        );
        let place = '';
        place = locality ? `/-${locality.split('=')[1]}-` : '';
        return place + linkHref;
      }
    },
    methods: {},
    render(h) {
      return <div class="rt-header__promo-block">
        <a href={this.fixRegion} class="rt-header__ab-image-wrapper" target={this.newWindow ? '_blank' : '_self'}>
          <img src={this.image} class="rt-header__ab-image"/>
        </a>
        <div class="rt-header__ab-content-block">
          <div class="rt-header__ab-content-block-top">
            <a href={this.fixRegion}  target={this.newWindow ? '_blank' : '_self'}>
              <h5 class="p1 rt-font-bold" domPropsInnerHTML={this.$slots.title[0].text}></h5>
            </a>
            <p class="p3 color-main07" domPropsInnerHTML={this.$slots.paragraph[0].text}></p>
          </div>
          <div class="rt-header__ab-content-block-bottom">
            <a href={this.fixRegion} class="p3 rt-link rt-link--purple" target={this.newWindow ? '_blank' : '_self'}>{this.linkText}</a>
          </div>
        </div>
      </div>
    }
  }
</script>
