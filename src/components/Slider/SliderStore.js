import Vue from "vue";

// import StorePrototype from "@vue-rt-style-kit-atoms-local/stores/storePrototype.class";
import { StorePrototype } from 'vue-rt-style-kit-atoms/src/stores/storePrototype.class.js'

class SliderStore extends StorePrototype{
  constructor() {
    super();
    this.slidesArray = {}
    this.slots = {}
  }
  getSlot = (id) => {
    if (this.slots[id]) {
      return this.slots[id]
    }
  }
  setSlot = (sliderUid, name, slot,id) => {
    if(!this.slots[sliderUid]){
      this.slidesArray[sliderUid] = [];
      this.slots[sliderUid] = {};
    }
    let index = this.slidesArray[sliderUid].indexOf(id);
    if(index == -1){
      index = this.slots[sliderUid]?.length || 0
      if(index < 5) {
        this.slots[sliderUid][id] = {}
        this.slidesArray[sliderUid].push(id)
      }
    }
    if(index < 5) {
      this.slots[sliderUid][id][name] = slot;
    }
    this.runWatchersById(sliderUid)
  }
  getSlotSort = (sliderUid)=>{
    return this.slidesArray[sliderUid]
  }
}
const sliderStoreObject = new SliderStore();

export const sliderStore = Vue.observable({
  setSlot: sliderStoreObject.setSlot,
  getSlot: sliderStoreObject.getSlot,
  getSlotSort: sliderStoreObject.getSlotSort,
  removeWatcher: sliderStoreObject.removeWatcher,
  addWatcher: sliderStoreObject.addWatcher,
  runWatchersById: sliderStoreObject.runWatchersById,
});
