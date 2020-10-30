import Vue from "vue";

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
    this.timeouts = {}
    this.settings = {}
  }

  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }

  setSettings = (tabsUid, name, option) => {
    this.settings[tabsUid][name] = option
    this.runWatchersById(tabsUid)
  }

  getSettings = (tabsUid, name = null) => {
    if(!this.settings[tabsUid])
      return null
    if (name) {
      return this.settings[tabsUid][name]
    }
    return this.settings[tabsUid]
  }

  setSlot = (tabsUid, name, slot, id) => {
    let setActive = false
    if (id == 'settings' && !this.slots[tabsUid][id]) {
      this.slots[tabsUid][id] = {}
    } else {
      const slotsSize = Object.keys(this.slots[tabsUid]).length;
      if (slotsSize == 0) {
        setActive = true;
      }

      let index = this.tabsArray[tabsUid].indexOf(id);
      if (index == -1) {
        if (setActive) {
          this.setActiveId(tabsUid, id)
        }
        if (!this.slots[tabsUid][id]) {
          this.slots[tabsUid][id] = {}
        }
        this.tabsArray[tabsUid].push(id)
      }
    }
    this.slots[tabsUid][id][name] = slot;

  }
  removeSlots = (tabsUid, id) => {
    if(this.slots[tabsUid] && this.slots[tabsUid][id]) {
      delete this.slots[tabsUid][id];
    }

    const indexInArray = this.tabsArray[tabsUid].indexOf(id)

    if (indexInArray >= 0) {
      this.tabsArray[tabsUid].splice(indexInArray, 1)
    }

    if (this.tabsActiveIds[tabsUid] == id) {
      this.tabsActiveIds[tabsUid] = null
      if(this.tabsArray[tabsUid].length > 0) {
        this.tabsActiveIds[tabsUid] = this.tabsArray[tabsUid][0]
      }
    }
    this.runWatchersById(tabsUid)
  }
  getSlotSort = (tabsUid) => {
    return this.tabsArray[tabsUid]
  }
  setActiveSlot = (tabsUid, id) => {
    this.tabsActiveIds[tabsUid] = id
    this.runWatchersById(tabsUid)
  }
  getIndex = (tabsUid, id)=>{
    return this.tabsArray[tabsUid].indexOf(id)
  }
  setIndex = (tabsUid, id,index)=>{
    const arrayIDs = this.tabsArray[tabsUid];
    const indexId = this.tabsArray[tabsUid].indexOf(id);
    const arraySize = arrayIDs.length;
    if(arraySize-1 < index){
      arrayIDs.concat(new Array(arraySize-1 < index).map(i=>null))
    }
    if(indexId >= 0 ){
      this.tabsArray[tabsUid].splice(indexId, 1)
    }
    arrayIDs.splice( index, 0, id );
    this.runWatchersById(tabsUid)
  }
  setActiveId = (tabsUid, id) => {
    if (!this.timeouts[tabsUid]) {
      if (this.tabsActiveIds[tabsUid] != id) {
        if (!this.tabsActiveIds[tabsUid]) {

          this.tabsActiveIds[tabsUid] = id
          this.runWatchersById(tabsUid)
        } else {
          if (this.timeouts[tabsUid]) {
            clearTimeout(this.timeouts[tabsUid])
          }
          this.tabsBeforeActiveIds[tabsUid] = this.tabsActiveIds[tabsUid]
          this.tabsActiveIds[tabsUid] = id
          this.runWatchersById(tabsUid)
          this.timeouts[tabsUid] = setTimeout(() => {
            delete this.tabsBeforeActiveIds[tabsUid]
            delete this.timeouts[tabsUid]
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
      if (!this.tabsArray[tabsUid]) {
        this.tabsArray[tabsUid] = [];
      }
      if (!this.settings[tabsUid]) {
        this.settings[tabsUid] = {}
      }
      if (!this.slots[tabsUid]) {
        this.slots[tabsUid] = {};
      }
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
  runAfterInit = (tabsUid, fn, reversePush = false) => {
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
  runAfterInit: tabsStoreObject.runAfterInit,
  runWatchersById: tabsStoreObject.runWatchersById,
  setSettings: tabsStoreObject.setSettings,
  getSettings: tabsStoreObject.getSettings,
  getIndex: tabsStoreObject.getIndex,
  setIndex: tabsStoreObject.setIndex,
});
