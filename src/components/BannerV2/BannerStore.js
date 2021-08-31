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
    this.watchers = {}
    this.lastWindowWidth = {}
    // this.lastWindowWidthOrient = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }
  clearHeight = (bannerUid)=> {
    this.height[bannerUid] = 0
  }
  setHeight = (bannerUid, height) => {
    const width = window.innerWidth;
    const slots = this.getSlot(bannerUid)
    if(Object.keys(slots).length == 1){
      this.height[bannerUid] = height

    }else {
      if (!this.lastWindowWidth[bannerUid]) {
        this.lastWindowWidth[bannerUid] = width
      }
      if(this.lastWindowWidth[bannerUid] > width){
        this.height[bannerUid] = null;
      }

      if (typeof this.height[bannerUid] != 'number') {
        this.height[bannerUid] = height
      }
      //

        if (this.height[bannerUid] < height) {
          this.height[bannerUid] = height;
        }


      this.lastWindowWidth[bannerUid] = width
    }
    this.runWatchersById(bannerUid)

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
  removeSlots = (bannerUid, id)=>{
    delete this.slots[bannerUid][id];
    this.runWatchersById(bannerUid)
    const indexInArray = this.bannersArray[bannerUid].indexOf(id)
    if(indexInArray >= 0){
      this.bannersArray[bannerUid].splice(indexInArray,1)
    }

    if(this.bannerActiveIds[bannerUid] == id){
      this.bannerActiveIds[bannerUid] = null
    }
  }
  getSlotSort = (bannerUid) => {
    return this.bannersArray[bannerUid]
  }
  setActiveSlot = (bannerUid, id) =>{
    this.bannerActiveIds[bannerUid] =   id
  }
  setActiveId = (bannerUid, id, isInit) => {

    if (!this.bannerNextActiveIds[bannerUid] && !isInit || isInit && !this.bannerActiveIds[bannerUid]) {
      this.bannerNextActiveIds[bannerUid] = id;
      if (this.bannersArray[bannerUid].indexOf(id) >= 0 && this.bannerActiveIds[bannerUid] != id) {
        this.nextOrientation[bannerUid] = this.bannersArray[bannerUid].indexOf(this.bannerActiveIds[bannerUid]) < this.bannersArray[bannerUid].indexOf(id) ? 1 : -1
      }
      this.runWatchersById(bannerUid)

      setTimeout(() => {
        this.bannerActiveIds[bannerUid] = id
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
    if(this.slots[bannerUid] && this.slots[bannerUid][data.activeId]) {
      data.activeColor = this.slots[bannerUid][data.activeId].background
    }
    return data;
  }

  runWatcher = (bannerUid) => {
    if(this.watchers) {
      if (!this.watchers[bannerUid]) {
        this.watchers[bannerUid] = true
        return true
      }
    }
    return false
  }
  stopWatcher = (bannerUid) => {
    if(this.watchers) {
      if (this.watchers[bannerUid]) {
        this.watchers[bannerUid] = false
      }
    }
  }
}

const bannerStoreObject = new BannerStore();

export const bannerStore = Vue.observable({

  setSlot: bannerStoreObject.setSlot,
  getSlot: bannerStoreObject.getSlot,
  removeSlots: bannerStoreObject.removeSlots,
  getSlotSort: bannerStoreObject.getSlotSort,
  removeWatcher: bannerStoreObject.removeWatcher,
  addWatcher: bannerStoreObject.addWatcher,
  setActiveId: bannerStoreObject.setActiveId,
  setActiveSlot: bannerStoreObject.setActiveSlot,
  getActiveId: bannerStoreObject.getActiveId,
  setHeight: bannerStoreObject.setHeight,
  getHeight: bannerStoreObject.getHeight,
  runWatcher: bannerStoreObject.runWatcher,
  stopWatcher: bannerStoreObject.stopWatcher,
  clearHeight: bannerStoreObject.clearHeight
});
