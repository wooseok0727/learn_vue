<template>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent="handler">
    NAVER - prevent
  </a>
  <a
    href="https://naver.com"
    target="_blank"
    @click.once="handler">
    NAVER - once
  </a>
  <a
    href="https://naver.com"
    target="_blank"
    @click.prevent.once="handler">
    NAVER - prevent, once
  </a>
</template>

<script>
export default {
 methods: {
   handler() {
    //  event.preventDefault()
     console.log('ABC!')
   }
 } 
}
</script>

<style lang="scss" scoped>
  a {
    display: block;
    margin: 10px;
  }
</style>