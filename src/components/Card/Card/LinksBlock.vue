<script type="text/jsx">
  import './Card.styl'
  export default {
    name: "LinksBlock",
    props: {
      iconArray: {
        type: Array,
        default: null
      },
      sourceDirectory: {
        type: String,
        default: '/sites/default/files/b2b/'
      }
    },
    data() {
      return {
        isOpen: false,
        totalQuantity: this.iconArray.length,
        quantityHidden: null,
        iconsList: [],
        outerWidth: null,
        innerWidth: null,
        visibleIcons: null,
        isIE: /*@cc_on!@*/false || !!document.documentMode
      }
    },

    computed: {},
    created() {},

    mounted() {
      this.quantityHidden = this.totalQuantity - 6;
      setTimeout(() => {
        if(this.$refs.button) {
          document.addEventListener('clickAll', () => {
            this.isOpen = !this.isOpen;
            this.$refs.inner.classList.add('rtb-card__links-block--expanded');
            for(let i = 0; i < this.totalQuantity; i++) {
              this.iconsList[i].classList.remove('rtb-card__social-link--hidden');
            }
          })
        }
      }, 1)
    },

    methods: {},

    render(h) {
      const content = (() => {
//        setTimeout(() => {
          if(this.$el) {
            let linksLayout = '';
            this.iconArray.forEach((el)=> {
              let link = `${this.sourceDirectory}${el.path}.svg`;
              let title = el.tooltip;
              linksLayout += (`<div class="rtb-card__social-link"><img src=${link} title=${title} /></div>`);
            });
            this.$el.children[0].innerHTML = linksLayout;
          }
//        },1)
      });
      const button = (() => {
        if(this.quantityHidden && this.totalQuantity > 6 && this.quantityHidden !== 1){
          return <button class="rtb-card__expand-button" onClick={this.unwrap} ref="button">ещё {this.quantityHidden}</button>;
        } else {
          return null;
        }
      })();
      return <div class="links-block">
        <div class="rtb-card__links-block" ref="inner">
          {content()}
        </div>
      </div>;
    }
  };
</script>
