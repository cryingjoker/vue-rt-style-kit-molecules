import Vue from "vue";

import {StorePrototype} from "vue-rt-style-kit-atoms";

class CarouselV3Store extends StorePrototype {

  constructor() {
    super();
    this.sliders = {}
    this.sliderSqueue = {}
    this.arraySize = 5;
    this.animationDuration = 500;
  }


  createContainer = (name) => {

  }

  removeContainer = (name) => {

  }

  setActiveItems(sliderName, activeIndex) {

  }

  fillSlideInfo(sliderName) {
    if (!this.sliders[sliderName]) {
      this.sliders[sliderName] = {
        index: 0,
        slides: [],
        ids: [],
        possibleIds: {},
        watchers: []
      }
    }
  }

  createSlide = (sliderName, _id, slot, index) => {
    this.fillSlideInfo(sliderName)
    const sliders = this.sliders[sliderName];
    if (!sliders.possibleIds[_id]) {
      sliders.possibleIds[_id] = 1
      if (index < 0) {
        sliders.slides.push(slot)
        sliders.ids.push(_id)

      } else {
        sliders.slides.splice(index, 0, slot)
        sliders.ids.splice(index, 0, splice)
      }
    } else {
      const index = sliders.ids.indexOf(_id)
      sliders.slides[index] = slot;
    }
    this.callWatcher(sliderName)
  }
  setMaxAuthorTextLength = (sliderName) => {

  }
  updateSlide = (sliderName, _id, content, isActive) => {

  }

  getSliderContent = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].slides
    }
  }

  removeSlide = (sliderName, _id) => {

  }

  addWatcher = (sliderName, fn) => {
    this.fillSlideInfo(sliderName)
    if (this.sliders[sliderName].watchers.indexOf(fn) < 0) {
      this.sliders[sliderName].watchers.push(fn)
    }
  }

  callWatcher = (sliderName) => {
    this.sliders[sliderName].watchers.forEach(fn => fn.call());
  }

  setNextSlide = (sliderName) => {
    if (this.sliders[sliderName]) {
      const index = this.sliders[sliderName].index;
      const size = this.sliders[sliderName].ids.length;
      this.sliders[sliderName].index = (index + 1) % size;
      this.callWatcher(sliderName);
    }
  }
  setActiveId = (sliderName, id) => {


  }
  setPrewSlide = (sliderName) => {
    if (this.sliders[sliderName]) {
      const index = this.sliders[sliderName].index;
      const size = this.sliders[sliderName].ids.length;
      this.sliders[sliderName].index = (index - 1 + size) % size;
      this.callWatcher(sliderName);
    }
  }
  getActiveIndex = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].index
    }
    return 0
  }
}

const carouselV3StoreObject = new CarouselV3Store();

export const carouselV3Store = Vue.observable({

  removeWatcher: carouselV3StoreObject.removeWatcher,
  addWatcher: carouselV3StoreObject.addWatcher,
  setNextSlide: carouselV3StoreObject.setNextSlide,
  setPrewSlide: carouselV3StoreObject.setPrewSlide,
  setActiveId: carouselV3StoreObject.setActiveId,
  createContainer: carouselV3StoreObject.createContainer,
  removeContainer: carouselV3StoreObject.removeContainer,
  createSlide: carouselV3StoreObject.createSlide,
  updateSlide: carouselV3StoreObject.updateSlide,
  removeSlide: carouselV3StoreObject.removeSlide,
  getSliderContent: carouselV3StoreObject.getSliderContent,
  getActiveIndex: carouselV3StoreObject.getActiveIndex
});
