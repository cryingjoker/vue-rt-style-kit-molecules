/**
 * Данный список компонентов подключается динамически на страницу
 * @see RTRU-11155
 * @info использовать через Vue.component(cmpDecorator, cmp), без use метода
 */
// Список директив
import { GaClickDirective } from './directives/GaClick'
import { OutsideClickDirective } from './directives/OutsideClick/OutsideClick'
import { PopupTriggerDirective } from './components/Popup/PopupTrigger'
import { ResizeContentHeightDirective } from './directives/ResizeContentHeight'
import { ScrollToOnClickDirective } from './directives/ScrollToOnClick/ScrollToOnClick'
import { SlideContentVerticalDirective } from './directives/SlideContent/SlideContentVertical'
import { SwipeLeft, SwipeRight } from './directives/Swipe/swipe'
import { TooltipDirective } from './directives/Tooltip/tooltip'
 
export const directives = {
  GaClickDirective,
  OutsideClickDirective,
  PopupTriggerDirective,
  ResizeContentHeightDirective,
  ScrollToOnClickDirective,
  SlideContentVerticalDirective,
  SwipeLeft,
  SwipeRight,
  TooltipDirective,
}

/**
 * Позволяет подключать компоненты и добавлять дополнительные обработчики
 * @param {*} cmpDecorator - Название кастомного тэга для инициализации компонента
 * @param {*} file - Путь к загружаемому компоненту
 */
const load = (cmpDecorator, fileLocation) => {
  return {
    [cmpDecorator]: () => import(`./components/${fileLocation}`)
      // .then(cmp => { // @TODO Custom-events
      //   console.log('Hello there!', cmp)
      //   return cmp
      // })
      .catch(e => console.error('-->>', e))
  }
}

export default { // Сортировака по принадлежности, как в pages
  // Main

  // Form
  ...load('RtTag', 'Tag/Tag.vue'),
  ...load('RtTagsList', 'Tag/TagsList.vue'),

  // Group
  ...load('RtArrowBlock', 'ArrowBlock/ArrowBlock.vue'),
  ...load('RtBenefitBlock', 'BenefitBlock/BenefitBlock.vue'),
  ...load('RtBenefitItem', 'BenefitBlock/BenefitItem.vue'),
  ...load('RtCarousel', 'Carousel/Carousel.vue'),
  ...load('RtCarouselSlide', 'Carousel/CarouselSlide.vue'),
  ...load('RtCarouselV2', 'CarouselV2/Carousel.vue'),
  ...load('RtCarouselSlideV2', 'CarouselV2/CarouselSlide.vue'),
  ...load('RtCarouselV3', 'CarouselV3/CarouselV3.vue'),
  ...load('RtCarouselSlideV3', 'CarouselV3/CarouselV3Item.vue'),
  ...load('RtPrivilege', 'Privilege/Privilege.vue'),
  ...load('RtTabs', 'Tabs/Tabs.vue'),
  ...load('RtTabsContentItem', 'Tabs/TabsContentItem.vue'),
  ...load('RtTabsNavItem', 'Tabs/TabsNavigationItem.vue'),
  ...load('RtMicrotabs', 'Microtabs/Microtabs.vue'),
  ...load('RtMicrotabsCnt', 'Microtabs/MicrotabsContent.vue'),
  ...load('RtMicrotabsNav', 'Microtabs/MicrotabsNavigation.vue'),
  ...load('RtOptionsList', 'OptionsList/OptionsList.vue'),
  ...load('RtOptionsListInfoItem', 'OptionsList/OptionsListInfoItem.vue'),
  ...load('RtPrivilege', 'Privilege/Privilege.vue'),
  ...load('RtRowList', 'RowList/RowList.vue'),
  ...load('RtRowListItem', 'RowList/RowListItem.vue'),
  ...load('RtScrollTabs', 'ScrollTabs/ScrollTabs.vue'),
  ...load('RtTabs', 'Tabs/Tabs.vue'),
  ...load('RtTabsNavItem', 'Tabs/TabsNavigationItem.vue'),
  ...load('RtTabsContentItem', 'Tabs/TabsContentItem.vue'),

  // Simple
  ...load('RtPopover', 'Popover/Popover.vue'),
  ...load('RtUseCase', 'Card/UseCase/UseCase.vue'),
  ...load('RtCheckboxTabs', 'CheckboxTabs/CheckboxTabs.vue'), // @TODO move to Form group
  ...load('RtCountdownTimer', 'CountdownTimer/CountdownTimer.vue'), // @TODO create demo
  ...load('RtDownloadContent', 'DownloadContent/DownloadContent.vue'),
  ...load('RtHelpBlock', 'HelpBlock/HelpBlock.vue'),
  ...load('RtMessageBox', 'MessageBox/MessageBox.vue'),
  ...load('RtPattern', 'Pattern/Pattern.vue'), // @TODO - del him!
  ...load('RtPopup', 'Popup/Popup.vue'),
  ...load('RtRealPopup', 'Popup/RealPopup.vue'),
  ...load('RtSlideContent', 'SlideContent/SlideContent.vue'),
  ...load('RtSlideContentDottedContent', 'SlideContent/SlideContentDottedContent.vue'),
  ...load('RtSlideContentDottedHeader', 'SlideContent/SlideContentDottedHeader.vue'),
  ...load('RtSticky', 'Sticky/Sticky.vue'),
  ...load('RtStickyBottomLine', 'StickyBottomLine/StickyBottomLine.vue'),
  ...load('RtStickyHeaderLine', 'StickyHeaderLine/StickyHeaderLine.vue'),

  // Complex
  ...load('RtBanner', 'Banner/Banner.vue'),
  ...load('RtBannerItem', 'Banner/BannerItem.vue'),
  ...load('RtBannerPaginatorItem', 'Banner/BannerPaginatorItem.vue'),
  ...load('RtBannerV2', 'BannerV2/Banner.vue'),
  ...load('RtBannerItemV2', 'BannerV2/BannerItem.vue'),
  ...load('RtBannerSkeleton', 'BannerV2/BannerSkeleton.vue'),
  ...load('RtCard', 'Card/Card/Card.vue'),
  ...load('RtCardB2o', 'Card/CardB2o/CardB2o.vue'),
  ...load('RtCardBanner', 'Card/CardBanner/CardBanner.vue'),
  ...load('RtCardTileLayout', 'Card/CardBanner/CardTileLayout.vue'),
  ...load('RtCardCarousel', 'Card/CardCarousel/CardCarousel.vue'),
  ...load('RtCardHelp', 'Card/CardHelp/CardHelp.vue'),
  ...load('RtCardImage', 'Card/CardImage/CardImage.vue'),
  ...load('RtCardRounded', 'Card/CardRounded/CardRounded.vue'),
  ...load('RtCardSkeleton', 'Card/CardSkeleton/CardSkeleton.vue'),
  ...load('LinksBlock', 'Card/Card/LinksBlock.vue'),
  ...load('RtCommentSlider', 'CommentSlider/CommentSlider.vue'),
  ...load('RtCommentSliderItem', 'CommentSlider/CommentSliderItem.vue'),
  ...load('RtFilter', 'Filter/Filter.vue'),
  ...load('RtFilterCaller', 'Filter/FilterCaller.vue'),
  ...load('RtFilterWatcher', 'Filter/FilterWatcher.vue'),
  ...load('RtFilterN', 'FilterV2/Filter.vue'),
  ...load('RtFilterNItem', 'FilterV2/FilterItem.vue'),
  ...load('RtFilterNSetter', 'FilterV2/FilterSetter.vue'),
  ...load('RtJumbotron', 'Jumbotron/Jumbotron.vue'),
  ...load('RtMinibanner', 'Minibanner/Minibanner.vue'),
  ...load('RtPhoneNumberInput', 'PhoneNumberInput/PhoneNumberInput.vue'),
  ...load('RtPreviewBanner', 'PreviewBanner/PreviewBanner.vue'),
  ...load('RtProductCard', 'ProductCard/ProductCard.vue'),
  ...load('RtResizeContentHeight', 'ResizeContentHeight/ResizeContentHeight.vue'),
  ...load('RtSlider', 'Slider/Slider.vue'),
  ...load('RtSliderItem', 'Slider/SliderItem.vue'),
  ...load('RtSwiper', 'Swiper/Swiper.vue'),
  ...load('RtSlide', 'Swiper/Slide.vue'),
  ...load('RtTabsSlider', 'TabsSlider/TabsSlider.vue'),
  ...load('RtTabsSliderItem', 'TabsSlider/TabsSliderItem.vue'),
  ...load('RtTextImageBlock', 'TextImageBlock/TextImageBlock.vue'),
  ...load('RtVideoBanner', 'VideoBanner/VideoBanner.vue'),
  ...load('RtYoutube', 'Youtube/Youtube.vue'),

  // Other
  ...load('RtShowOn', 'ShowOn/ShowOn.vue'),
  ...load('RtUnWrapper', 'MobileExpandWrapper/UnWrapper.vue'), // @TODO - del him!
}
