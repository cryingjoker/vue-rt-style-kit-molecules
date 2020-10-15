import Vue from "vue";

// import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";
import {StorePrototype} from "vue-rt-style-kit-atoms";

class TabsSliderStore extends StorePrototype {
  constructor() {
    super();
    this.tabsArray = {}
    this.tabsHtmlMode = {}
    this.slots = {}
    this.tabsActiveIds = {}
    this.tabsBeforeActiveIds = {}
    this.watchers = {}
    this.afterRegisterFns = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }


  setSlot = (tabsUid, name, slot, id) => {

    let setActive = false
    if (Object.keys(this.slots[tabsUid]).length == 0) {
      setActive = true;
    }
    // if (!this.slots[tabsUid]) {
    //   this.tabsArray[tabsUid] = [];
    //   this.slots[tabsUid] = {};
    //   setActive = true;
    // }
    let index = this.tabsArray[tabsUid].indexOf(id);

    if (index == -1) {
      if (setActive) {
        this.setActiveId(tabsUid, id)
      }
      this.slots[tabsUid][id] = {}
      this.tabsArray[tabsUid].push(id)
    }
    this.slots[tabsUid][id][name] = slot;

  }
  removeSlots = (tabsUid, id) => {
    delete this.slots[tabsUid][id];
    this.runWatchersById(tabsUid)
    const indexInArray = this.tabsArray[tabsUid].indexOf(id)
    if (indexInArray >= 0) {
      this.tabsArray[tabsUid].splice(indexInArray, 1)
    }

    if (this.tabsActiveIds[tabsUid] == id) {
      this.tabsActiveIds[tabsUid] = null
    }
  }
  getSlotSort = (tabsUid) => {
    return this.tabsArray[tabsUid]
  }
  setActiveSlot = (tabsUid, id) => {
    this.tabsActiveIds[tabsUid] = id
    this.runWatchersById(tabsUid)
  }
  setActiveId = (tabsUid, id) => {
    if (this.tabsActiveIds[tabsUid] != id) {
      if (!this.tabsActiveIds[tabsUid]) {
        this.tabsActiveIds[tabsUid] = id
        this.runWatchersById(tabsUid)

      } else {
        if (!this.tabsBeforeActiveIds[tabsUid]) {
          this.tabsBeforeActiveIds[tabsUid] = this.tabsActiveIds[tabsUid]
          this.tabsActiveIds[tabsUid] = id
          this.runWatchersById(tabsUid)
          setTimeout(() => {
            delete this.tabsBeforeActiveIds[tabsUid]
            this.runWatchersById(tabsUid)
          }, 1000)
        }
      }
    }
  }
  getActiveId = (tabsUid) => {
    const data = {
      activeId: this.tabsActiveIds[tabsUid],
      beforeActiveId: this.tabsBeforeActiveIds[tabsUid]
    }
    // if(this.slots[tabsUid] && this.slots[tabsUid][data.activeId]) {
    //   data.activeColor = this.slots[tabsUid][data.activeId].background
    // }
    return data;
  }

  runWatcher = (tabsUid) => {
    if (this.watchers) {
      if (!this.watchers[tabsUid]) {
        this.watchers[tabsUid] = true
        return true
      }
    }
    return false
  }
  stopWatcher = (tabsUid) => {
    if (this.watchers) {
      if (this.watchers[tabsUid]) {
        this.watchers[tabsUid] = false
      }
    }
  }
  register = (tabsUid, htmlMode) => {
    return new Promise((resolve, reject) => {
      this.tabsHtmlMode[tabsUid] = htmlMode;
      this.tabsArray[tabsUid] = [];
      this.slots[tabsUid] = [];
      this.runAfterFunctions(tabsUid)
      resolve(htmlMode)
    })
  }
  runAfterFunctions = (tabsUid) => {
    if (this.afterRegisterFns[tabsUid]) {
      this.afterRegisterFns[tabsUid].forEach((fn) => {
        fn.call()
      })
      delete this.afterRegisterFns[tabsUid]
    }
  }
  runAfterInit = (tabsUid, fn) => {
    if (this.slots[tabsUid]) {
      fn.call();
    } else {
      if (!this.afterRegisterFns[tabsUid]) {
        this.afterRegisterFns[tabsUid] = []
      }
      this.afterRegisterFns[tabsUid].push(fn);
    }
  }
  checkHtmlMode = (tabsUid) => {
    return this.tabsHtmlMode[tabsUid]
  }
}

const tabsStoreObject = new TabsSliderStore();

export const tabsSliderStore = Vue.observable({
  setSlot: tabsStoreObject.setSlot,
  getSlot: tabsStoreObject.getSlot,
  removeSlots: tabsStoreObject.removeSlots,
  getSlotSort: tabsStoreObject.getSlotSort,
  removeWatcher: tabsStoreObject.removeWatcher,
  addWatcher: tabsStoreObject.addWatcher,
  setActiveId: tabsStoreObject.setActiveId,
  setActiveSlot: tabsStoreObject.setActiveSlot,
  getActiveId: tabsStoreObject.getActiveId,
  runWatcher: tabsStoreObject.runWatcher,
  stopWatcher: tabsStoreObject.stopWatcher,
  register: tabsStoreObject.register,
  checkHtmlMode: tabsStoreObject.checkHtmlMode,
  runAfterInit: tabsStoreObject.runAfterInit
});
