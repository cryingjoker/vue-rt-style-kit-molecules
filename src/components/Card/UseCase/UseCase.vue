<script type="text/jsx">
const componentsList = {};
import variables from "../../../variables.json";
import debounce from "debounce";


export default {
  name: "RtUseCase",
  components: componentsList,
  data () {
    return {
      lastSelectedCard: null,
      mobileLayout: window.innerWidth <= parseInt(variables["tablet-upper-limit"])
    }
  },
  mounted(){
    this.setCardHeight();
    window.addEventListener('resize', debounce(this.setCardHeight, 35))

  },
  computed: {},
  methods: {
    setCardHeight() {
      if(!this.mobileLayout) {
        for(let i = 0; i < this.$children.length; i++) {
          this.$children[i].$el.style.height = this.$children[i].$el.querySelector('.rtb-card__reverse').scrollHeight + 20 + 'px';
        }
      } else {
        for(let j = 0; j < this.$children.length; j++) {
          this.$children[j].$el.style.height = this.$children[j].$el.querySelector('.rt-card__content').scrollHeight + 20 + 'px';
        }
      }
      this.equalizeCardsHeight();
    },
    equalizeCardsHeight() {
      let maxHeight = 0;
      for(let i = 0; i < this.$children.length; i++) {
        let cardHeight = +this.$children[i].$el.style.height.replace('px', '');
        maxHeight = maxHeight < cardHeight ? cardHeight : maxHeight;
      }
      for(let i = 0; i < this.$children.length; i++) {
        this.$children[i].$el.style.height = maxHeight + 'px';
      }
    }
  },
  render(h) {
    return <div class="row rt-rotating-card-gallery">
      {this.$slots.default}
    </div>
  }
}
</script>
