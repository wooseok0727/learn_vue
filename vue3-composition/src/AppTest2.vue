<template>
  <div @click="increase">
    {{ count }}
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    function increase() {
      count.value += 1
    }

    return {
      count,
      increase
    }
  }
}
</script>