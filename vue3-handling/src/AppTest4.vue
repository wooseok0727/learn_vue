<template>
  <div
    class="parent"
    @click="handlerA">
    <div
      class="child"
      @click.stop="handlerB"></div>
  </div>
  <div
    class="parent"
    @click.capture.stop="handlerA">
    <div
      class="child"
      @click.stop="handlerB"></div>
  </div>
  <div
    class="parent"
    @click.self="handlerA">
    <div class="child"></div>
  </div>
  <div
    class="parent"
    @click="handlerA">
    <div class="child"></div>
  </div>
  <div
    class="parent"
    @wheel.passive="handlerC">
    <div class="child"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handlerA(event) {
      console.log(event.target)
      console.log(event.currentTarget)
      console.log('A')
    },
    handlerB() {
      // event.stopPropagation()
      console.log('B')
    },
    handlerC(e) {
      for(let i = 0; i < 10; i++) {
        console.log(e)
      }
    }
  } 
}
</script>

<style lang="scss" scoped>
  .parent {
    width: 200px;
    height: 100px;
    background-color: royalblue;
    margin: 10px;
    padding: 10px;
    overflow: auto;
    .child {
      width: 100px;
      height: 2000px;
      background-color: orange;
    }
  }
</style>