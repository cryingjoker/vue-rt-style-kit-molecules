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
    mounted(){
      console.log(this.newWindow)
    },
    computed: {},
    methods: {
      fixRegion($event) {
        if(window.innerWidth > parseInt(variables["tablet-upper-limit"])) {
          $event.preventDefault();
          $event.stopPropagation();
          let urlString = window.location.href;
          let startPos = urlString.indexOf('/-');
          let endPos = urlString.indexOf('-/');
          let place = '';
          if(startPos != -1) {
            if(endPos != -1) {
              place = `${urlString.substring(startPos, endPos)}-`
            } else {
              place = `${urlString.substring(startPos, urlString.length - 1)}-`
            }
          }
          if(this.newWindow) {
            window.open(urlString.substring(0, startPos) + place + this.linkTarget, '_blank');
          } else {
            window.open(urlString.substring(0, startPos) + place + this.linkTarget, '_self');
          }
        }
      }
    },
    render(h) {
      return <div class="rt-header__promo-block">
        <a href={this.linkTarget} class="rt-header__ab-image-wrapper" onClick={this.fixRegion}>
          <img src={this.image} class="rt-header__ab-image"/>
        </a>
        <div class="rt-header__ab-content-block">
          <div class="rt-header__ab-content-block-top">
            <a href={this.linkTarget} onClick={this.fixRegion}>
              <h5 class="p1 rt-font-bold" domPropsInnerHTML={this.$slots.title[0].text}></h5>
            </a>
            <p class="p3 color-main07" domPropsInnerHTML={this.$slots.paragraph[0].text}></p>
          </div>
          <div class="rt-header__ab-content-block-bottom">
            <a href={this.linkTarget} class="p3 rt-link rt-link--purple" onClick={this.fixRegion}>{this.linkText}</a>
          </div>
        </div>
      </div>
    }
  }
</script>
