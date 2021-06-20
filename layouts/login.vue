<template>
  <div class="container mt-5">
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['authenticated'],
  head: {
    link: [],
    script: []
  },
  mounted (): void {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
})
</script>

<style scoped>
</style>
