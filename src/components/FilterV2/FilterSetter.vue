<script type="text/jsx">

import {filterStore} from "./FitlerStore";

export default {
  name: "RtFilterNSetter",

  props: {
    filterName: {
      type: String
    },
    filterTags: {
      type: Array
    },
    customClass:{
      type: String,
      default: ''
    },
    activeClass: {
      type: String,
      default: ''
    }

  },
  data: () => ({

    activeTags: []
  }),

  mounted() {
    if (this.filterName) {
      filterStore.addWatcher(this.filterName, this.getFilterActiveTag)
      this.getFilterActiveTag();
    }
  },
  methods: {
    getFilterActiveTag() {
      this.activeTags = filterStore.getActiveTags(this.filterName)
    },
    toggleTag() {
      this.filterTags.forEach((tag) => {
        if (this.isActive) {
          filterStore.removeActiveTags(this.filterName, tag)
        } else {
          filterStore.setActiveTags(this.filterName, tag)
        }
      })
      this.getFilterActiveTag()
    }
  },
  computed: {
    isActive() {
      const notFoundTag = this.filterTags.find(tag => {
        return this.activeTags.indexOf(tag) < 0
      })

      if (notFoundTag) {
        return false
      } else {
        return true
      }
    },
    classList() {
      const classList = ['rt-tag-n'];
      if(this.customClass.length > 0){
        classList.push(this.customClass)
      }

      if (this.isActive) {
        if (this.activeClass.length > 0) {
          classList.push(this.activeClass)
        }
        classList.push('rt-tag-n-active');
      }
      return classList.join(' ')
    }
  },
  render() {
    if (this.filterName && this.filterTags) {
      return <div onClick={this.toggleTag} class={this.classList}>{this.$slots.default}</div>
    } else {
      return null
    }
  }
};
</script>
