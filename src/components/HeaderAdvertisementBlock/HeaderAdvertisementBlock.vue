<script type="text/jsx">
  const componentsList = {};

  export default {
    name: "RtHeaderAdvertisementBlock",
    components: componentsList,
    props:{
      image: {
        type: String,
        default: ''
      },
      linkTarget: {
        type: String,
        default: ''
      },
      linkText: {
        type: String,
        default: ''
      },
      newWindow: {
        type: Boolean,
        default: false
      },
      pushData: {
        type: String
      }
    },
    computed: {
      fixRegion() {
        if(this.linkTarget.indexOf('.') == -1) {
          let linkHref = this.linkTarget;
          let locality = document.cookie.split('; ').find(i =>
            i.search('userLocalityEng=') == 0
          );
          let place = '';
          place = locality ? `/-${locality.split('=')[1]}-` : '';
          return place + linkHref;
        } else {
          return this.linkTarget;
        }
      },
      linkAttrs() {
        return {
          href: this.fixRegion,
          target: this.newWindow ? '_blank' : null,
          rel: this.newWindow ? 'nofollow noopener' : null,
        }
      }
    },
    methods: {
      linkClick() {
        this.$emit('banner-link-click', this.pushData || this.$slots.title[0].text)
        this.$parent.$emit('banner-link-click', this.pushData || this.$slots.title[0].text)
      }
    },
    render(h) {
      return h('div', { class: { 'rt-header__promo-block': true } },
        [
          h('a', {
              class: { 'rt-header__ab-image-wrapper': true },
              on: { click: e => this.linkClick(e) },
              attrs: { ...this.linkAttrs }
            },
            [
              h('img', {
                class: { 'rt-header__ab-image': true },
                attrs: { src: this.image }
              })
            ]
          ),
          h('div', { class: { 'rt-header__ab-content-block': true } },
            [
              h('div',
                { class: { 'rt-header__ab-content-block-top': true } },
                [
                  h('a', {
                      class: { },
                      on: { click: e => this.linkClick(e) },
                      attrs: { ...this.linkAttrs }
                    },
                    [
                      h('h5', {
                        class: { 'p1 rt-font-bold': true },
                        domProps: { innerHTML: this.$slots.title[0].text }
                      })
                    ]
                  ),
                  h('p', {
                    class: { 'p3 color-main07': true },
                    domProps: { innerHTML: this.$slots.paragraph[0].text }
                  })
                ]
              ),
              h('div',
                { class: { 'rt-header__ab-content-block-bottom': true } },
                [
                  h('a', {
                      class: { 'p3 rt-link rt-link--purple': true },
                      on: { click: e => this.linkClick(e) },
                      attrs: { ...this.linkAttrs }
                    },
                    this.linkText
                  )
                ]
              )
            ]
          )
        ]
      )
    }
  }
</script>
