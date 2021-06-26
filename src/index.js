import Vue from "vue";
import "./css/vue-rt-style-kit-molecules.styl";
import Global from "./variables.json";
import Project from "@projectMolecules";

import {
  ScrollTabs,
  Banner,
  BannerItem,
  BannerPaginatorItem,
  Carousel,
  CarouselSlide,
  Card,
  CardRounded,
  CardB2o,
  CardBuy,
  CardImage,
  CardImageList,
  CardSkeleton,
  FullscreenImage,
  RowList,
  RowListItem,
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  DownloadContent,
  InlineDropdown,
  InlineDropdownItem,
  Tag,
  TagsList,
  Filter,
  FilterWatcher,
  FilterCaller,
  FilterV2,
  FilterItemV2,
  FilterSetterV2,
  Youtube,
  Sticky,
  StickyBottomLine,
  ResizeContentHeight,
  Popup,
  LinksBlock,
  SlideContent,
  SlideContentDottedContent,
  SlideContentDottedHeader,
  Slide,
  Swiper,
  Pattern,
  Opportunity,
  OpportunityItem,
  UnWrapper,
  RealPopup,
  TabsSlider,
  TabsSliderItem,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  Microtabs,
  MicrotabsContent,
  MicrotabsNavigation,
  UseCase,
  ProductCard,
  TariffCard,
  BenefitItem,
  BenefitBlock,
  PortraitTile,
  PortraitTileItem,
  Timeline,
  TimelineItem,
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  CardCarousel,
  CardLayout,
  GalleryCarousel,
  GalleryCarouselItem,
  OptionsList,
  OptionsListInfoItem,
  GameArrow,
  CheckboxTabs,
  CountdownTimer,
  StickyHeaderLine,
  ResizeTypeStore,
  FunctionList,
  FunctionItem,
  HeaderAdvertisementBlock,
  HeaderNavigation,
  Slider,
  SliderItem,
  TextImageBlock,
  HelpBlock,
  BannerV2,
  BannerItemV2,
  BannerSkeleton,
  PhoneNumberInput,
  Jumbotron,
  CarouselV2,
  CarouselSlideV2,
  AdBanner,
  MessageBox,
  PreviewBanner,
  ArrowBlock,
  ShowOn,
  CardHelp,
  CardBanner,
  CardTileLayout,
  Popover,
  CommentSlider,
  CommentSliderItem,
  VideoBanner,
  CarouselV3,
  CarouselV3Item
} from "./components";
import {PopupTriggerDirective} from './components/Popup/PopupTrigger';
import {SwipeLeft, SwipeRight} from "./directives/Swipe/swipe";
import {TooltipDirective} from "./directives/Tooltip/tooltip";
import {ResizeContentHeightDirective} from "./directives/ResizeContentHeight";
import {OutsideClickDirective} from "./directives/OutsideClick/OutsideClick";
import {SlideContentVerticalDirective} from "./directives/SlideContent/SlideContentVertical";
import {ScrollToOnClickDirective} from "./directives/ScrollToOnClick/ScrollToOnClick";
import {GaClickDirective} from "./directives/GaClick";
// import 'element-closest-polyfill';
// import 'nodelist-foreach-polyfill';
// import 'element-remove';

const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyle) {

      Vue.component(CommentSlider.name, CommentSlider);
      Vue.component(CommentSliderItem.name, CommentSliderItem);
      Vue.component(ScrollTabs.name, ScrollTabs);
      Vue.component(Card.name, Card);
      Vue.component(CardRounded.name, CardRounded);
      Vue.component(CardBuy.name, CardBuy);
      Vue.component(CardImage.name, CardImage);
      Vue.component(CardImageList.name, CardImageList);
      Vue.component(Popover.name, Popover);
      Vue.component(Banner.name, Banner);
      Vue.component(BannerV2.name, BannerV2);
      Vue.component(BannerSkeleton.name, BannerSkeleton);
      Vue.component(BannerItemV2.name, BannerItemV2);
      Vue.component(BannerItem.name, BannerItem);
      Vue.component(BannerPaginatorItem.name, BannerPaginatorItem);
      Vue.component(FullscreenImage.name, FullscreenImage);
      Vue.component(RowList.name, RowList);
      Vue.component(RowListItem.name, RowListItem);
      Vue.component(Table.name, Table);
      Vue.component(TableCol.name, TableCol);
      Vue.component(TableHeadItem.name, TableHeadItem);
      Vue.component(TableItem.name, TableItem);
      Vue.component(TableRow.name, TableRow);
      Vue.component(DownloadContent.name, DownloadContent);
      Vue.component(InlineDropdown.name, InlineDropdown);
      Vue.component(InlineDropdownItem.name, InlineDropdownItem);
      Vue.component(Tag.name, Tag);
      Vue.component(TagsList.name, TagsList);
      Vue.component(Filter.name, Filter);
      Vue.component(FilterWatcher.name, FilterWatcher);
      Vue.component(FilterV2.name, FilterV2);
      Vue.component(FilterItemV2.name, FilterItemV2);
      Vue.component(FilterSetterV2.name, FilterSetterV2);
      Vue.component(OptionsList.name, OptionsList);
      Vue.component(OptionsListInfoItem.name, OptionsListInfoItem);
      Vue.component(FilterCaller.name, FilterCaller);
      Vue.component(Sticky.name, Sticky);
      Vue.component(StickyBottomLine.name, StickyBottomLine);
      Vue.component(ResizeContentHeight.name, ResizeContentHeight);
      Vue.component(Youtube.name, Youtube);
      Vue.component(Popup.name, Popup);

      Vue.component(LinksBlock.name, LinksBlock);
      Vue.component(GameArrow.name, GameArrow);
      Vue.component(Swiper.name, Swiper);
      Vue.component(ShowOn.name, ShowOn);
      Vue.component(Slide.name, Slide);
      Vue.component(Pattern.name, Pattern);
      Vue.component(Opportunity.name, Opportunity);
      Vue.component(OpportunityItem.name, OpportunityItem);
      Vue.component(UnWrapper.name, UnWrapper);
      Vue.component(RealPopup.name, RealPopup);
      Vue.component(UseCase.name, UseCase);
      Vue.component(BenefitBlock.name, BenefitBlock);
      Vue.component(BenefitItem.name, BenefitItem);
      Vue.component(PortraitTile.name, PortraitTile);
      Vue.component(PortraitTileItem.name, PortraitTileItem);
      Vue.component(Timeline.name, Timeline);
      Vue.component(TimelineItem.name, TimelineItem);
      Vue.component(ScrollBar.name, ScrollBar);
      Vue.component(HelpBlock.name, HelpBlock);
      Vue.component(VerticalScrollBar.name, VerticalScrollBar);
      Vue.component(ReplacementLink.name, ReplacementLink);
      Vue.component(Carousel.name, Carousel);
      Vue.component(CarouselSlide.name, CarouselSlide);
      Vue.component(CardCarousel.name, CardCarousel);
      Vue.component(CardB2o.name, CardB2o);
      Vue.component(CardLayout.name, CardLayout);
      Vue.component(CardSkeleton.name, CardSkeleton);
      Vue.component(CountdownTimer.name, CountdownTimer);
      Vue.component(StickyHeaderLine.name, StickyHeaderLine);
      Vue.component(HeaderAdvertisementBlock.name, HeaderAdvertisementBlock);
      Vue.component(HeaderNavigation.name, HeaderNavigation);
      Vue.component(TextImageBlock.name, TextImageBlock);
      Vue.component(PhoneNumberInput.name, PhoneNumberInput);
      Vue.component(CarouselV2.name, CarouselV2);
      Vue.component(CarouselSlideV2.name, CarouselSlideV2);

      Vue.component(Tabs.name, Tabs);
      Vue.component(TabsSlider.name, TabsSlider);
      Vue.component(TabsSliderItem.name, TabsSliderItem);
      Vue.component(CheckboxTabs.name, CheckboxTabs);
      Vue.component(TabsContentItem.name, TabsContentItem);
      Vue.component(TabsNavigationItem.name, TabsNavigationItem);
      Vue.component(Microtabs.name, Microtabs)
      Vue.component(MicrotabsContent.name, MicrotabsContent)
      Vue.component(MicrotabsNavigation.name, MicrotabsNavigation)
      Vue.component(GalleryCarousel.name, GalleryCarousel);
      Vue.component(GalleryCarouselItem.name, GalleryCarouselItem);
      Vue.component(ProductCard.name, ProductCard);
      Vue.component(TariffCard.name, TariffCard);
      Vue.component(Slider.name, Slider);
      Vue.component(SliderItem.name, SliderItem);
      Vue.component(SlideContent.name, SlideContent);
      Vue.component(SlideContentDottedContent.name, SlideContentDottedContent);
      Vue.component(SlideContentDottedHeader.name, SlideContentDottedHeader);
      Vue.component(FunctionItem.name, FunctionItem);
      Vue.component(FunctionList.name, FunctionList);
      Vue.component(Jumbotron.name, Jumbotron);
      Vue.component(AdBanner.name, AdBanner);
      Vue.component(PreviewBanner.name, PreviewBanner);
      Vue.component(ArrowBlock.name, ArrowBlock);
      Vue.component(MessageBox.name, MessageBox);
      Vue.component(CardHelp.name, CardHelp);
      Vue.component(CardBanner.name, CardBanner);
      Vue.component(CardTileLayout.name, CardTileLayout);
      Vue.component(VideoBanner.name, VideoBanner);

      Vue.component(CarouselV3.name, CarouselV3);
      Vue.component(CarouselV3Item.name, CarouselV3Item);
      Vue.directive(SwipeLeft.name, SwipeLeft);
      Vue.directive(SwipeRight.name, SwipeRight);

      Vue.directive(ResizeContentHeightDirective.name, ResizeContentHeightDirective);
      Vue.directive(TooltipDirective.name, TooltipDirective);
      Vue.directive(GaClickDirective.name, GaClickDirective);


      Vue.directive(PopupTriggerDirective.name, PopupTriggerDirective);
      Vue.directive(OutsideClickDirective.name, OutsideClickDirective);
      Vue.directive(
        SlideContentVerticalDirective.name,
        SlideContentVerticalDirective
      );
      Vue.directive(
        ScrollToOnClickDirective.name,
        ScrollToOnClickDirective
      );

      Vue.RtStyle = true;
      Vue.config.test = true;
    }
  }
};
// VueRtStyle.directives = { SwipeLeft, SwipeRight, OutsideClickDirective, FilterCallerDirective};

// if(localStorage && localStorage.getItem('dev_Zmode')){
//   localStorage.setItem('dev_mode__version',version);
// }

/**
 * Глобальные настройки библиотеки
 * -Для добавления своих настроек, создайте объект
 * с названием из Global.globalSettingsKey и положите перед подключением либы
 */
const settingsKey = Global.globalSettingsKey;
const version = "2021-06-26 12:25";
if (typeof window !== 'undefined') {

  if (settingsKey) {
    if (!window[settingsKey]) window[settingsKey] = {}
    if (!window[settingsKey].segment) window[settingsKey].segment = Global.defaultSegment
    window[settingsKey].version = version;
  }

// @Deprecated
  window.RTK_STYLE_KIT_MOLECULES_VER = version;
  if(window && window.addEventListener) {
    window.addEventListener('getVueRtStyleVersion', function () {
      window.postMessage({from: "vue-rt-style-kit", type: "setVersion", label: "molecules", version: version}, "*");
    })
  }
}

VueRtStyle.version = version;

export default VueRtStyle;
export {
  ScrollTabs,
  Banner,
  BannerItem,
  BannerPaginatorItem,
  BannerSkeleton,
  Carousel,
  CarouselSlide,
  Card,
  CardRounded,
  CardB2o,
  CardBuy,
  CardImage,
  CardImageList,
  CardSkeleton,
  FullscreenImage,
  RowList,
  HelpBlock,
  RowListItem,
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  DownloadContent,
  InlineDropdown,
  InlineDropdownItem,
  Tag,
  TagsList,
  Filter,
  FilterWatcher,
  FilterCaller,
  FilterV2,
  FilterItemV2,
  FilterSetterV2,
  Youtube,
  Sticky,
  StickyBottomLine,
  ResizeContentHeight,
  Popup,
  Popover,
  LinksBlock,
  SlideContent,
  SlideContentDottedContent,
  SlideContentDottedHeader,
  Slide,
  Swiper,
  Pattern,
  Opportunity,
  OpportunityItem,
  UnWrapper,
  RealPopup,
  TabsSlider,
  TabsSliderItem,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  Microtabs,
  MicrotabsContent,
  MicrotabsNavigation,
  UseCase,
  ProductCard,
  TariffCard,
  BenefitItem,
  BenefitBlock,
  PortraitTile,
  PortraitTileItem,
  Timeline,
  TimelineItem,
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  CardCarousel,
  CardLayout,
  GalleryCarousel,
  GalleryCarouselItem,
  OptionsList,
  ShowOn,
  OptionsListInfoItem,
  GameArrow,
  CheckboxTabs,
  CountdownTimer,
  StickyHeaderLine,
  HeaderAdvertisementBlock,
  HeaderNavigation,
  Slider,
  SliderItem,
  TextImageBlock,
  BannerV2,
  BannerItemV2,
  PhoneNumberInput,
  Jumbotron,
  CarouselV2,
  CarouselSlideV2,
  AdBanner,
  MessageBox,
  PreviewBanner,
  ArrowBlock,
  CardHelp,
  CardBanner,
  CardTileLayout,
  // need to change name directives
  SwipeLeft,
  SwipeRight,
  PopupTriggerDirective,
  OutsideClickDirective,
  ResizeTypeStore,
  GaClickDirective,
  CommentSlider,
  CommentSliderItem,
  VideoBanner,
  CarouselV3,
  CarouselV3Item
}
