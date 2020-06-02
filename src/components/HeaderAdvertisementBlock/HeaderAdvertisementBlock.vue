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
    methods: {},
    render(h) {
      return <div class="rt-header__advertisement-block">
        <a href={this.linkTarget} class="rt-header__ab-image-wrapper">
          <img src={this.image} class="rt-header__ab-image"/>
        </a>
        <div class="rt-header__ab-content-block">
          <div class="rt-header__ab-content-block-top">
            <a href={this.linkTarget}>
              <h5 class="p1 rt-font-bold">{this.$slots.title}</h5>
            </a>
            <p class="p3 color-main07">{this.$slots.paragraph}</p>
          </div>
          <div class="rt-header__ab-content-block-bottom">
            <a href={this.linkTarget} class="p3 rt-link rt-link--purple">{this.linkText}</a>
          </div>
        </div>
      </div>
    }
  }
</script>
