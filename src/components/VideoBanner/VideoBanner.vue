<script type="text/jsx">
import {tabsSliderStore} from "../TabsSlider/TabsSliderStore";

const componentsList = {};

export default {
  name: "RtVideoBanner",
  components: componentsList,
  props: {
    filterOpacity: {
      type: [Number, String],
      default: -1
    },
    preloadImage: {
      type: String,
      default: ''
    },
    filterColor: {
      type: String,
      default: 'black'
    },
    fullSrc: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    stopWhenNotShow: {
      type: Boolean,
      default: true
    },
    mobileImage: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    videoIsLoaded: false
  }),

  mounted() {
    this.bindScroll()

  },
  methods: {
    pause() {
      const video = this.$refs.video;
      if (video) {
        var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
        if (isPlaying) {
          video.pause()
        }
      }
    },
    play() {
      const video = this.$refs.video;
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
      if (!isPlaying && video) {
        video.play()
      }
    },
    start() {
      const video = this.$refs.video;
      if(video) {
        video.volume = 0;
        video.pause();
        setTimeout(() => {
          var isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;
          if (!isPlaying) {
            video.play();
          }
        }, 300)
      }
    },
    bindScroll() {
      if ('IntersectionObserver' in window && this.stopWhenNotShow) {
        const videoObserver = new IntersectionObserver((entries, imgObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.start()
            } else {
              this.pause()
            }
          })
        }, {threshold: 0});
        videoObserver.observe(this.$el);
      }
    },
    loadeddata(e) {
      this.videoIsLoaded = true
    }
  },
  computed: {
    playWrapper() {
      if (this.fullSrc) {
        return <div class="rt-container rt-video-banner__play-wrapper">
          <rt-col class="height-fill d-flex">
            <rt-row class="flex-fill">
              <rt-col size={7} tablet-size={3} m-hide={true}></rt-col>
              <rt-col size={3} tablet-size={3} mobile-size={3} class="relative">
                <div class="rt-video-banner__play" v-popup-trigger={{name: ('popup-' + this._uid)}}>
                  <svg class="rt-video-banner__play-svg" width="23" height="26" viewBox="0 0 23 26" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 23.5782V2.54283C0 0.985982 1.70037 0.0260869 3.03333 0.830457L21.0636 11.7108C22.3752 12.5023 22.3465 14.414 21.0118 15.1658L2.98147 25.3208C1.64825 26.0717 0 25.1083 0 23.5782Z"
                      fill="white"/>
                  </svg>
                </div>
              </rt-col>
            </rt-row>
          </rt-col>
        </div>
      }
      return null
    },
    fullVideo() {
      if (this.fullSrc) {
        return <rt-popup name={'popup-' + this._uid}>
          <video class="rt-video-banner__popup-video" crossorigin="anonymous" preload="auto" x-webkit-airplay=""
                 autoplay="false" aria-hidden="true" controls src={this.fullSrc}></video>
        </rt-popup>
      }
      return null
    },
    fitlerBlock() {
      const filterClassNames = ['rt-video-banner__filter',
        this.filterColor.length > 0 ? 'color-block--' + this.filterColor : '']
      const filterStyle = {}
      if (this.filterOpacity - 0 >= 0) {
        filterStyle.opacity = parseFloat(this.filterOpacity);
      }
      return <div style={filterStyle} class={filterClassNames}></div>
    },
    preloadImageRender() {
      if (this.preloadImage.length > 0 && !this.videoIsLoaded) {
        return <img src={this.preloadImage} class="rt-video-banner-default-image" alt=""/>
      } else {
        return null
      }
    },
    videoBlock() {
      if (this.src.length > 0) {
        if (this.mobileImage) {
          return <div>
            <img src={this.mobileImage} alt="" class="d-none md-d-block rt-video-banner__tag"/>
            <video class="md-d-none rt-video-banner__tag" width="100%" loop ref="video" preload="none" muted autolay
                   onLoadeddata={this.loadeddata}
                   aria-hidden="true"
                   playsinline loop=""
                   src={this.src}></video>
          </div>
        } else {
          return <video class="rt-video-banner__tag" width="100%" loop ref="video" preload="none" muted autolay
                        onLoadeddata={this.loadeddata}
                        aria-hidden="true"
                        playsinline loop=""
                        src={this.src}></video>
        }
      }
      return null
    }
  },
  render() {
    return <div class="rt-video-banner">
      <div class="rt-video-banner__wrapper">
        {this.fitlerBlock}
        {this.preloadImageRender}
        {this.videoBlock}
        {this.playWrapper}
      </div>
      <div class="rt-video-banner__content">
        {this.$slots.content}
      </div>
      {this.fullVideo}
    </div>
  }
};
</script>
