<template>
  <li>
    ID unidade: {{ id }}<br>
    Nome unidade: {{ nome }}<br>
    Sigla unidade: {{ sigla }}<br>
    Bandeira: <img :src="bandeira" width="20"><br>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ListaUnidade',
  props: {
    id: {
      type: String,
      required: true
    },
    sigla: {
      type: String,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    bandeira: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  created (): void {},
  methods: {}
})
</script>

<style>
.lista{
  background-color: aquamarine;
  margin: 1em;

}

</style>
