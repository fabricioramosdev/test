<template>
  <div class="card card-stats">
    <div class="card-header card-header-rose card-header-icon">
      <div class="card-icon">
        <i class="material-icons">insert_chart_outlined</i>
      </div>
      <p class="card-category">
        Valor (USD)
        <br><small>Total itens</small>
      </p>
      <h3 class="card-title">
        $ {{ valor }} k
      </h3>
    </div>
    <div class="card-footer">
      <div class="stats">
        <small>{{ atualizado }}</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      valor: 0,
      atualizado: ''
    }
  },
  watch: {},
  created (): void {
    this.atualiza()
    setInterval(this.atualiza, 900000) // a cada 15 min
  },
  methods: {
    atualiza () {
      this.valor = Math.floor(Math.random() * 10000)
      this.atualizado = 'Atualizado: ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
    }
  }
})
</script>

<style>
.blink {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.4;
  }
}
</style>
