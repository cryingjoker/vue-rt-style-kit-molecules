import Vue from "vue";

import {StorePrototype} from "vue-rt-style-kit-atoms";

class CommentSliderStore extends StorePrototype {
  constructor() {
    super();
    this.sliders = {}
    this.sliderSqueue = {}
    this.arraySize = 5;
    this.animationDuration = 500
  }


  createContainer = (name) => {
    if (!(name+'' in this.sliders)) {
      this.sliders[name] = {
        _ids: [],
        content: {},
        activeIndex: [0,0,0,0,0],
        activeIds: [0,0,0,0,0],
        watchers: {},
        wrapperId: null
      }
      if (name in this.sliderSqueue) {
        this.sliderSqueue[name].forEach(fn => fn.call())
        delete this.sliderSqueue[name]
      }
    }
  }

  removeContainer = (name) => {
    if (name in this.sliders) {
      delete this.sliders[name]
    }
  }

  setActiveItems(sliderName,activeIndex){
    const _ids = this.sliders[sliderName]._ids
    const idsLength = _ids.length

    let arraySizeCenter = parseInt(this.arraySize/2);
    let activeIndexNow = this.sliders[sliderName].activeIndex[arraySizeCenter];
    for(let i = 0; i<this.arraySize; i++){
      let step = i - arraySizeCenter
      if(step != 0){
        this.sliders[sliderName].activeIndex[i] =  (activeIndexNow+step+idsLength) % idsLength
      }
    }
    this.callWatcher(sliderName)

  }

  createSlide = (sliderName, _id, content, isActive) => {
    const pushSlide = () => {
      this.sliders[sliderName].content[_id] = content
      this.sliders[sliderName]._ids.push(_id)
      if (isActive) {
        this.sliders[sliderName].activeIndex[2] = this.sliders[sliderName]._ids.length - 1;

      }
      this.setActiveItems(sliderName)
    }
    if (sliderName in this.sliders) {
      pushSlide()
    } else {
      if (!(sliderName in this.sliderSqueue)) {
        this.sliderSqueue[sliderName] = []
      }
      this.sliderSqueue[sliderName].push(pushSlide)
    }
  }
  updateSlide = (sliderName, _id, content, isActive) => {

    this.sliders[sliderName].content[_id] = content
    if (isActive) {
      this.sliders[sliderName].activeIndex[2] = this.sliders[sliderName]._ids.length - 1;

    }
    this.setActiveItems(sliderName)

  }

  getSliderContent = (sliderName) => {
    if(sliderName in this.sliders){
      const {content, _ids, activeIndex, goLeft, goRight} = this.sliders[sliderName]
      return {content, _ids, activeIndex,goLeft, goRight}
    }
  }

  removeSlide = (sliderName, _id) => {
    if (sliderName in this.sliders) {
      this.sliders[sliderName]._ids.splice(this.sliders[sliderName]._ids.indexOf(_id),1)

      delete this.sliders[sliderName]._ids[_id]
      delete this.sliders[sliderName].watchers[_id]
      this.callWatcher(sliderName)
    }
  }

  addWatcher = (slideName, fn, _id, isWrapper=false) => {
    const addWatcher = () => {
      if(isWrapper){
        this.sliders[slideName].wrapperId = _id
      }
      if (!(_id in this.sliders[slideName].watchers)) {
        this.sliders[slideName].watchers[_id] = [];
      }
      this.sliders[slideName].watchers[_id].push(fn);
    }

    if (slideName in this.sliders) {
        addWatcher()
    } else {
      if (!(slideName in this.sliderSqueue)) {
        this.sliderSqueue[slideName] = []
      }
      this.sliderSqueue[slideName].push(
        () => {
          addWatcher()
          fn.call()
        }
      )
    }
  }

  callWatcher = (slideName, _id) => {

    if (slideName in this.sliders) {
      const {watchers,wrapperId} = this.sliders[slideName];
      if (_id) {
        watchers[wrapperId]?.forEach(fn => fn.call())
        watchers[_id]?.forEach(fn => fn.call())
      } else {
        Object.values(watchers).forEach(arr => arr.forEach(fn => fn.call()))
      }
    }
  }

  setNextSlide = (sliderName) => {
    if (sliderName in this.sliders) {
      if(!this.sliders[sliderName].pause) {
        const {_ids} = this.sliders[sliderName]
        this.sliders[sliderName].goLeft = true
        this.sliders[sliderName].pause = true
        this.callWatcher(sliderName)
        setTimeout(() => {
          this.sliders[sliderName].activeIndex[2] += 1
          this.sliders[sliderName].activeIndex[2] %= _ids.length
          this.sliders[sliderName].pause = false
          this.sliders[sliderName].goLeft = false
          this.setActiveItems(sliderName)
        }, this.animationDuration)
      }
    }
  }
  setActiveId=(sliderName, id)=>{
    const {_ids} = this.sliders[sliderName]
    this.sliders[sliderName].activeIndex[2] = _ids.indexOf(id);
    this.setActiveItems(sliderName)

  }
  setPrewSlide = (sliderName) => {

    if (sliderName in this.sliders) {

      if(!this.sliders[sliderName].pause) {
        const {_ids} = this.sliders[sliderName]
        this.sliders[sliderName].goRight = true
        this.sliders[sliderName].pause = true
        this.callWatcher(sliderName)
        setTimeout(() => {
          this.sliders[sliderName].activeIndex[2] -= 1
          this.sliders[sliderName].activeIndex[2] += _ids.length
          this.sliders[sliderName].activeIndex[2] %= _ids.length
          this.sliders[sliderName].pause = false
          this.sliders[sliderName].goRight = false
          this.setActiveItems(sliderName)
        }, this.animationDuration)
      }
    }
  }
}

const commentSliderStoreObject = new CommentSliderStore();

export const commentSliderStore = Vue.observable({

  removeWatcher: commentSliderStoreObject.removeWatcher,
  addWatcher: commentSliderStoreObject.addWatcher,
  setNextSlide: commentSliderStoreObject.setNextSlide,
  setPrewSlide: commentSliderStoreObject.setPrewSlide,
  setActiveId: commentSliderStoreObject.setActiveId,
  createContainer: commentSliderStoreObject.createContainer,
  removeContainer: commentSliderStoreObject.removeContainer,
  createSlide: commentSliderStoreObject.createSlide,
  updateSlide: commentSliderStoreObject.updateSlide,
  removeSlide: commentSliderStoreObject.removeSlide,
  getSliderContent: commentSliderStoreObject.getSliderContent,

});
