<script type="text/jsx">

import isMobile from 'ismobilejs';


const componentsList = {};

export default {
  name: "RtAdBanner",
  props: {
    androindUrl: {
      type: String,
      default: ''
    },
    iosUrl: {
      type: String,
      default: ''
    },
    qrCode: {
      type: String,
      default: 'https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/qrcode.png'
    }
  },
  data: () => ({
    isIos: false,
    isAndroid: false
  }),

  mounted: function () {
    this.getMobileType()
  },
  beforeMount() {

  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy: function () {
  },

  methods: {
    getMobileType(){
      if(window?.navigator) {
        this.isIos = isMobile(window.navigator).apple.device
        this.isAndroid = isMobile(window.navigator).android.device
      }
    },
  },
  computed: {
    renderFooter(){
      if(!this.isIos && !this.isAndroid) {
        return <div class="d-flex sp-t-1-1">
          <img width="105" src={this.qrCode} alt=""/>
          <p class="color-main05 p2 sp-l-0-4">Наведите камеру <br/>
            на QR-код, чтобы <br/> скачать приложение</p>
        </div>
      }
      if(this.isIos) {
        return <div class="d-flex sp-t-1-1 md-d-block">
          <div class="flex-fill sp-r-0-2 md-sp-r-none">
            <rt-button class="rt-button-md--is-block" href={this.iosUrl} color="black">
              <img src="https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/appStore.svg" alt=""/>
            </rt-button>
          </div>
        </div>
      }
      if(this.isAndroid) {
        return <div class="d-flex sp-t-1-1 md-d-block">
          <div class="flex-fill">
            <rt-button class="rt-button-md--is-block" href={this.androindUrl} color="black">
              <img src="https://static-cdn.rt.ru/sites/default/files/img/ad_unit_component/googlePlay.svg" alt=""/>
            </rt-button>
          </div>
        </div>
      }
    }
  },
  render(h) {
    return <div class="rt-container">
      <rt-col size={12} class="rt-ad-banner sp-t-3 sp-b-3 td-sp-t-2-4 td-sp-b-2-4 md-sp-t-none md-sp-b-none">
        <rt-row class="rt-ad-banner__image-container">
          <rt-col size={5} tablet-size={3} mobile-size={3} class="relative">
            <div class="rt-ad-banner__image"></div>
          </rt-col>
        </rt-row>
        <rt-row class="rt-ad-banner__inner">
          <rt-col size={1} t-hide={true} m-hide={true} class="relative"></rt-col>
          <rt-col size={3} tablet-size={3} mobile-size={3} class="relative md-sp-t-1-1">
            <div class="rt-ad-banner__mobile"></div>
          </rt-col>
          <rt-col size={1} t-hide={true} m-hide={true}>
          </rt-col>
          <rt-col size={5} tablet-size={3} mobile-size={3}>
              <p class="rt-font-h2 md-sp-t-1-2">Скачайте приложение <br/>«Мой Ростелеком»</p>
              <p class="sp-t-1-1 td-sp-t-1 md-sp-t-0-3 rt-font-paragraph">Установите бесплатное приложение «Мой Ростелеком» и <br class="td-d-none"/>управляйте услугами
                в режиме онлайн не выходя из дома <br class="td-d-none"/>через любое устройство.</p>
            {this.renderFooter}
          </rt-col>
        </rt-row>
      </rt-col>

    </div>

  }
}

</script>
