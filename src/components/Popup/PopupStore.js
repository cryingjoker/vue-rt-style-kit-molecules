import Vue from "vue";

import {StorePrototype} from "vue-rt-style-kit-atoms";
import variables from "../../variables.json";

class PopupStore extends StorePrototype {
  constructor() {
    super();
    this.popupArray = []
    this.popupActiveId = null
    this.watchers = {}
    this.ga = {}
  }


  setSlot = (popupUid, fn, ga) => {
    let index = this.popupArray.indexOf(popupUid);
    if (index == -1) {
      this.popupArray.push(popupUid)
      this.ga[popupUid] = ga
      this.addWatcher(popupUid, fn)
    }
  }
  removeSlots = (popupUid) => {
    this.runWatchersById(popupUid)
    const indexInArray = this.popupArray.indexOf(popupUid)
    if (indexInArray >= 0) {
      this.popupArray.splice(indexInArray, 1)
      delete this.ga[popupUid]
    }
    if (this.bannerActiveId == popupUid) {
      this.bannerActiveId = null
    }
  }

  fireGa = (popupUid) => {
    console.info(popupUid , this.ga)
    if (popupUid in this.ga) {
      const data = {
        ...{
          event: window[variables.globalSettingsKey].segment,
        }, ...this.ga[popupUid]
      }
      if (!window.dataLayer) window.dataLayer = []
      window.dataLayer.push(data)
    }
  }

  setActiveId = (popupUid) => {
    const popupActiveIdBefore = this.popupActiveId
    this.popupActiveId = popupUid
    if (popupActiveIdBefore) {
      this.runWatchersById(popupActiveIdBefore)
    }
    this.runWatchersById(this.popupActiveId)
    this.fireGa(popupUid)
  }

  toggleActiveId = (popupUid) => {
    const popupActiveIdBefore = this.popupActiveId
    this.popupActiveId = popupUid
    if (popupActiveIdBefore) {
      this.runWatchersById(popupActiveIdBefore)
    }
    this.runWatchersById(this.popupActiveId)
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
