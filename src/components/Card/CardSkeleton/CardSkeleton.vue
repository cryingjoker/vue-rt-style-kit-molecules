<template>
  <div :class="`${cmpName}__card`">
    <div
      :class="`${cmpName}__card-top ${cmpName}__wave`"
    ></div>
    <div
      :class="`${cmpName}__card-row`"
      v-for="(row, rowKey) in rows"
      :key="'row-'+rowKey"
    >
      <i></i>
      <div>
        <p
          :class="`${cmpName}__wave`"
        ></p>
        <p></p>
      </div>
    </div>
    <hr v-if="sub" />
    <div
      :class="`${cmpName}__card-row`"
      v-for="(sub, subKey) in sub"
      :key="'sub-'+subKey"
    >
      <i></i>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
    <div
      :class="`${cmpName}__card-end`"
    >
      <div
        :class="`${cmpName}__card-price`"
      ></div>
      <div
        :class="`${cmpName}__card-btn ${cmpName}__wave`"
      ></div>
      <div
        :class="`${cmpName}__card-more`"
      ></div>
    </div>
  </div>
</template>
<script>
  import './CardSkeleton.styl'
  export default {
    name: 'RtCardSkeleton',
    data () {
      return {
        cmpName: 'rt-skeleton'
      }
    },
    props: {
      rows: Number,
      sub: Number
    }
  }
</script>
