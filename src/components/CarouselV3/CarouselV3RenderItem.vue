<script type="text/jsx">
export default {
  name: "RtCarouselV3RenderItem",
  props: {
    name: {
      type: String,
      default: ''
    },
    colInRow: {
      type: Number
    },
    notActive: {
      type: Boolean
    },
    tabletNotActive: {
      type: Boolean
    },
    mobileNotActive: {
      type: Boolean
    },
    scrollableOnDesktop: {
      type: Boolean
    },
    customIds: {
      type: String,
      default: ''
    }
  },
  render(h) {
    const classListItem = ['rt-carousel-slide-v3'];
    classListItem.push('rt-carousel-slide-item-' + this.colInRow)
    if (!this.scrollableOnDesktop) {
      classListItem.push('rt-col-' + (12 / this.colInRow))
      classListItem.push('sp-b-1')
      classListItem.push('td-sp-b-none')
    }
    if (this.notActive) {
      classListItem.push('rt-carousel-slide-v3--not-act')
    }
    if (this.tabletNotActive) {
      classListItem.push('rt-carousel-slide-v3--td-not-act')
    }
    if (this.mobileNotActive) {
      classListItem.push('rt-carousel-slide-v3--md-not-act')
    }
    const attributes = {}
    if (this.customIds && this.customIds.length > 0) {
      attributes.id = this.customIds
    }
    return h('div', {
        class: classListItem,
        attrs: {
          id: this.customIds
        }
      }, this.$slots.default
    )
    // <div {...attributes} class={classListItem}>{this.$slots.default}</div>
  }

}

</script>
