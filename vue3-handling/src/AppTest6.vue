<template>
  <h1>{{ msg }}</h1>
  <!-- 한글 작성시 바로 갱신( o ) -->
  <input
    type="text"
    :value="msg" 
    @input="msg = $event.target.value" /> 
    
  <!-- 한글 작성시 바로 갱신( x ) -->
  <input
    type="text"
    v-model="msg" />

  <h1>{{ checked }}</h1>
  <input
    type="checkbox" 
    v-model="checked" />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello world!',
      checked: false
    }
  },
  // methods: {
  //   handler(event) {
  //     console.log(event.target.value)
  //     this.msg = event.target.value
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 30px;
    margin: 10px;
  }
  input {
    width: 200px;
    display: block;
    margin: 10px;
    padding: 10px;
    font-size: 20px;
  }
</style>