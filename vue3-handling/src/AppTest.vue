<template>
  <button @click="handler('hi', $event)">
    Click 1
  </button>
  <button @click="handler('what', $event)">
    Click 2
  </button>
</template>

<script>
export default {
  methods: {
    handler(msg, event) {
      console.log(msg)
      console.log(event)
    }
  } 
}
</script>

<style lang="scss" scoped>

</style>