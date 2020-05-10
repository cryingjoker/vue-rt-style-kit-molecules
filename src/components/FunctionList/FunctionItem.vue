<template>
  <div class="function-list__item rt-col-md-3 rt-col-td-3 rt-col-4">
    <div class="function-list__item-left">
      <div class="function-list__item-icon">
        <img alt="" :src="imgSrc" :style="{ width: imgWidth + 'px', backgroundColor: bgColor}">
      </div>
    </div>
    <div class="function-list__item-right">
      <div class="function-list__item-header"><slot></slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'function-item',
    props: {
      imgSrc: String,
      imgWidth: String,
      bgColor: String
    }
  }
</script>
