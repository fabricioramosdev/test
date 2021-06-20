<template>
  <div class="container">
    <div>
      <Suaagendafacil style="font-size:2em;color:rgb(0, 188, 212, 0,45)" />
      <h3 class="mt-2">
        Ops :/ Ocorreu um erro
      </h3>
      <a
        class="btn btn-success"
        href="/dashboard"
      >
        <i class="material-icons">arrow_back</i>
        <p class="d-lg-none d-md-block">
          Stats
        </p>
        Voltar
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  head: {
    title: 'Ops :/'
  },
  methods: {}
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
