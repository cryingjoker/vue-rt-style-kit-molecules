import Vue from "vue";

const setActiveTabName = (tabsName, tabAnchore = '', index) => {
  if (!tabsStore.tabsNames) {
    tabsStore.tabsNames = []
  }
  if (tabsStore.tabsNames[tabsName]) {
    const parentId = tabsStore.tabsNames[tabsName];

    const parentArray = tabsStore.tabsParents[parentId];
    for (let key in parentArray) {
      if (typeof parentArray[key] === 'object') {
        parentArray[key].isActive = false;
      }
    }
    parentArray[tabsName].isActive = true;
    parentArray.indexBefore = parentArray.index
    if(typeof parentArray.indexBefore != 'number'){
      parentArray.indexBefore = 0
    }
    parentArray.index = index;
    runWatchers(parentId);
  }
  // Определение Internet Explorer. нужно т.к. в нем не работет resize
  const browserName = navigator.userAgent.toLowerCase(),
    isIE = (/trident/gi).test(browserName) || (/msie/gi).test(browserName);

    if (!isIE) {
      window.dispatchEvent(new Event("resize"));
    } else {

      let resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent['initUIEvent']('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }

  if (tabAnchore && tabAnchore.length > 0) {
    window.history.replaceState(undefined, undefined, "#" + tabAnchore);
  }

};
const runWatchers = (wrapperUid) => {
  tabsStore.watcherFunction[wrapperUid].forEach((fn)=>{fn()})
}
const getActiveIndexes = (parentId)=>{
  const parentArray = tabsStore.tabsParents[parentId]
  return {index: parentArray.index, indexBefore: parentArray.indexBefore}
}
const addTabUuid = (tabsContainerId, tabsName) => {

  if (!tabsStore.tabsParents[tabsContainerId]) {
    tabsStore.tabsParents[tabsContainerId] = {};
    if (tabsStore.tabsParents[tabsContainerId][tabsName]) {
      console.error('tabs name must be unique')
    } else {
      tabsStore.tabsParents[tabsContainerId][tabsName] = {isActive: true};
    }
  } else {
    tabsStore.tabsParents[tabsContainerId][tabsName] = {isActive: false};
  }
  tabsStore.tabsNames[tabsName] = tabsContainerId;
  runWatchers(tabsContainerId);
};
const getActiveTabs = (parentUid)=>{
  return tabsStore.tabsParents[parentUid]
}
const addWatcher = (parentUid,fn) => {
  if(!tabsStore.watcherFunction[parentUid]){
    tabsStore.watcherFunction[parentUid] = []
  }
  tabsStore.watcherFunction[parentUid].push(fn);
};
const setTabWidth = (parentUiid, width) => {
  if (!tabsStore.tabsParents[parentUiid]) {
    tabsStore.tabsParents[parentUiid] = {}
  }
  if (!tabsStore.tabsParents[parentUiid].width) {
    tabsStore.tabsParents[parentUiid].width = width;
    tabsStore.tabsParents[parentUiid].lastUpdateTime = (new Date()).getTime();
  } else {
    if (tabsStore.tabsParents[parentUiid].width < width) {
      tabsStore.tabsParents[parentUiid].width = width;
      tabsStore.tabsParents[parentUiid].lastUpdateTime = (new Date()).getTime();
      tabsStore.tabsParents[parentUiid].centerText = true;
    }
  }
  setTimeout(() => {
    checkMaxWidth(parentUiid);
  }, 400)
  // runWatchers();
}
const checkMaxWidth = (parentUiid) => {
  const time = (new Date()).getTime();
  if (time - tabsStore.tabsParents[parentUiid].lastUpdateTime >= 400) {
    tabsStore.tabsParents[parentUiid].lastUpdateTime = (new Date()).getTime();
    runWatchers(parentUiid);
  }
}
const setGlobalAnalyticsSegment = (segment) => {
  tabsStore.globalAnalyticsSegment = segment;
}
export const tabsStore = Vue.observable({
  setActiveTabName: setActiveTabName,
  addTabUuid: addTabUuid,
  tabsParents: {},
  tabsNames: {},
  addWatcher: addWatcher,
  watcherFunction: {},
  getActiveIndexes:getActiveIndexes,
  setTabWidth: setTabWidth,
  getActiveTabs:getActiveTabs,
  globalAnalyticsSegment: '',
  setGlobalAnalyticsSegment: setGlobalAnalyticsSegment,

});
