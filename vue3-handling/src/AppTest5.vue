<template>
  <input
    type="text"
    @keydown.enter="handler" />
  <input
    type="text"
    @keydown.a="handler" />
  <input
    type="text"
    @keydown.ctrl.a="handler" />
  <input
    type="text"
    @keydown.ctrl.shift.a="handler" />
</template>

<script>
export default {
  methods: {
    handler() {
      // if (event.key === 'Enter') {
      //   console.log('Enter!!')
      // }
      console.log('Enter!!')
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    display: block;
    margin: 10px;
  }
</style>