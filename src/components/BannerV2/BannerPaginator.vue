<script type="text/jsx">

  // import debounce from "debounce";
  import { deviceTypeStore } from 'vue-rt-style-kit-atoms/src/stores/deviceTypeStoreMixin.js'
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
      height: {
        type: Number,
        default: 0
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
        type: String | Number,
      },
      bannerName:{
        type: Number|String
      },
      color:{
        type: String
      }

    },
    data: () => ({
      type: '',
      step: 0,
    }),

    mounted: function () {
      deviceTypeStore.addWatcher(this._uid,this.setType);
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
      },

    },
    methods: {
      setType(){
        const type = deviceTypeStore.getStatus()
        if(this.type != type){
          this.type = type;
        }
      },
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
        bannerStore.setActiveId(this.bannerName,this.items[nextIndex], false, false, 1)
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
      setActive(itemId, orientation = 0){

        bannerStore.setActiveId(this.bannerName,itemId, false, false, orientation)
      }
    },
    computed: {
      paginatorClass() {
        const classList = ['rt-n-banner-paginator'];
        if(this.color == 'orange'){
          classList.push('rt-n-banner-paginator-invert')
        }
        return classList.join(' ')
      },
      roundStyle() {
        return {strokeDashoffset: 45 - 45 * this.step / 100}
      },
      lineStyle(){
        return {width: ( 100 * this.step / 100)+'%'}
      },
      paginatorItems() {
        if(this.type != 'mobile') {
          return this.items.map((i) => {
            const classNames = ['rt-n-banner-paginator-item'];
            const isActive = i == this.activeId;
            if (isActive) {
              classNames.push('rt-n-banner-paginator-item--active')
              return <div class={classNames.join(' ')}>
                <svg class="rt-n-banner-paginator-round" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" style={this.roundStyle}>
                  <circle class="rt-n-banner-paginator-oval" stroke-width="1.5" cx="9" cy="9" r="7"
                          fill="none"></circle>
                </svg>
              </div>
            } else {
              const setActive = () => {
                this.setActive(i)
              }
              return <div onClick={setActive} class={classNames.join(' ')}></div>
            }

          })
        }
        const activeIndex = this.items.indexOf(this.activeId);
        const size = this.items.length;
        const prev = (activeIndex - 1 + size) %size;
        const next = (activeIndex + 1) %size;
        const setPrevActive = () => {
          this.setActive(this.items[prev],-1)
        }
        const setNextActive = () => {
          this.setActive(this.items[next],1)
        }
        const lineClassList = ['rt-n-banner-paginator-line']
        if(this.color == 'orange'){
          lineClassList.push('rt-n-banner-paginator-line-white')
        }
        return <div>
          <div class={lineClassList.join(' ')}>
            <div class="rt-n-banner-paginator-line-inner" style={this.lineStyle}></div>
          </div>
          <div class='rt-n-banner-paginator-inner' style={{top: (this.height-45)+'px'}}>
          <div class="rt-n-banner-paginator-button" onClick={setPrevActive}>
            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.471149 5.46945L5.97115 0L7.02885 1.06361L2.06363 6.00126L7.02885 10.9389L5.97115 12.0025L0.471149 6.53306C0.329592 6.39229 0.25 6.2009 0.25 6.00126C0.25 5.80162 0.329592 5.61023 0.471149 5.46945Z" fill="#101828"/>
            </svg>
          </div>
          <div class="rt-n-banner-paginator-button" onClick={setNextActive}>
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55815 5.46945L1.05815 0L0.000445366 1.06361L4.96567 6.00126L0.000445366 10.9389L1.05815 12.0025L6.55815 6.53306C6.6997 6.39229 6.7793 6.2009 6.7793 6.00126C6.7793 5.80162 6.6997 5.61023 6.55815 5.46945Z" fill="#101828"/>
            </svg>
          </div>
        </div></div>
      }

    },
    render(h) {
      return <div class={this.paginatorClass}>
        <div class="rt-container td-sp-h-1">
          <rt-row>
            <rt-col size="1" t-hide={true} m-hide={true}></rt-col>
            <rt-col size="10" mobile-size={3}>
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
