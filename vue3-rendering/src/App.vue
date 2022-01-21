<template>
  <button @click="handler">
    Click me!
  </button>
  <ul>
    <!-- <li
      v-for="(fruit, index) in fruits"
      :key="fruit">
      {{ fruit }}-{{ index + 1 }}
    </li> -->
    <li
      v-for="{id, name} in newFruits"
      :key="id">
      {{ name }}-{{ id }}
    </li>
  </ul>
</template>

<script>
import shortid from 'shortid'

export default {
  data() {
    return {
      fruits: ['Apple','Banana','Cherry']
    }
  },
  computed: {
    newFruits() {
      return this.fruits.map(fruit => ({
          id: shortid.generate(),
          name: fruit
        }))
    }
  },
  methods: {
    handler() {
      this.fruits.push('Orange')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>