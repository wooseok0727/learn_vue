<template>
  <button @click="handler">
    Click me!
  </button>
  <h1 v-show="isShow">
    Hello?!
  </h1>
  <h1 v-if="isShow">
    Hello?!
  </h1>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      count: 0
    }
  },
  methods: {
    handler() {
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>
