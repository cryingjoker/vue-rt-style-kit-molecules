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
      }
    },
    data () {
      return {

      }
    },
    mounted(){},
    computed: {},
    methods: {
      fixRegion($event) {
        $event.preventDefault();
        $event.stopPropagation();
        let urlString = window.location.href;
        let startPos = urlString.indexOf('/-');
        let endPos = urlString.indexOf('-/');
        let place;
        if(startPos != -1) {
          if(endPos != -1) {
            place = `-${urlString.substring(startPos + 2, endPos)}-`
          }
        } else {
            place = `-${urlString.substring(startPos + 2, urlString.length - 1)}-`
        }
        window.location.href = urlString.substring(0, startPos) + place + this.linkTarget;
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
              <h5 class="p1 rt-font-bold">{this.$slots.title}</h5>
            </a>
            <p class="p3 color-main07">{this.$slots.paragraph}</p>
          </div>
          <div class="rt-header__ab-content-block-bottom">
            <a href={this.linkTarget} class="p3 rt-link rt-link--purple" onClick={this.fixRegion}>{this.linkText}</a>
          </div>
        </div>
      </div>
    }
  }
</script>
