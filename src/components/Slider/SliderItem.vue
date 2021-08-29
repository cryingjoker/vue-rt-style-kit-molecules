<script type="text/jsx">

  import {sliderStore} from "./SliderStore";

  export default {
    name: "RtSliderItem",
    props: {},
    data: () => ({}),
    created() {

    },
    mounted() {
      const parentId = this.$parent.$parent._uid
      const itemId = this._uid

      if(this.$slots['label']) {
        const label = this.$slots['label'];
        if(label) {
          if (label[0].text?.length > 25) {
            label[0].text = label[0].text.substring(0, 24) + '...'
          }
          sliderStore.setSlot(parentId, 'label', label, itemId)
        }
      }
      if(this.$slots['title']) {
        const title = this.$slots['title'];
        if(title[0].text?.length > 50){
          title[0].text = title[0].text.substring(0,49)+'...'
        }
        sliderStore.setSlot(parentId, 'title', title, itemId)
      }
      if(this.$slots['text']) {
        const text = this.$slots['text'];
        if(text[0].text?.length > 150){
          text[0].text = text[0].text.substring(0,149)+'...'
        }
        sliderStore.setSlot(parentId, 'text', text, itemId)
      }
      if(this.$slots['image']) {
        sliderStore.setSlot(parentId, 'image', this.$slots['image'], itemId)
      }
      if(this.$slots['image-x2']) {
        sliderStore.setSlot(parentId, 'image-x2', this.$slots['image-x2'], itemId)
      }
      if(this.$slots['image-tablet']) {
        sliderStore.setSlot(parentId, 'image-tablet', this.$slots['image-tablet'], itemId)
      }
      if(this.$slots['image-mobile']) {
        sliderStore.setSlot(parentId, 'image-mobile', this.$slots['image-mobile'], itemId)
      }
      if(this.$slots['boolets']) {

        sliderStore.setSlot(parentId, 'boolets', this.$slots['boolets'], itemId)
      }
    },
    methods: {},
    computed: {},
    render(h) {
      return null

    }
  };
</script>
