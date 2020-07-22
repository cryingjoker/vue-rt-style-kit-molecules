import Vue from "vue";

// import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";
import {StorePrototype} from "vue-rt-style-kit-atoms";

class BannerStore extends StorePrototype {
  constructor() {
    super();
    this.slidesArray = {}
    this.slots = {}
    this.slidesActiveIndex = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }

  setSlot = (sliderUid, name, slot, id) => {
    if (!this.slots[sliderUid]) {
      this.slidesArray[sliderUid] = [];
      this.slots[sliderUid] = {};
    }
    let index = this.slidesArray[sliderUid].indexOf(id);
    if (index == -1) {
      index = this.slots[sliderUid]?.length || 0
      if (index < 5) {
        this.slots[sliderUid][id] = {}
        this.slidesArray[sliderUid].push(id)
      }
    }
    if (index < 5) {
      this.slots[sliderUid][id][name] = slot;
    }
  }
  getSlotSort = (sliderUid) => {
    return this.slidesArray[sliderUid]
  }
  setActiveIndex = (sliderUid, index) => {
    this.slidesActiveIndex[sliderUid] = index
    this.runWatchersById(sliderUid)
  }
  getActiveIndex = (sliderUid)=>{
    return this.slidesActiveIndex[sliderUid]
  }
}

const bannerStoreObject = new BannerStore();

export const bannerStore = Vue.observable({
  setSlot: bannerStoreObject.setSlot,
  getSlot: bannerStoreObject.getSlot,
  getSlotSort: bannerStoreObject.getSlotSort,
  removeWatcher: bannerStoreObject.removeWatcher,
  addWatcher: bannerStoreObject.addWatcher,
  setActiveIndex: bannerStoreObject.setActiveIndex,
  getActiveIndex:bannerStoreObject.getActiveIndex
});
