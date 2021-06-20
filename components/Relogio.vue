<template>
  <div>
    <span class="material-icons">
      watch_later
    </span>
    <span class="blink" v-text="time" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      time: ''
    }
  },
  watch: {},
  created (): void {
    this.time = new Date().toLocaleTimeString()
    setInterval(this.tick, 1000)
  },
  methods: {
    tick () {
      this.time = new Date().toLocaleTimeString()
    }
  }
})
</script>

<style>
.blink {
  animation: blinker 5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.1;
  }
}
</style>
