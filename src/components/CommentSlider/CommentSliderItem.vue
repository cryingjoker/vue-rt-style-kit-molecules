<script type="text/jsx">


import {commentSliderStore} from "./CommentSliderStore";

export default {
  name: "RtCommentSliderItem",

  props: {
    sliderName: {
      type: String,
      default: ''
    },
    authorImage: {
      type: String,
      default: ''
    },
    authorLink: {
      type: String,
      default: ''
    },
    contentUrl:{
      type: String,
      defualt: ''
    },


  },
  data: () => ({
  }),
  watch:{

  },

  beforeUpdate(a,b) {
  },
  mounted: function () {
    this.addWatcher();
    this.addInStore();

  },
  computed:{
    renderItem(){

      return {
        author_name: this.$slots.author_name,
        authorLink: this.authorLink,
        author_about: this.$slots.author_about,
        comment: this.$slots.comment,
        contentUrl: this.contentUrl,
        authorImage: this.authorImage,
      }
    }
  },
  beforeDestroy: function () {
    this.removeWatcher()
  },

  methods: {
    removeWatcher(){
      commentSliderStore.removeSlide(this.sliderName, this._uid)
    },
    updateSlide(){
      commentSliderStore.updateSlide(this.sliderName, this._uid, this.renderItem)
    },
    addInStore() {
      commentSliderStore.createSlide(this.sliderName, this._uid, this.renderItem)
    },
    addWatcher() {
      commentSliderStore.addWatcher(this.sliderName, this.getSliderContent, this._uid)
    },
    getSliderContent() {
      let ids, activeIndex;
      ({
        _ids: ids,
        activeIndex: activeIndex
      } = commentSliderStore.getSliderContent(this.sliderName));
      this.activeIndex = activeIndex.map((i)=>ids[i]);
      let isActive=false
      let isBefore=false
      let isBBefore=false
      let isNext=false
      let isNNext=false

      if(ids[activeIndex[0]] == this._uid){
        isBBefore = true
      }
      if(ids[activeIndex[1]] == this._uid){
        isBefore = true
      }
      if(ids[activeIndex[2]] == this._uid){
        isActive = true
      }
      if(ids[activeIndex[2]] == this._uid){
        isNext = true
      }
      if(ids[activeIndex[3]] == this._uid){
        isNNext = true
      }
      this.isActive = isActive
      this.isBefore = isBefore
      this.isBBefore = isBBefore
      this.isNext = isNext
      this.isNNext = isNNext

    }
  },
  render(h) {
    return null
  }
};
</script>
