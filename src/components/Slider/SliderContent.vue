<script type="text/jsx">

  export default {
    name: "RtSliderContent",
    props: {
      data: {},
      index: {
        type: Number,
        default: 0
      },
      activeIndex:{
        type: Number,
        default: 0
      },
    },

    mounted() {
    },
    methods: {
      renderLabel(){
        if(this.data.label){
          return <p class="rt-font-small-paragraph color-main07 sp-b-0-4 td-sp-b-0-3">{this.data.label}</p>
        }
        return null
      },
      renderTitle(){
        if(this.data.title){
          return <p class="rt-font-h2 sp-b-1-1 td-sp-b-1">{this.data.title}</p>
        }
        return null
      },
      renderText(){
        if(this.data.text){
          return <p class="rt-font-small-paragraph">{this.data.text}</p>
        }
        return null
      },
      renderBoolets(){

        if(this.data.boolets){
          return <ul class="rt-ordered-list rt-ordered-list--boolet">
            {this.data.boolets.map((boolet) => {
              return <li class="rt-ordered-list__item rt-font-small-paragraph">{boolet}</li>

            })
            }
          </ul>

        }
        return null
      },
    },
    computed:{
      sliderContentClass(){
        const classList = ['slider-content-container']
        if(this.activeIndex == this.index){
          classList.push('slider-content-container--active')
        }
        return classList.join(' ')
      }
    },
    render(h) {
      return <div class={this.sliderContentClass}>
        {this.renderLabel()}
        {this.renderTitle()}
        {this.renderText()}
        {this.renderBoolets()}
      </div>
    }
  };
</script>
