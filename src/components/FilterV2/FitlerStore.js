import Vue from "vue";

// import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";
import {StorePrototype} from "vue-rt-style-kit-atoms";

class FilterStore extends StorePrototype {
  constructor() {
    super();
    this.filterArray = []
    this.slots = {}
    this.watchers = {}
    this.slotsTags = {}
    this.activeTags = {}


    // this.lastWindowWidthOrient = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      let slots = {};
      if(this.activeTags[id].length > 0) {
        this.filterArray[id].forEach((slotId) => {
          const hasFound = this.slotsTags[id][slotId].findIndex((tag) => {
            return this.activeTags[id].indexOf(tag) >= 0
          })
          if (hasFound >= 0) {
            slots[slotId] = this.slots[id][slotId];
          } else {
            slots[slotId] = []
          }
        })
      }else{
        slots = this.slots[id]
      }
      return slots
    }
  }

  setSlot = (filterUid, slot, id, tags) => {
    let setActive = false
    if (!this.slots[filterUid]) {
      this.filterArray[filterUid] = [];
      this.slots[filterUid] = {};
      setActive = true;
    }
    let index = this.filterArray[filterUid].indexOf(id);

    if (index == -1) {
      this.slots[filterUid][id] = slot
      this.filterArray[filterUid].push(id)
      if (!this.slotsTags[filterUid]) {
        this.slotsTags[filterUid] = {}
      }
      this.slotsTags[filterUid][id] = tags
    }

  }
  removeSlot = (filterUid, id) => {
    delete this.slots[filterUid][id];
    this.runWatchersById(filterUid)
    const indexInArray = this.filterArray[filterUid].indexOf(id)
    if (indexInArray >= 0) {
      this.filterArray[filterUid].splice(indexInArray, 1)
    }
    if(this.slotsTags[filterUid][id]) {
     delete this.slotsTags[filterUid][id]
    }
  }
  getSlotSort = (filterUid) => {
    return this.filterArray[filterUid]
  }


  runWatcher = (filterUid) => {
    if (this.watchers) {
      if (!this.watchers[filterUid]) {
        this.watchers[filterUid] = true
        return true
      }
    }
    return false
  }
  stopWatcher = (filterUid) => {
    if (this.watchers) {
      if (this.watchers[filterUid]) {
        this.watchers[filterUid] = false
      }
    }
  }

  getActiveTags = (filterUid) => {
    if (!this.activeTags[filterUid]) {
      this.activeTags[filterUid] = []
    }
    return this.activeTags[filterUid]

  }

  removeActiveTags = (filterUid, tag) => {
    if (this.activeTags[filterUid]) {
      const index = this.activeTags[filterUid].indexOf(tag)
      this.activeTags[filterUid].splice(index, 1)
      this.runWatchersById(filterUid)
    }

  }

  setActiveTags = (filterUid, tag) => {
    if (!this.activeTags[filterUid]) {
      this.activeTags[filterUid] = []
    }
    const index = this.activeTags[filterUid].indexOf(tag)
    if (index < 0) {
      this.activeTags[filterUid].push(tag)
      this.runWatchersById(filterUid)
    }
  }
}

const filterStoreObject = new FilterStore();

export const filterStore = Vue.observable({
  setSlot: filterStoreObject.setSlot,
  getSlot: filterStoreObject.getSlot,
  getActiveTags: filterStoreObject.getActiveTags,
  removeActiveTags: filterStoreObject.removeActiveTags,
  setActiveTags: filterStoreObject.setActiveTags,
  removeSlots: filterStoreObject.removeSlots,
  getSlotSort: filterStoreObject.getSlotSort,
  getHeight: filterStoreObject.getHeight,
  removeWatcher: filterStoreObject.removeWatcher,
  addWatcher: filterStoreObject.addWatcher,
  runWatcher: filterStoreObject.runWatcher,
  stopWatcher: filterStoreObject.stopWatcher,
});
