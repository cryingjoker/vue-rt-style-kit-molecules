<script type="text/jsx">

  // import debounce from "debounce";
  import {deviceTypeStore} from "vue-rt-style-kit-atoms";
  import {bannerStore} from "./BannerStore";

  const componentsList = {};


  export default {
    name: "RtBannerPaginatorV2",
    components: componentsList,
    props: {
      fps: {
        type: Number
      },
      time: {
        type: Number
      },
      pause: {
        type: Boolean,
        default: false
      },
      pauseOnHover: {
        type: Boolean,
        default: true
      },
      items: {
        type: Array,
        default: () => ([])
      },
      activeId: {
        type: String,
      },
      bannerName:{
        type: Number|String
      }

    },
    data: () => ({

      step: 0,
    }),

    mounted: function () {
      this.tick();
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy: function () {
    },
    watch: {
      pause(a, b) {
        if (this.pauseOnHover) {
          if (a != b && b) {
            this.tick()
          }
        }
      },
      activeId(a,b){
        if(a!=b){
          this.step = 0;
        }
      }
    },
    methods: {
      tick() {
        if (!this.pause && this.pauseOnHover) {
          this.step += 100 / (this.time / 1000 * this.fps)
          if (this.step >= 100) {
            this.step = 0
            this.setNextSlide()
          }else {
            setTimeout(() => {
              this.tick()
            }, 1000 / this.fps)
          }
        }
      },
      setNextSlide(){
        const activeIndex = this.items.indexOf(this.activeId)
        const nextIndex = (activeIndex+1)%this.items.length;
        bannerStore.setActiveId(this.bannerName,this.items[nextIndex])
        setTimeout(()=>{
          this.tick()
        },500)

      },
      updateSlots() {
        this.getSlots();
        this.getSlotSort();
      },
      getSlots() {
        this.customSlotsSort = bannerStore.getSlotSort(this.bannerName)
      },
      getSlotSort() {
        this.customSlots = bannerStore.getSlot(this.bannerName)
      },
      setActive(itemId){
        bannerStore.setActiveId(this.bannerName,itemId)
      }
    },
    computed: {
      paginatorClass() {
        const classList = ['rt-n-banner-paginator'];
        return classList.join(' ')
      },
      roundStyle() {
        return {strokeDashoffset: 45 - 45 * this.step / 100}
      },
      paginatorItems() {
        return this.items.map((i) => {
          const classNames = ['rt-n-banner-paginator-item'];
          const isActive = i == this.activeId;
          if (isActive) {
            classNames.push('rt-n-banner-paginator-item--active')
            return <div class={classNames.join(' ')}>
              <svg class="rt-n-banner-paginator-round" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" style={this.roundStyle}>
                <circle id="Oval" stroke="#FF4F12" stroke-width="1.5" cx="9" cy="9" r="7" fill="none"></circle>
              </svg>
            </div>
          } else {
            const setActive = ()=>{
              this.setActive(i)
            }
            return <div onClick={setActive} class={classNames.join(' ')}></div>
          }

        })
      }

    },
    render(h) {
      return <div class={this.paginatorClass}>
        <div class="rt-container">
          <rt-row>
            <rt-col size="1"></rt-col>
            <rt-col size="10">
              <div class="rt-n-banner-paginator-container d-flex">
                {this.paginatorItems}
              </div>
            </rt-col>
          </rt-row>
        </div>
      </div>

    }
  }

</script>
