<template>
  <span class="suaagendafacil blink">suaagendafacil.com</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      time: '',
      font_ize: '5'
    }
  },
  watch: {},
  created (): void {},
  methods: {}
})
</script>
<style scoped>
span{
  font-family: 'Anton', sans-serif;
  color: rgb(0, 188, 212, 0,45);
}
.blink {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.3;
  }
}
</style>
