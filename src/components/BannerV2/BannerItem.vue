<script type="text/jsx">

    // import debounce from "debounce";
    import {deviceTypeStore} from "vue-rt-style-kit-atoms";
    import {bannerStore} from "./BannerStore";

    const componentsList = {};

    //dark-slate
    //gray
    //orange-super

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
          if(this.$slots['header']) {
            const header = this.$slots['header'];
            if(header) {
              bannerStore.setSlot(parentId, 'header', header, itemId)
            }
          }
          if(this.$slots['description']) {
            const description = this.$slots['description'];
            if(description) {
              bannerStore.setSlot(parentId, 'description', description, itemId)
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
          bannerStore.setSlot(parentId, 'background', this.colorType, itemId)

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

        },
        render(h) {
         return null
        }
    }
    ;
</script>
