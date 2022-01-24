import Vue from "vue";

import {StorePrototype} from 'vue-rt-style-kit-atoms/src/stores/storePrototype.class.js'

class CarouselV3Store extends StorePrototype {

  constructor() {
    super();
    this.sliders = {}
    this.sliderSqueue = {}
    this.arraySize = 5;
    this.animationDuration = 500;
  }
  createContainer = (name) => {}

  removeContainer = (name) => {}

  setActiveItems(sliderName, activeIndex) {}

  fillSlideInfo = (sliderName) => {
    if (!this.sliders[sliderName]) {
      this.sliders[sliderName] = {
        index: 0,
        slides: [],
        ids: [],
        slidesCustomId: [],
        possibleIds: {},
        watchers: [],
        colInRow: 0,
        infiniteScroll: false,
        showLArrow: false,
        showRArrow: false,
        showLShadow: false,
        showRShadow: false,
      }
    }
  }
  updateInfiniteScroll = (sliderName, infiniteScroll) => {
    if (this.sliders[sliderName]) {
      this.sliders[sliderName].infiniteScroll = infiniteScroll
    }
  }

  createSlide = (sliderName, _id, slot, index, slideId) => {
    this.fillSlideInfo(sliderName)
    const sliders = this.sliders[sliderName];
    if (!sliders.possibleIds[_id]) {
      sliders.possibleIds[_id] = 1
      if (index < 0) {
        sliders.slides.push(slot)
        sliders.slidesCustomId.push(slideId)
        sliders.ids.push(_id)
      } else {
        sliders.slidesCustomId.splice(index, 0, slideId)
        sliders.slides.splice(index, 0, slot)
        sliders.ids.splice(index, 0, splice)
      }
    } else {
      const index = sliders.ids.indexOf(_id)
      sliders.slides[index] = slot;
      sliders.slidesCustomId[index] = slideId;
    }
    this.setArrowProps(sliderName);
    this.callWatcher(sliderName)
  }
  updateSlide = (sliderName, _id, slot, index, slideId) => {
    const sliders = this.sliders[sliderName];
    if (sliders) {
      const indexSlide = sliders.ids.indexOf(_id);
      sliders.slides[indexSlide] = slot;
      sliders.slidesCustomId[indexSlide] = slideId
      this.setArrowProps(sliderName);
      this.callWatcher(sliderName);
    }
  }
  setArrowProps = (sliderName) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const index = slider.index;
      const size = slider.ids.length;
      const colInRow = this.getColInRow(sliderName)
      const wWidth = window?.innerWidth;
      slider.showRArrow = (wWidth > 1024 ? index < size - colInRow : wWidth > 767 ? index < size - 2 : index < size - 1);
      slider.showLArrow = index > 0;
      slider.showRShadow = (wWidth > 1024 ? index < size - colInRow : wWidth > 767 ? index < size - 2 : index < size - 1);
      slider.showLShadow = index > 0;
    }
  }

  getSliderContent = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].slides
    }
  }

  getSliderCustomIds = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].slidesCustomId
    }
  }

  removeSlide = (sliderName, _id) => {
    const sliders = this.sliders[sliderName];
    if (sliders.possibleIds[_id]) {
      delete sliders.possibleIds[_id]
      const index = sliders.ids.indexOf(_id)
      sliders.ids.splice(index, 1)
      sliders.slides.splice(index, 1)
      this.setArrowProps(sliderName);
      this.callWatcher(sliderName)
    }
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

  setNextSlide = (sliderName, scrollStep = 1, laptopScrollStep = 1, tdScrollStep = 1, mdScrollStep = 1) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const infiniteScroll = slider.infiniteScroll;
      const index = slider.index;
      const size = slider.ids.length;
      const colInRow = slider.colInRow
      const width = window.innerWidth;
      let locScrollStep = 0
      if (width > 1600) {
        locScrollStep = scrollStep
      } else {
        if (width < 1025) {
          if (width < 769) {
            locScrollStep = mdScrollStep
          } else {
            locScrollStep = tdScrollStep
          }
        } else {
          locScrollStep = laptopScrollStep
        }
      }
      if (index == size - colInRow && width > 1024 || index == size - 2 && width > 767 && width <= 1024 || index == size - 1 && width < 768) {
        slider.index = 0
      } else {
        slider.index = index + locScrollStep;
      }
      if (width > 1024) {
        if (slider.index + colInRow > size && !infiniteScroll) {
          slider.index = size - colInRow
        }
      }
      slider.index = slider.index % size
      if (slider.index < 0) {
        slider.index = 0
      }

      this.setArrowProps(sliderName);
      this.callWatcher(sliderName);
    }
  }
  setActiveId = (sliderName, id) => {
  }
  setActiveIndex = (sliderName, index) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const width = window.innerWidth;
      let colInRow = this.getColInRow(sliderName)
      const infiniteScroll = slider.infiniteScroll;
      const size = slider.ids.length;
      this.sliders[sliderName].index = index - 0;
      if (width > 1024) {
        if (slider.index + colInRow > size && !infiniteScroll) {
          slider.index = size - colInRow
        }
      }
      if (slider.index < 0) {
        slider.index = 0
      }

      this.setArrowProps(sliderName)
      this.callWatcher(sliderName);
    }
  }
  checkActiveIndex = (sliderName) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const index = slider.index;
      const size = slider.ids.length;
      let colInRow = this.getColInRow(sliderName)
      if (index + colInRow >= size) {
        this.setActiveIndex(sliderName, size - colInRow - 1)
      } else {
        this.setArrowProps(sliderName)
        this.callWatcher(sliderName);
      }
    }
  }
  getColInRow = (sliderName) => {
    const slider = this.sliders[sliderName];
    const width = window.innerWidth;
    let colInRow = slider.colInRow

    if (width <= 1024) {
      if (width > 768) {
        colInRow = 2
      } else {
        colInRow = 1
      }
    }
    return colInRow
  }
  setPrevSlide = (sliderName, scrollStep = 1, laptopScrollStep = 1, tdScrollStep = 1, mdScrollStep = 1) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const index = slider.index;
      const infiniteScroll = slider.infiniteScroll;
      const size = slider.ids.length;
      let colInRow = this.getColInRow(sliderName)
      const width = window.innerWidth;

      let locScrollStep = 0
      if (width > 1600) {
        locScrollStep = scrollStep
      } else {
        if (width < 1025) {
          if (width < 769) {
            locScrollStep = mdScrollStep
          } else {
            locScrollStep = tdScrollStep
          }
        } else {
          locScrollStep = laptopScrollStep
        }
      }
      slider.index = (index - locScrollStep);
      if (infiniteScroll) {
        slider.index = (slider.index + size) % size
      } else {
        if (slider.index < 0) {
          slider.index = 0
        }
        if (slider.index > size - colInRow) {
          slider.index = size - colInRow
        } else {
          if (width > 767 && width <= 1024) {
            if (slider.index > size - 2) {
              slider.index = size - 2
            }
          } else {
            if (slider.index > size - 1) {
              slider.index = size
            }
          }
        }
      }
      if (slider.index < 0) {
        slider.index = 0
      }
      this.setArrowProps(sliderName);
      this.callWatcher(sliderName);
    }
  }
  getActiveIndex = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].index
    }
    return 0
  }
  getArrowOptions = (sliderName) => {
    const slider = this.sliders[sliderName];
    return {
      next: slider.showRArrow,
      prev: slider.showLArrow
    }
  }
  getShadowOptions = (sliderName) => {
    const slider = this.sliders[sliderName];
    return {
      next: slider.showRShadow,
      prev: slider.showLShadow
    }
  }
  setColInRow = (sliderName, colInRow) => {
    if (this.sliders[sliderName]) {
      this.sliders[sliderName].colInRow = colInRow - 0
    }
  }
}

const carouselV3StoreObject = new CarouselV3Store();

export const carouselV3Store = Vue.observable({

  removeWatcher: carouselV3StoreObject.removeWatcher,
  updateInfiniteScroll: carouselV3StoreObject.updateInfiniteScroll,
  addWatcher: carouselV3StoreObject.addWatcher,
  setColInRow: carouselV3StoreObject.setColInRow,
  setNextSlide: carouselV3StoreObject.setNextSlide,
  setPrevSlide: carouselV3StoreObject.setPrevSlide,
  setActiveId: carouselV3StoreObject.setActiveId,
  setActiveIndex: carouselV3StoreObject.setActiveIndex,
  createContainer: carouselV3StoreObject.createContainer,
  removeContainer: carouselV3StoreObject.removeContainer,
  createSlide: carouselV3StoreObject.createSlide,
  updateSlide: carouselV3StoreObject.updateSlide,
  removeSlide: carouselV3StoreObject.removeSlide,
  getSliderContent: carouselV3StoreObject.getSliderContent,
  getSliderCustomIds: carouselV3StoreObject.getSliderCustomIds,
  getActiveIndex: carouselV3StoreObject.getActiveIndex,
  getArrowOptions: carouselV3StoreObject.getArrowOptions,
  getShadowOptions: carouselV3StoreObject.getShadowOptions,
  checkActiveIndex: carouselV3StoreObject.checkActiveIndex
});
