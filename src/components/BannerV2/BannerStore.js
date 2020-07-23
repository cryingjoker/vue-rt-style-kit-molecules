import Vue from "vue";

// import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";
import {StorePrototype} from "vue-rt-style-kit-atoms";

class BannerStore extends StorePrototype {
  constructor() {
    super();
    this.bannersArray = {}
    this.slots = {}
    this.bannerActiveIds = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }

  setSlot = (sliderUid, name, slot, id) => {
    let setActive = false
    if (!this.slots[sliderUid]) {
      this.bannersArray[sliderUid] = [];
      this.slots[sliderUid] = {};
      setActive = true;
    }
    let index = this.bannersArray[sliderUid].indexOf(id);

    if (index == -1) {
      if (setActive) {
        this.setActiveId(sliderUid, id)
      }
      index = this.slots[sliderUid]?.length || 0
      // if (index < 5) {
      this.slots[sliderUid][id] = {}
      this.bannersArray[sliderUid].push(id)
      // }
    }

    // if (index < 5) {
    this.slots[sliderUid][id][name] = slot;
    // }
    console.info('!!!  this.bannersArray', this.slots)
  }
  getSlotSort = (sliderUid) => {
    return this.bannersArray[sliderUid]
  }
  setActiveId = (sliderUid, id) => {
    this.bannerActiveIds[sliderUid] = id
    this.runWatchersById(sliderUid)
  }
  getActiveId = (sliderUid) => {
    return this.bannerActiveIds[sliderUid]
  }
}

const bannerStoreObject = new BannerStore();

export const bannerStore = Vue.observable({
  setSlot: bannerStoreObject.setSlot,
  getSlot: bannerStoreObject.getSlot,
  getSlotSort: bannerStoreObject.getSlotSort,
  removeWatcher: bannerStoreObject.removeWatcher,
  addWatcher: bannerStoreObject.addWatcher,
  setActiveId: bannerStoreObject.setActiveId,
  getActiveId: bannerStoreObject.getActiveId
});
