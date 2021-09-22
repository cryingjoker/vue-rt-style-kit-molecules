import Vue from "vue";
import "./css/vue-rt-style-kit-molecules.styl";
import Global from "./variables.json";
import Project from "@projectMolecules";

import {
  Filter,
  FilterWatcher,
  FilterCaller,
  FilterV2,
  FilterItemV2,
  FilterSetterV2,
  LinksBlock,
  FunctionList,
  FunctionItem,
  InlineDropdown,
  InlineDropdownItem,
  Pattern,

  ScrollTabs,
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  Tag,
  TagsList,
  Youtube,
  Sticky,
  StickyBottomLine,
  ResizeContentHeight,
  Popup,
  SlideContent,
  SlideContentDottedContent,
  SlideContentDottedHeader,
  Slide,
  Swiper,
  RealPopup,
  TabsSlider,
  TabsSliderItem,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  StickyHeaderLine,
  ResizeTypeStore,
  Slider,
  SliderItem,
  ShowOn,
  Privilege,
  TextImageBlock,
  VideoBanner
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

      Vue.component(ScrollTabs.name, ScrollTabs);
      Vue.component(Table.name, Table);
      Vue.component(TableCol.name, TableCol);
      Vue.component(TableHeadItem.name, TableHeadItem);
      Vue.component(TableItem.name, TableItem);
      Vue.component(TableRow.name, TableRow);
      Vue.component(InlineDropdown.name, InlineDropdown);
      Vue.component(InlineDropdownItem.name, InlineDropdownItem);
      Vue.component(Tag.name, Tag);
      Vue.component(TagsList.name, TagsList);
      Vue.component(Filter.name, Filter);
      Vue.component(FilterWatcher.name, FilterWatcher);
      Vue.component(FilterV2.name, FilterV2);
      Vue.component(FilterItemV2.name, FilterItemV2);
      Vue.component(FilterSetterV2.name, FilterSetterV2);
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
      Vue.component(RealPopup.name, RealPopup);
      Vue.component(ScrollBar.name, ScrollBar);
      Vue.component(VerticalScrollBar.name, VerticalScrollBar);
      Vue.component(ReplacementLink.name, ReplacementLink);
      Vue.component(StickyHeaderLine.name, StickyHeaderLine);

      Vue.component(Tabs.name, Tabs);
      Vue.component(TabsSlider.name, TabsSlider);
      Vue.component(TabsSliderItem.name, TabsSliderItem);
      Vue.component(TabsContentItem.name, TabsContentItem);
      Vue.component(TabsNavigationItem.name, TabsNavigationItem);
      Vue.component(Slider.name, Slider);
      Vue.component(SliderItem.name, SliderItem);
      Vue.component(SlideContent.name, SlideContent);
      Vue.component(SlideContentDottedContent.name, SlideContentDottedContent);
      Vue.component(SlideContentDottedHeader.name, SlideContentDottedHeader);
      Vue.component(FunctionItem.name, FunctionItem);
      Vue.component(FunctionList.name, FunctionList);
      Vue.component(Privilege.name, Privilege);
      Vue.component(Minibanner.name, Minibanner);
      Vue.component(TextImageBlock.name, TextImageBlock);

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
const version = "2021-09-21 12:04";
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
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  InlineDropdown,
  InlineDropdownItem,
  Tag,
  TagsList,
  Filter,
  FilterCaller,
  FilterWatcher,
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
  RealPopup,
  TabsSlider,
  TabsSliderItem,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  ShowOn,
  StickyHeaderLine,
  Slider,
  SliderItem,
  // need to change name directives
  SwipeLeft,
  SwipeRight,
  ResizeContentHeightDirective,
  PopupTriggerDirective,
  OutsideClickDirective,
  ResizeTypeStore,
  GaClickDirective,
  CommentSlider,
  CommentSliderItem,
  VideoBanner,
  CarouselV3,
  CarouselV3Item,
  Privilege,
  Minibanner,
  ResizeContentHeightDirective
}
