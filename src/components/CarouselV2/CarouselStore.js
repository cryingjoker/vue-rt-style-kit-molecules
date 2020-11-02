import Vue from "vue";

import {StorePrototype} from "vue-rt-style-kit-atoms";

class CarouselStore extends StorePrototype {
  constructor() {
    super();
    this.slidesArray = {}
    this.slidesHtmlMode = {}
    this.slots = {}
    this.watchers = {}
    this.afterRegisterFns = {}
    this.timeouts = {}
    this.settings = {}
  }
  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }
  setSlot = (carouselId, slot, id) => {
    if (!this.slots[carouselId][id]) {
      this.slots[carouselId][id] = {}
    } else {
      let index = this.slidesArray[carouselId].indexOf(id);
      if (index == -1) {
        if (!this.slots[carouselId][id]) {
          this.slots[carouselId][id] = {}
        }
        this.slidesArray[carouselId].push(id)
      }
    }
    this.slots[carouselId][id] = slot;
    // console.log(this.slots)
    // console.log(this.slidesArray)
  }
  removeSlots = (slidesUid, id) => {
    if(this.slots[slidesUid] && this.slots[slidesUid][id]) {
      delete this.slots[slidesUid][id];
    }
    const indexInArray = this.slidesArray[slidesUid].indexOf(id)
    if (indexInArray >= 0) {
      this.slidesArray[slidesUid].splice(indexInArray, 1)
    }
    if (this.slidesActiveIds[slidesUid] == id) {
      this.slidesActiveIds[slidesUid] = null
      if(this.slidesArray[slidesUid].length > 0) {
        this.slidesActiveIds[slidesUid] = this.slidesArray[slidesUid][0]
      }
    }
    this.runWatchersById(slidesUid)
  }
  getSlotSort = (carouselId) => {
    return this.slidesArray[carouselId]
  }
  runWatcher = (slidesUid) => {
    if (this.watchers) {
      if (!this.watchers[slidesUid]) {
        this.watchers[slidesUid] = true
        return true
      }
    }
    return false
  }
  stopWatcher = (slidesUid) => {
    if (this.watchers) {
      if (this.watchers[slidesUid]) {
        this.watchers[slidesUid] = false
      }
    }
  }
  register = (carouselId, htmlMode) => {
    return new Promise((resolve, reject) => {

      this.slidesHtmlMode[carouselId] = htmlMode;
      if (!this.slidesArray[carouselId]) {
        this.slidesArray[carouselId] = [];
      }
      if (!this.slots[carouselId]) {
        this.slots[carouselId] = {};
      }
      this.runAfterFunctions(carouselId)
      resolve(htmlMode)
    })
  }
  runAfterFunctions = (carouselId) => {
    if (this.afterRegisterFns[carouselId]) {
      this.afterRegisterFns[carouselId].forEach((fn) => {
        fn.call()
      })
      delete this.afterRegisterFns[carouselId]
    }
  }
  runAfterInit = (carouselId, fn, reversePush = false) => {
    if (this.slots[carouselId]) {
      fn.call();
    } else {
      if (!this.afterRegisterFns[carouselId]) {
        this.afterRegisterFns[carouselId] = []
      }
      this.afterRegisterFns[carouselId].push(fn);
    }
  }
  checkHtmlMode = (slidesUid) => {
    return this.slidesHtmlMode[slidesUid]
  }
}

const carouselStoreObject = new CarouselStore();

export const carouselStore = Vue.observable({
  setSlot: carouselStoreObject.setSlot,
  getSlot: carouselStoreObject.getSlot,
  removeSlots: carouselStoreObject.removeSlots,
  getSlotSort: carouselStoreObject.getSlotSort,
  removeWatcher: carouselStoreObject.removeWatcher,
  addWatcher: carouselStoreObject.addWatcher,
  runWatcher: carouselStoreObject.runWatcher,
  stopWatcher: carouselStoreObject.stopWatcher,
  register: carouselStoreObject.register,
  checkHtmlMode: carouselStoreObject.checkHtmlMode,
  runAfterInit: carouselStoreObject.runAfterInit,
  runWatchersById: carouselStoreObject.runWatchersById,
});
