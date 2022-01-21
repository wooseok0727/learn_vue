<template>
  <h1 
    v-once
    @click="add">
    {{ msg }}
  </h1>
  <h1 v-html="msg"></h1>
  <h1 :class="'active'">
    {{ msg1 }}
  </h1>
  <h1
    :[attr]="'active'"
    @[event]="add2">
    {{ msg1 }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      msg: '<div style="color: red;">Hello!!</div>',
      msg1: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add() {
      this.msg += '!'
    },
    add2() {
      this.msg1 += '!'
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    color: royalblue;
    font-size: 100px;
  }
</style>