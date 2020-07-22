<script type="text/jsx">

    // import debounce from "debounce";
    import {deviceTypeStore} from "vue-rt-style-kit-atoms";
    import {bannerStore} from "./BannerStore";
    const componentsList = {};
    // componentsList[BannerItem.name] = BannerItem
    //dark-slate
    //gray
    //orange-super

    export default {
        name: "RtBannerV2",
        components: componentsList,
        props: {
          colorType:{
            default: 'gray',
            type: String
          },
          name:{
            type: String,
            default: ''
          }
        },
        data: () => ({
          customSlots: {},
          customSlotsSort: [],
        }),


        computed: {
          bannerName(){
            if(this.name.length > 0){
              return this.name
            }else{
              return this._uid
            }
          },
          bannerClass(){
            const classList = ['rt-n-banner']
            classList.push('color-block--'+this.colorType)
            if(this.colorType != 'gray'){
              classList.push('color-white')
            }
            return classList.join(' ')
          }
        },

        mounted: function () {
          console.info('this.bannerName',this.bannerName)
          bannerStore.addWatcher(this.bannerName, this.updateSlots)
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
          updateSlots(){
            this.getSlots();
            this.getSlotSort();
          },
          getSlots(){
            this.customSlots = bannerStore.getSlot(this.bannerName);
            console.info('this.customSlots',this.customSlots)
          },
          getSlotSort(){
            this.customSlotsSort = bannerStore.getSlotSort(this.bannerName);
            console.info('this.customSlotsSort',this.customSlotsSort)
          }
        },
        render(h) {
         return <div class="rt-container">
           <div class={this.bannerClass}>new banner
             {JSON.stringify(this.customSlots)}
             {JSON.stringify(this.customSlotsSort)}
             {this.$slots.default}
           </div>
          </div>

        }
    }

</script>
