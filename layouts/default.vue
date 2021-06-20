<template>
  <div class="container">
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    link: []
  },
  mounted (): void {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  }
})
</script>
<style>
body {
  background-color:#e1f5fe;
  background-size: cover;
}
</style>
