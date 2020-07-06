import Vue from "vue";
//
// const optionsListArray = [];
// const optionsListStatuses = {};
// let hasHash = false;
// const setOptionsListArray = (id, hash = '', needSave = false, closeOther = false) => {
//
//   if (optionsListArray.indexOf(id) < 0) {
//     optionsListArray.push(optionsListArray);
//     optionsListStatuses[id] = {
//       isActive: false,
//       watchers: [],
//       hash: hash,
//       needSave: needSave,
//       closeOther: closeOther
//     };
//     if (hash && hash.length > 0) {
//       if(!hasHash) {
//         hasHash = true;
//       }
//     }
//
//   }
// };
//
//
// const addWatcher = (id, fn) => {
//   optionsListStatuses[id].watchers.push(fn);
//   const needSave = optionsListStatuses[id].needSave
//   if (needSave) {
//     getLocalStatus(id);
//   }
//   if(optionsListStatuses[id].hash){
//     if(optionsListStatuses[id].hash === document.location.hash.replace('#','')){
//       optionsListStatuses[id].isActive = true;
//       runWatcher(id);
//     }
//   }
// };
//
// const runWatcher = (id) => {
//
//   const watchers = optionsListStatuses[id].watchers;
//   for (let wKey in watchers) {
//     watchers[wKey]();
//   }
// };
//
// const saveToLocalStorage = (id, status) => {
//
//   let rtSettings = localStorage.getItem("rt-settings");
//   if(!rtSettings){
//     rtSettings = {}
//   }else {
//     rtSettings = JSON.parse(rtSettings);
//   }
//   if (!rtSettings.optionContent) {
//     rtSettings.optionContent = {};
//   }
//   rtSettings.optionContent[id] = status;
//   localStorage.setItem("rt-settings", JSON.stringify( rtSettings));
// };
//
// const getLocalStatus = (id) => {
//
//   let rtSettings = localStorage.getItem("rt-settings");
//   if (rtSettings) {
//     rtSettings = JSON.parse(rtSettings);
//     if (rtSettings.optionContent) {
//       if (rtSettings.optionContent[id]) {
//         optionsListStatuses[id].isActive = rtSettings.optionContent[id];
//         runWatcher(id);
//       }
//     }
//   }
// };
//
// const changeStatus = (id) => {
//   const closeOther = optionsListStatuses[id].closeOther;
//   const needSave = optionsListStatuses[id].needSave;
//
//   optionsListStatuses[id].isActive = !optionsListStatuses[id].isActive;
//
//   if (needSave) {
//     saveToLocalStorage(id, optionsListStatuses[id].isActive);
//   }
//   if (hasHash) {
//     if (optionsListStatuses[id].hash) {
//       document.location.hash = optionsListStatuses[id].hash;
//     } else {
//       history.pushState("", document.title, window.location.pathname + window.location.search);
//     }
//   }
//   if(closeOther && optionsListStatuses[id].isActive){
//     const keys = Object.keys(optionsListStatuses);
//     for(let indexKey in keys){
//       if(keys[indexKey] !== id && optionsListStatuses[keys[indexKey]] && optionsListStatuses[keys[indexKey]].isActive) {
//         optionsListStatuses[keys[indexKey]].isActive = false;
//         if(optionsListStatuses[keys[indexKey]].needSave){
//           saveToLocalStorage(keys[indexKey], optionsListStatuses[keys[indexKey]].isActive);
//         }
//         runWatcher(keys[indexKey]);
//       }
//     }
//   }
//   runWatcher(id);
// };
//
// const getOptionStatus = (id) => {
//
//   return optionsListStatuses[id];
// };
//
// export const optionsListStore = Vue.observable({
//
//   addInListArray: setOptionsListArray,
//   getStatus: getOptionStatus,
//   changeStatus: changeStatus,
//   addWatcher: addWatcher
//
// });


import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";

class SliderStore extends StorePrototype{
  constructor() {
    super();
    this.slidesArray = {}
    this.slots = {}
  }
  getSlot = (id) => {
    console.info('getSlot',id)
    if (this.slots[id]) {
      return this.slots[id]
    }
  }
  setSlot = (sliderUid, name, slot,id) => {
    if(!this.slots[sliderUid]){
      this.slidesArray[sliderUid] = [];
      this.slots[sliderUid] = {};
    }
    let index = this.slidesArray[sliderUid].indexOf(id);
    if(index == -1){
      index = this.slots[sliderUid]?.length || 0
      if(index < 5) {
        this.slots[sliderUid][id] = {}
        this.slidesArray[sliderUid].push(id)
      }
    }
    if(index < 5) {
      this.slots[sliderUid][id][name] = slot;
    }
  }
  getSlotSort= (sliderUid)=>{
    return this.slidesArray[sliderUid]
  }
}
const sliderStoreObject = new SliderStore();

export const sliderStore = Vue.observable({
  setSlot: sliderStoreObject.setSlot,
  getSlot: sliderStoreObject.getSlot,
  getSlotSort: sliderStoreObject.getSlotSort,
  removeWatcher: sliderStoreObject.removeWatcher,
  addWatcher: sliderStoreObject.addWatcher,
});
