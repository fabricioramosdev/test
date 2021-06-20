<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        COUNTA: {{ this.$store.state.counter }}
      </h1>

      <h1 class="title">
        NUMERO: {{ this.$store.state.numero }}
      </h1>
      <button type="button" @click="add_one">
        Conta +1
      </button>

      <button type="button" @click="add_numero">
        Numero
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

  methods: {
    add_one () {
      this.$store.commit('increment')
    },
    add_numero () {
      this.$store.commit('setNumero', Math.floor(Math.random() * 10000))
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
