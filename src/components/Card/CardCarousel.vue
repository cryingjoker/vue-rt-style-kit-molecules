<script type="text/jsx">
    const componentsList = {};
    import variables from "../../variables.json";

    export default {
        name: "RtCardCarousel",
        components: componentsList,
        props: {
            resizeCardsOnDesktop:{
                type: Boolean,
                default: false
            },
            resizeCardsOnTablet:{
                type: Boolean,
                default: false
            },
            resizeCardsOnMobile:{
                type: Boolean,
                default: true
            },
            resizeCardsClass:{
                type: Array,
                default: () => ['.rt-card__content']
            },
            carouselItemClass: {
                type: String,
                default: '.carousel-card'
            },
            carouselItemActiiveClass: {
                type: String,
                default: '.carousel-card--active'
            }
        },

        data() {
            return {
                itemClassNormalized: '',
                mobileLayout: window.innerWidth <= parseInt(variables["mobile-upper-limit"]),
                itemsLength: 0,
                activeSlideIndex: 0,
                nextSlideIndex: 0
            }
        },
        mounted() {
            this.getCarouselItemsLength();
            window.addEventListener('resize', () => {
                this.mobileLayout = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);
                this.renderLayout();
            });
            this.renderLayout();
        },
        methods: {
            getCarouselItemsLength() {
                this.itemClassNormalized = this.carouselItemClass[0] === '.' ? this.carouselItemClass : '.' + this.carouselItemClass;
                // console.info('this.$refs.carousel', this.$refs.carousel, this.itemClassNormalized);
                // console.info('this.$refs.carousel', this.$refs.carousel.querySelectorAll(this.itemClassNormalized), this.$refs.carousel.querySelectorAll(this.itemClassNormalized).length);
                this.itemsLength = this.$refs.carousel.querySelectorAll(this.itemClassNormalized).length
            },
            getCarouselItems(index) {
                if (index === undefined) {
                    return this.$refs.carousel.querySelectorAll(this.itemClassNormalized)
                } else {
                    return this.$refs.carousel.querySelectorAll(this.itemClassNormalized)[index];
                }
            },
            renderLayout() {
                if (this.mobileLayout) {
                    this.removePaginator();
                    this.addPaginator();
//          for(let i = 0; i <  this.itemsLength; i++) {
//            document.querySelector('.custom-carousel__paginator').children[i].addEventListener('click', (e) => {
//              let activePaginatorIndex = this.getChildNumber(e.target);
//              this.mobileCarousel(activePaginatorIndex);
//            })
//          }
//          this.mobileSwipe(); //using CSS positioning
                } else {
                    this.removePaginator();
                    this.positionCarouselCards();
                    this.getCarouselItems().forEach((el) => {
                        el.removeAttribute("style")
                    });

                }
            },

            addPaginator() {
                // for (let i = 0; i <  this.itemsLength; i++) {
                //     let paginatorItem = document.createElement('div');
                //     paginatorItem.classList.add('custom-carousel__paginator-item');
                //     document.querySelector('.custom-carousel__paginator').appendChild(paginatorItem);
                //     if (i === this.nextSlideIndex) {
                //         document.querySelector('.custom-carousel__paginator-item').classList.add('custom-carousel__paginator-item--active');
                //     }
                // }
            },

            removePaginator() {
                let myNode = document.querySelector('.custom-carousel__paginator');
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
            },

            getChildNumber(node) {
                return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
            },

            mobileCarousel(index) {
                let carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
                let slideWidth = document.querySelector(this.carouselItemClass).offsetWidth;
                let carouselWrapperPadding = +window.getComputedStyle(document.querySelector('.custom-carousel')).paddingLeft.replace('px', '');

                // for (let i = 0; i <  this.itemsLength; i++) {
                //     carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
                // } todo зачем?
                // carouselPaginatorWrapper.children[index].classList.add('custom-carousel__paginator-item--active');
                let endScrollPosition = parseInt(slideWidth * index + (20 * index + 30) - ((window.innerWidth - Math.round(slideWidth)) / 2) + carouselWrapperPadding);
                let cardGallery = this.$el;
                let currentScroll = cardGallery.scrollLeft;
                this.mobileSmoothScroll(currentScroll, endScrollPosition, cardGallery);
            },

            positionCarouselCards() {
                if (!this.mobileLayout) {
                    const items = this.getCarouselItems();
                    const removeClasses = (node) => {
                        node.classList.remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');
                        return node
                    };
                    removeClasses(items[(this.nextSlideIndex + 1) % this.itemsLength]).classList.add('carousel-card--next');
                    removeClasses(items[(this.nextSlideIndex + 2) % this.itemsLength]).classList.add('carousel-card--next-via-one');
                    removeClasses(items[(this.nextSlideIndex - 1 + this.itemsLength) % this.itemsLength]).classList.add('carousel-card--previous');
                    removeClasses(items[(this.nextSlideIndex - 2 + this.itemsLength) % this.itemsLength]).classList.add('carousel-card--previous-via-one');


                }
            },
            updateClasses() {
                document.querySelector('.carousel-card--next').classList.remove('carousel-card--next');
                document.querySelector('.carousel-card--previous').classList.remove('carousel-card--previous');
                document.querySelector('.carousel-card--next-via-one').classList.remove('carousel-card--next-via-one');
                document.querySelector('.carousel-card--previous-via-one').classList.remove('carousel-card--previous-via-one');
                this.getCarouselItems(this.activeSlideIndex).classList.remove('carousel-card--active');
                this.getCarouselItems(this.nextSlideIndex).classList.add('carousel-card--active');
            },

            nextSlide() {
                if (!this.mobileLayout) {
                    this.nextSlideIndex = (this.activeSlideIndex + 1) % this.itemsLength;
                    this.updateClasses();
                    this.positionCarouselCards();
                    this.activeSlideIndex = this.nextSlideIndex;
                }
            },

            previousSlide() {
                if (!this.mobileLayout) {
                    this.nextSlideIndex = ((this.activeSlideIndex - 1) + this.itemsLength) % this.itemsLength;
                    this.updateClasses();
                    this.positionCarouselCards()
                    this.activeSlideIndex = this.nextSlideIndex;
                }
            },

            mobileSwipe() {
                let carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
                let cardGallery = this.$el;
                let cardWidth = document.querySelector(this.carouselItemClass).offsetWidth;
                let activePaginatorButton;
                let carouselWrapperPadding = +window.getComputedStyle(document.querySelector('.custom-carousel')).paddingLeft.replace('px', '');
                let isScrolling;

                this.$el.addEventListener('scroll', () => {
                    window.clearTimeout(isScrolling);
                    isScrolling = setTimeout(() => {
                        let currentScroll = cardGallery.scrollLeft;
                        activePaginatorButton = Math.floor((currentScroll + (cardWidth / 2) + 20) / (cardWidth + 20));
                        let endScrollPosition = parseInt(cardWidth * activePaginatorButton + (20 * activePaginatorButton + 27) - ((window.innerWidth - Math.round(cardWidth)) / 2) + carouselWrapperPadding);
                        for (let i = 0; i < document.querySelectorAll(this.carouselItemClass).length; i++) {
                            carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
                        }
                        this.$refs.carousel.querySelector('.custom-carousel__paginator-item--active').classList.remove('custom-carousel__paginator-item--active');

                        carouselPaginatorWrapper.children[activePaginatorButton].classList.add('custom-carousel__paginator-item--active');
          //            this.mobileSmoothScroll(currentScroll, endScrollPosition, cardGallery);
                    }, 150);
                }, false);
            },
            mobileSmoothScroll(currentScroll, endScrollPosition, cardGallery) {

                if (currentScroll < (endScrollPosition - 1) || currentScroll > (endScrollPosition + 1)) {
                    if (currentScroll < endScrollPosition) {

                        let int = setInterval(function () {
                            if (currentScroll > (endScrollPosition - 20)) currentScroll += 1;
                            else if (currentScroll > (endScrollPosition - 40)) currentScroll += 3;
                            else if (currentScroll > (endScrollPosition - 80)) currentScroll += 8;
                            else if (currentScroll > (endScrollPosition - 160)) currentScroll += 18;
                            else if (currentScroll > (endScrollPosition - 200)) currentScroll += 24;
                            else if (currentScroll > (endScrollPosition - 300)) currentScroll += 40;
                            cardGallery.scrollTo(currentScroll, 0);
                            if (currentScroll >= endScrollPosition) clearInterval(int);
                        }, 5);
                    } else {
                        let int = setInterval(function () {
                            if (currentScroll < (endScrollPosition + 20)) currentScroll -= 1;
                            else if (currentScroll < (endScrollPosition + 40)) currentScroll -= 3;
                            else if (currentScroll < (endScrollPosition + 80)) currentScroll -= 8;
                            else if (currentScroll < (endScrollPosition + 160)) currentScroll -= 18;
                            else if (currentScroll < (endScrollPosition + 200)) currentScroll -= 24;
                            else if (currentScroll < (endScrollPosition + 300)) currentScroll -= 40;
                            cardGallery.scrollTo(currentScroll, 0);
                            if (currentScroll <= endScrollPosition) clearInterval(int);
                        }, 5);
                    }
                }
            }
        },
        render(h) {
            const leftArrow = (() => {
                return <div class="custom-carousel__nav-item custom-carousel__left" onClick={this.previousSlide}>
                    <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         class="custom-carousel__left-arrow">
                        <g id="Page-1" stroke-width="1">
                            <g transform="translate(-132.000000, -2341.000000)">
                                <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                                    <polygon id="Shape-Copy"
                                             points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            });

            const rightArrow = (() => {
                return <div class="custom-carousel__nav-item custom-carousel__right" onClick={this.nextSlide}>
                    <svg width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         class="custom-carousel__right-arrow">
                        <g id="Page-1" stroke-width="1">
                            <g transform="translate(-132.000000, -2341.000000)">
                                <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                                    <polygon id="Shape-Copy"
                                             points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            });
            const content = () => {
                if (this.mobileLayout) {
                    return <div class="custom-carousel" ref="carousel">
                            {this.$slots.default}
                            <div class="custom-carousel__nav">
                                < div class="custom-carousel__paginator"></div>
                            </div>
                        </div>
                } else {
                    return <div class="custom-carousel" ref="carousel">
                        {this.$slots.default}
                        <div class="custom-carousel__nav">
                            {leftArrow()}
                            {rightArrow()}
                            <div class="custom-carousel__paginator"></div>
                        </div>
                    </div>
                }
            }
            return <rt-resize-content-height query-selectors-names={this.resizeCardsClass}
                                             mobile-not-resize={!this.resizeCardsOnMobile}
                                             tablet-not-reasize={!this.resizeCardsOnTablet}
                                             desktop-not-reasize={!this.resizeCardsOnDesktop}
                                             class="custom-carousel-wrapper">
                {content()}
            </rt-resize-content-height>
        }
    }
</script>
