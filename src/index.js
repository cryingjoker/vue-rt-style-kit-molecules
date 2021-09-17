import Vue from "vue";
import "./css/vue-rt-style-kit-molecules.styl";
import Global from "./variables.json";
import Project from "@projectMolecules";

import {
  ScrollTabs,
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
  LinksBlock, //delete?
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
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  GalleryCarousel,
  GalleryCarouselItem,
  OptionsList,
  OptionsListInfoItem,
  CheckboxTabs,
  StickyHeaderLine,
  ResizeTypeStore,
  FunctionList,
  FunctionItem,
  Slider,
  SliderItem,
  HelpBlock,
  Jumbotron,
  MessageBox,
  ShowOn,
  CommentSlider,
  CommentSliderItem,
  Privilege
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
      Vue.component(Swiper.name, Swiper);
      Vue.component(ShowOn.name, ShowOn);
      Vue.component(Slide.name, Slide);
      Vue.component(Pattern.name, Pattern);
      Vue.component(Opportunity.name, Opportunity);
      Vue.component(OpportunityItem.name, OpportunityItem);
      Vue.component(UnWrapper.name, UnWrapper);
      Vue.component(RealPopup.name, RealPopup);
      Vue.component(ScrollBar.name, ScrollBar);
      Vue.component(HelpBlock.name, HelpBlock);
      Vue.component(VerticalScrollBar.name, VerticalScrollBar);
      Vue.component(ReplacementLink.name, ReplacementLink);
      Vue.component(StickyHeaderLine.name, StickyHeaderLine);

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
      Vue.component(Slider.name, Slider);
      Vue.component(SliderItem.name, SliderItem);
      Vue.component(SlideContent.name, SlideContent);
      Vue.component(SlideContentDottedContent.name, SlideContentDottedContent);
      Vue.component(SlideContentDottedHeader.name, SlideContentDottedHeader);
      Vue.component(FunctionItem.name, FunctionItem);
      Vue.component(FunctionList.name, FunctionList);
      Vue.component(Jumbotron.name, Jumbotron);
      Vue.component(MessageBox.name, MessageBox);
      Vue.component(Privilege.name, Privilege);

      Vue.directive(SwipeLeft.name, SwipeLeft);
      Vue.directive(SwipeRight.name, SwipeRight);
      Vue.directive(ResizeContentHeightDirective.name, ResizeContentHeightDirective);
      Vue.directive(TooltipDirective.name, TooltipDirective);
      Vue.directive(GaClickDirective.name, GaClickDirective);
      Vue.directive(PopupTriggerDirective.name, PopupTriggerDirective);
      Vue.directive(OutsideClickDirective.name, OutsideClickDirective);
      Vue.directive(SlideContentVerticalDirective.name, SlideContentVerticalDirective);
      Vue.directive(ScrollToOnClickDirective.name, ScrollToOnClickDirective);

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
const version = "2021-09-17 10:46";
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
  HelpBlock,
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
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  GalleryCarousel,
  GalleryCarouselItem,
  OptionsList,
  ShowOn,
  OptionsListInfoItem,
  CheckboxTabs,
  StickyHeaderLine,
  Slider,
  SliderItem,
  Jumbotron,
  MessageBox,
  // need to change name directives
  SwipeLeft,
  SwipeRight,
  PopupTriggerDirective,
  OutsideClickDirective,
  ResizeTypeStore,
  GaClickDirective,
  CommentSlider,
  CommentSliderItem,
  Privilege
}
