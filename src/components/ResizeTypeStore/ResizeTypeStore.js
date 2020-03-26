import Vue from "vue";
import debounce from "debounce";
let resizeComponentsIdsArray = [];
const resizeComponentsWatchers = {};
import variables from "../../variables.json";
let eventResizeIsWatched = false;
let deviceWidthType = '';

const detectDeviceWidthType = () =>{
  const width = window.innerWidth;
  const mobileUpperLimit = parseInt(variables["mobile-upper-limit"]);
  const tabletUpperLimit = parseInt(variables["tablet-upper-limit"]);

  let localDeviceWidthType = '';
  switch (true) {
    case(width <= mobileUpperLimit):
      localDeviceWidthType = 'mobile';
      break

    case(width <= tabletUpperLimit):
      localDeviceWidthType = 'tablet';
      break
    default:
      localDeviceWidthType = 'desktop';
  }
  if(localDeviceWidthType !== deviceWidthType ) {
    deviceWidthType = localDeviceWidthType;
    runAllWatchers()
  }
};

const startWatchers = ()=>{
  if(!eventResizeIsWatched) {
    detectDeviceWidthType();
    window.addEventListener("resize", debounce(detectDeviceWidthType, 1));
    eventResizeIsWatched = true;
  }
};


const removeWatchers = (id) =>{
  delete resizeComponentsWatchers[id];
  const index = resizeComponentsIdsArray.indexOf(id);
  resizeComponentsIdsArray.splice(index,1)
};

const addWatcher = (id, fn)=>{
  startWatchers();
  if(!resizeComponentsWatchers[id]){
    resizeComponentsWatchers[id] = {
      watchers: []
    }
  }
  resizeComponentsWatchers[id].watchers.push(fn)
};

const runAllWatchers = () => {
  resizeComponentsIdsArray.forEach((id)=>{
    runWatchers(id)
  });
};

const runWatchers = (id) => {
  const watchers = resizeComponentsWatchers[id].watchers;
  for (let wKey in watchers) {
    watchers[wKey]();
  }
};


const getDeviceType = () => {
  return deviceWidthType;
};

export const ResizeTypeStore = Vue.observable({

  addWatcher: addWatcher,
  getDeviceType: getDeviceType,
  removeWatchers: removeWatchers,

});
