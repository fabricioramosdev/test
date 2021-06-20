<template>
  <div>
    <h1 class="title">
      Unidade ID: {{ $route.params.id }}
      <br>
      <NuxtLink to="/unidade">
        Link Unidade
      </NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // valida se o parametro realmente é um numero
  validate (data) {
    return /^\d+$/.test(data.params.id)
  },
  data () {
    return {
      unidadeId: ''
    }
  },
  methods: {}
})
</script>

<style></style>
