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
  Youtube,
  Sticky,
  StickyBottomLine,
  ResizeContentHeight,
  Popup,
  LinksBlock,
  Hint,
  HintBody,
  BannerVideoGameControl,
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
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
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
  FunctionItem
} from "./components";

import {SwipeLeft, SwipeRight} from "./directives/Swipe/swipe";
import {ResizeContentHeightDirective} from "./directives/ResizeContentHeight";
import {OutsideClickDirective} from "./directives/OutsideClick/OutsideClick";
import {SlideContentVerticalDirective} from "./directives/SlideContent/SlideContentVertical";
import {ScrollToOnClickDirective} from "./directives/ScrollToOnClick/ScrollToOnClick";
// import 'element-closest-polyfill';
// import 'nodelist-foreach-polyfill';
// import 'element-remove';

const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyle) {


      Vue.component(ScrollTabs.name, ScrollTabs);
      Vue.component(Card.name, Card);
      Vue.component(CardBuy.name, CardBuy);
      Vue.component(CardImage.name, CardImage);
      Vue.component(CardImageList.name, CardImageList);
      Vue.component(Banner.name, Banner);
      Vue.component(BannerItem.name, BannerItem);
      Vue.component(BannerPaginatorItem.name, BannerPaginatorItem);
      Vue.component(BannerVideoGameControl.name, BannerVideoGameControl);
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
      Vue.component(OptionsList.name, OptionsList);
      Vue.component(OptionsListInfoItem.name, OptionsListInfoItem);
      Vue.component(FilterCaller.name, FilterCaller);
      Vue.component(Sticky.name, Sticky);
      Vue.component(StickyBottomLine.name, StickyBottomLine);
      Vue.component(ResizeContentHeight.name, ResizeContentHeight);
      Vue.component(Youtube.name, Youtube);
      Vue.component(Popup.name, Popup);
      Vue.component(LinksBlock.name, LinksBlock);
      Vue.component(Hint.name, Hint);
      Vue.component(HintBody.name, HintBody);
      Vue.component(GameArrow.name, GameArrow);
      Vue.component(Swiper.name, Swiper);
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


      Vue.component(Tabs.name, Tabs);
      Vue.component(CheckboxTabs.name, CheckboxTabs);
      Vue.component(TabsContentItem.name, TabsContentItem);
      Vue.component(TabsNavigationItem.name, TabsNavigationItem);
      Vue.component(GalleryCarousel.name, GalleryCarousel);
      Vue.component(GalleryCarouselItem.name, GalleryCarouselItem);
      Vue.component(ProductCard.name, ProductCard);
      Vue.component(TariffCard.name, TariffCard);
      Vue.component(SlideContent.name, SlideContent);
      Vue.component(SlideContentDottedContent.name, SlideContentDottedContent);
      Vue.component(SlideContentDottedHeader.name, SlideContentDottedHeader);
      Vue.component(FunctionItem.name, FunctionItem);
      Vue.component(FunctionList.name, FunctionList);
      Vue.directive(SwipeLeft.name, SwipeLeft);
      Vue.directive(SwipeRight.name, SwipeRight);

      Vue.directive(ResizeContentHeightDirective.name, ResizeContentHeightDirective);


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
VueRtStyle.directives = {SwipeLeft, SwipeRight, OutsideClickDirective};

// if(localStorage && localStorage.getItem('dev_Zmode')){
//   localStorage.setItem('dev_mode__version',version);
// }

/**
 * Глобальные настройки библиотеки
 * -Для добавления своих настроек, создайте объект
 * с названием из Global.globalSettingsKey и положите перед подключением либы
 */
const settingsKey = Global.globalSettingsKey;
const version = Project.version;
if (typeof window !== 'undefined') {
  
  if (settingsKey) {
    if (!window[settingsKey]) window[settingsKey] = {}
    if (!window[settingsKey].segment) window[settingsKey].segment = Global.defaultSegment
    window[settingsKey].version = version;
  }

// @Deprecated
  window.RTK_STYLE_KIT_MOLECULES_VER = version;
  window.addEventListener('getVueRtStyleVersion', function () {
    window.postMessage({from: "vue-rt-style-kit", type: "setVersion", label: "molecules", version: version}, "*");
  })
}
VueRtStyle.version = version;

export default VueRtStyle;
export {
  ScrollTabs,
  Banner,
  BannerItem,
  BannerPaginatorItem,
  Carousel,
  CarouselSlide,
  Card,
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
  Youtube,
  Sticky,
  StickyBottomLine,
  ResizeContentHeight,
  Popup,
  LinksBlock,
  Hint,
  BannerVideoGameControl,
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
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
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

  // need to change name dirrectives
  SwipeLeft,
  SwipeRight,
  OutsideClickDirective,
  ResizeTypeStore
}
