<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    :value="msg" 
    @change="msg = $event.target.value" />
  <input
    type="text"
    v-model.lazy="msg" />
  <input
    type="text"
    v-model.number="msg" />
  <input
    type="text"
    v-model.trim="msg" />
</template>

<script>
export default {
  data() {
    return {
      // msg: 123
      msg: 'Hello world'
    }
  },
  mounted() {
      console.log(typeof this.msg)
  },
  watch: {
    // msg() {
    //   console.log(typeof this.msg)
    // }
    msg() {
      console.log(this.msg)
    }
  }
}
</script>