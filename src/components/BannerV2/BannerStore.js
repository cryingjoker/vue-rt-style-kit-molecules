import Vue from "vue";

// import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";
import {StorePrototype} from "vue-rt-style-kit-atoms";

class BannerStore extends StorePrototype {
  constructor() {
    super();
    this.bannersArray = {}
    this.slots = {}
    this.bannerActiveIds = {}
    this.nextOrientation = {}
    this.bannerNextActiveIds = {}
    this.height = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }
  setHeight = (bannerUid, height) => {
    if (!this.height[bannerUid]) {
      this.height[bannerUid] = height
    }
    if (this.height[bannerUid] < height) {
      this.height[bannerUid] = height;
    }
  }
  getHeight = (bannerUid) => {
    return this.height[bannerUid]
  }
  setSlot = (bannerUid, name, slot, id) => {
    let setActive = false
    if (!this.slots[bannerUid]) {
      this.bannersArray[bannerUid] = [];
      this.slots[bannerUid] = {};
      setActive = true;
    }
    let index = this.bannersArray[bannerUid].indexOf(id);

    if (index == -1) {
      if (setActive) {
        this.setActiveId(bannerUid, id)
      }
      this.slots[bannerUid][id] = {}
      this.bannersArray[bannerUid].push(id)
    }
    this.slots[bannerUid][id][name] = slot;

  }
  getSlotSort = (bannerUid) => {
    return this.bannersArray[bannerUid]
  }
  setActiveId = (bannerUid, id) => {
    if (!this.bannerNextActiveIds[bannerUid]) {

      this.bannerNextActiveIds[bannerUid] = id;
      if (this.bannersArray[bannerUid].indexOf(id) >= 0 && this.bannerActiveIds[bannerUid] != id) {
        this.nextOrientation[bannerUid] = this.bannersArray[bannerUid].indexOf(this.bannerActiveIds[bannerUid]) < this.bannersArray[bannerUid].indexOf(id) ? 1 : -1
      }
      this.runWatchersById(bannerUid)
      this.bannerActiveIds[bannerUid] = id
      setTimeout(() => {
        delete this.bannerNextActiveIds[bannerUid]
        delete this.nextOrientation[bannerUid]
        this.runWatchersById(bannerUid)
      }, 500)

    }
  }
  getActiveId = (bannerUid) => {
    const data = {
      activeId: this.bannerActiveIds[bannerUid],
      nextActiveId: this.bannerNextActiveIds[bannerUid],
      nextOrientation: this.nextOrientation[bannerUid],
    }
    data.activeColor = this.slots[bannerUid][data.activeId].background
    return data;
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
  getActiveId: bannerStoreObject.getActiveId,
  setHeight: bannerStoreObject.setHeight,
  getHeight: bannerStoreObject.getHeight
});
