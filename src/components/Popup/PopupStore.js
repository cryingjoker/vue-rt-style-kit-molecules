import Vue from "vue";

import { StorePrototype } from 'vue-rt-style-kit-atoms/src/stores/storePrototype.class.js'
import variables from "../../variables.json";

class PopupStore extends StorePrototype {
  constructor() {
    super();
    this.popupArray = []
    this.popupActiveId = null
    this.watchers = {}
    this.ga = {}
    this.gaClose = {}
  }


  setSlot = (popupUid, fn, ga,gaClose) => {
    let index = this.popupArray.indexOf(popupUid);
    if (index == -1) {
      if(this.popupArray.length == 0){
        this.bindWindowEvent()
      }
      this.popupArray.push(popupUid)
      this.ga[popupUid] = ga
      this.gaClose[popupUid] = gaClose
      this.addWatcher(popupUid, fn)
    }
  }
  removeSlots = (popupUid) => {
    this.runWatchersById(popupUid)
    const indexInArray = this.popupArray.indexOf(popupUid)
    if (indexInArray >= 0) {
      this.popupArray.splice(indexInArray, 1)
      delete this.ga[popupUid]
      delete this.gaClose[popupUid]
    }
    if(this.popupArray.length == 0){
      this.unbindWindowEvent()
    }
    if (this.bannerActiveId == popupUid) {
      this.bannerActiveId = null
    }
  }
  closeAll = ()=>{
    this.setActiveId(null)
  }
  bindWindowEvent = ()=>{
    if(window){
      window.addEventListener('closeAllPopup', this.closeAll)
    }
  }
  unbindWindowEvent = ()=>{
    if(window){
      window.removeEventListener('closeAllPopup', this.closeAll)
    }
  }
  fireGa = (popupUid) => {
    if (popupUid in this.ga) {
      const data = {
        ...{
          event: window[variables.globalSettingsKey].segment,
          type: 'popup_interaction'
        }, ...this.ga[popupUid]
      }
      if (!window.dataLayer) window.dataLayer = []
      window.dataLayer.push(data)
    }
  }
  fireGaClose = (popupUid) => {
    if (popupUid in this.gaClose) {
      const data = {
        ...{
          event: window[variables.globalSettingsKey].segment,
          type: 'popup_interaction'
        }, ...this.gaClose[popupUid]
      }
      if (!window.dataLayer) window.dataLayer = []
      window.dataLayer.push(data)
    }
  }

  setActiveId = (popupUid) => {
    const popupActiveIdBefore = this.popupActiveId
    if(popupActiveIdBefore){
      this.fireGaClose(popupActiveIdBefore)
    }
    this.popupActiveId = popupUid
    if (popupActiveIdBefore) {
      this.runWatchersById(popupActiveIdBefore)
    }
    this.runWatchersById(this.popupActiveId)
    this.fireGa(popupUid)
  }

  toggleActiveId = (popupUid) => {
    const popupActiveIdBefore = this.popupActiveId
    if(popupActiveIdBefore){
      this.fireGaClose(popupActiveIdBefore)
    }
    this.popupActiveId = popupUid
    if (popupActiveIdBefore) {
      this.runWatchersById(popupActiveIdBefore)
    }
    this.runWatchersById(this.popupActiveId)
    this.fireGa(popupUid)
  }


  getActiveId = () => {
    const data = {
      activeId: this.popupActiveId,
    }

    return data;
  }

}

const popupStoreObject = new PopupStore();

export const popupStore = Vue.observable({

  setSlot: popupStoreObject.setSlot,
  getSlot: popupStoreObject.getSlot,
  removeSlots: popupStoreObject.removeSlots,
  removeWatcher: popupStoreObject.removeWatcher,
  addWatcher: popupStoreObject.addWatcher,
  setActiveId: popupStoreObject.setActiveId,
  getActiveId: popupStoreObject.getActiveId,
});
