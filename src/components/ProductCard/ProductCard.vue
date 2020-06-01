<script type="text/jsx">
  import variables from "../../variables.json";
  export default {
  name: "RtProductCard",
      props: {
          fixedImageHeight: {
              type: Boolean,
              default: false
          },
          safeImageRate: {
              type: Boolean,
              default: false
          },
          backgroundImage: {
              type: String,
              default: ''
          },
          tabletBackgroundImage: {
              type: String,
              default: ''
          },
          mobileBackgroundImage: {
              type: String,
              default: ''
          },
          color: {
              type: String,
              default: ''
          },
      },
      data: () => ({
          tel: '',
          type: "desktop"
      }),

    methods: {

        checkWidth() {
            const w = window.innerWidth;

            const image = this.$refs.image;
            if (w <= parseInt(variables["tablet-upper-limit"])) {

                if (w < parseInt(variables["mobile-upper-limit"])) {
                    if (this.type != "mobile") {
                        image.classList.add("rt-product-card__image--hide-animate");
                        setTimeout(() => {
                            image.classList.remove("rt-product-card__image--hide-animate");
                            this.type = "mobile";
                            image.classList.add("rt-product-card__image--show-animate");
                            setTimeout(() => {
                                image.classList.remove("rt-product-card__image--show-animate");
                            }, 400);
                        }, 400);
                    }

                } else {
                    if (this.type != "tablet") {
                        image.classList.add("rt-product-card__image--hide-animate");
                        setTimeout(() => {
                            image.classList.remove("rt-product-card__image--hide-animate");
                            this.type = "tablet";
                            image.classList.add("rt-product-card__image--show-animate");

                            setTimeout(() => {
                                image.classList.remove("rt-product-card__image--show-animate");
                            }, 400);
                        }, 400);
                    }
                }
            } else {
                if (this.type != "desktop") {
                    image.classList.add("rt-product-card__image--hide-animate");
                    setTimeout(() => {
                        image.classList.remove("rt-product-card__image--hide-animate");
                        this.type = "desktop";
                        image.classList.add("rt-product-card__image--show-animate");

                        setTimeout(() => {
                            image.classList.remove("rt-product-card__image--show-animate");
                        }, 400);
                    }, 400);
                }

            }
        }
    },

  mounted() {
    this.checkWidth();
    if (this.tabletBackgroundImage || this.mobileBackgroundImage) {
      window.addEventListener("resize", this.checkWidth, {
        passive: false
      });
    }
  },


  render(h) {
    let productCardClass = (() => {
      let className = "rt-product-card";
      if (this.fixedImageHeight && !this.safeImageRate) {
        className += " rt-product-card--has-fixed-height";
      }
      if (this.fixedImageHeight && this.safeImageRate) {
        className += " rt-product-card--has-static-image-with-fix-height";
      }
//      if(this.contentOrientation === 'bottom'){
//        className += ' rt-product-card--has-bottom-orient'
//      }
      if(this.color){
        className += ` rt-product-card--${this.color}`
      }
      return className;
    })();
    const productImageStyle = (() => {
        const styleObj = {};
        if (this.safeImageRate && this.type === "mobile") {
          if (this.type === "tablet" && this.tabletBackgroundImage) {
            return this.tabletBackgroundImage;
          } else if (this.type === "mobile" && this.mobileBackgroundImage) {
            return this.mobileBackgroundImage;
          } else {
            return this.backgroundImage;
          }
        } else {
          if (this.backgroundImage) {
            if (this.type === "tablet" && this.tabletBackgroundImage) {
              styleObj["backgroundImage"] = "url(" + this.tabletBackgroundImage + ")";
            } else if (this.type === "mobile" && this.mobileBackgroundImage) {
              styleObj["backgroundImage"] = "url(" + this.mobileBackgroundImage + ")";
            } else {
              styleObj["backgroundImage"] = "url(" + this.backgroundImage + ")";
            }
          }
        }
        return styleObj;
      }

    )();

    if (this.$slots.footer && this.$slots.content)
    {
      return<div class={productCardClass}>
        <div class="rt-product-card__body">
          <div class="rt-product-card__content">
            {this.$slots.content}
          </div>
          <div class="rt-product-card__footer">
            {this.$slots.footer}
          </div>
        </div>
        <div ref="image" class="rt-product-card__image"></div>
      </div>;
    }

    if (this.safeImageRate && this.type === "mobile") {
      return <div class={productCardClass}>
        <div class="rt-product-card__body">
          {this.$slots.default}
        </div>
        <div class="rt-product-card__image rt-product-card__image-tag">
          <img ref="image" class="rt-product-card__image-tag" src={productImageStyle}/>
        </div>
      </div>;
    }
    return <div class={productCardClass}>
      <div class="rt-product-card__body">
        {this.$slots.default}
      </div>
      <div ref="image" class="rt-product-card__image" style={productImageStyle}>

      </div>
    </div>;
  }
}



</script>
