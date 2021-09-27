import Vue from "vue";
import "./css/vue-rt-style-kit-molecules.styl";
import Global from "./variables.json";
import Project from "@projectMolecules";

import {
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  TabsSlider,
  TabsSliderItem,
  ResizeTypeStore
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

      Vue.component(TabsSlider.name, TabsSlider);
      Vue.component(TabsSliderItem.name, TabsSliderItem);
      Vue.component(Table.name, Table);
      Vue.component(TableCol.name, TableCol);
      Vue.component(TableHeadItem.name, TableHeadItem);
      Vue.component(TableItem.name, TableItem);
      Vue.component(TableRow.name, TableRow);

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
const version = "2021-09-22 23:46";
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
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  TabsSlider,
  TabsSliderItem,
  // need to change name directives
  SwipeLeft,
  SwipeRight,
  ResizeContentHeightDirective,
  PopupTriggerDirective,
  OutsideClickDirective,
  ResizeTypeStore,
  GaClickDirective
}
