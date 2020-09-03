<script type="text/jsx">

    // import debounce from "debounce";
    import {deviceTypeStore} from "vue-rt-style-kit-atoms";
    import {bannerStore} from "./BannerStore";

    const componentsList = {};


    export default {
        name: "RtBannerItemV2",
        components: componentsList,
        props: {
          colorType:{
            default: 'gray',
            type: String
          },
          bannerName:{
            type: String,
            default: ''
          },
          isActive:{
            type: Boolean,
            default: false
          },
          useGradient:{
            type: Boolean,
            default: true
          },
          url:{
            type:String,
            default: ''
          },
          showUrlOnMobile:{
            type:Boolean,
            default: true
          },
          showUrlOnTablet:{
            type:Boolean,
            default: false
          },
          showUrlOnDesktop:{
            type:Boolean,
            default: false
          }
        },
        data: () => ({

        }),



        mounted: function () {
          let parentId;
          if(this.bannerName.length > 0){
            parentId = this.bannerName;
          }
          else{
            parentId = this.$parent._uid
          }
          const itemId = this._uid
          if(this.$slots['label']) {
            const label = this.$slots['label'];
            if(label) {
              bannerStore.setSlot(parentId, 'label', label, itemId)
            }
          }
          bannerStore.setSlot(parentId, 'useGradient', this.useGradient, itemId)
          if(this.$slots['header']) {
            const header = this.$slots['header'];
            if(header) {
              bannerStore.setSlot(parentId, 'header', header, itemId)
            }
          }
          if(this.$slots['mobile-header']) {
            const header = this.$slots['mobile-header'];
            if(header) {
              bannerStore.setSlot(parentId, 'mobileHeader', header, itemId)
            }
          }
          if(this.$slots['description']) {
            const description = this.$slots['description'];
            if(description) {
              bannerStore.setSlot(parentId, 'description', description, itemId)
            }
          }
          if(this.$slots['footer']) {
            const footer = this.$slots['footer'];
            if(footer) {
              bannerStore.setSlot(parentId, 'footer', footer, itemId)
            }
          }
          if(this.$slots['image']) {
            const image = this.$slots['image'];
            if(image) {
              bannerStore.setSlot(parentId, 'image', image, itemId)
            }
          }
          if(this.$slots['image-x2']) {
            const image = this.$slots['image-x2'];
            if(image) {
              bannerStore.setSlot(parentId, 'image-x2', image, itemId)
            }
          }
          if(this.$slots['image-tablet']) {
            const image = this.$slots['image-tablet'];
            if(image) {
              bannerStore.setSlot(parentId, 'image-tablet', image, itemId)
            }
          }
          if(this.$slots['image-mobile']) {
            const image = this.$slots['image-mobile'];
            if(image) {
              bannerStore.setSlot(parentId, 'image-mobile', image, itemId)
            }
          }
          if(this.isActive){
            bannerStore.setActiveSlot(parentId,itemId)
          }
          if(this.url.length > 0){
            bannerStore.setSlot(parentId, 'url', this.url, itemId)
            bannerStore.setSlot(parentId, 'showUrlOnMobile', this.showUrlOnMobile, itemId)
            bannerStore.setSlot(parentId, 'showUrlOnTablet', this.showUrlOnTablet, itemId)
            bannerStore.setSlot(parentId, 'showUrlOnDesktop', this.showUrlOnDesktop, itemId)
          }
          bannerStore.setSlot(parentId, 'background', this.colorType, itemId)
          bannerStore.setActiveId(parentId, itemId)

        },
        beforeMount() {

        },
        beforeUpdate() {
        },
        updated() {
        },
        beforeDestroy: function () {
          let parentId;
          if(this.bannerName.length > 0){
            parentId = this.bannerName;
          }
          else{
            parentId = this.$parent._uid
          }
          const itemId = this._uid
          bannerStore.removeSlots(parentId,itemId)
        },
        methods: {

        },
        render(h) {
         return null
        }
    }
    ;
</script>
