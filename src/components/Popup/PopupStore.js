import Vue from "vue";

import {StorePrototype} from "vue-rt-style-kit-atoms";

class PopupStore extends StorePrototype {
  constructor() {
    super();
    this.popupArray = []
    this.popupActiveId = null
    this.watchers = {}
  }




  setSlot = (popupUid, fn) => {
    let index = this.popupArray.indexOf(popupUid);
    if (index == -1) {
      this.popupArray.push(popupUid)
      this.addWatcher(popupUid,fn)
    }
  }
  removeSlots = (popupUid)=>{
    this.runWatchersById(popupUid)
    const indexInArray = this.popupArray.indexOf(popupUid)
    if(indexInArray >= 0){
      this.popupArray.splice(indexInArray,1)
    }
    if(this.bannerActiveId == popupUid){
      this.bannerActiveId = null
    }
  }

  setActiveId = (popupUid)=>{
    const popupActiveIdBefore = this.popupActiveId
    this.popupActiveId = popupUid
    if(popupActiveIdBefore){
      this.runWatchersById(popupActiveIdBefore)
    }
    this.runWatchersById(this.popupActiveId)
  }

  toggleActiveId = (popupUid)=>{
    const popupActiveIdBefore = this.popupActiveId
    this.popupActiveId = popupUid
    if(popupActiveIdBefore){
      this.runWatchersById(popupActiveIdBefore)
    }
    this.runWatchersById(this.popupActiveId)
  }


  getActiveId = () =>{
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
