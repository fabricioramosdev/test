<template>
  <!-- <ul>
        <UnidadeLista id="1" sigla="BOT" nome="Botucatu" bandeira="https://img-premium.flaticon.com/png/512/197/197441.png?token=exp=1622259898~hmac=a2d0cb84cdc550504fc5ff52107fe7e5" />
        <UnidadeLista id="2" sigla="GPX" nome="Gavião Peixoto" bandeira="https://img-premium.flaticon.com/png/512/197/197441.png?token=exp=1622259898~hmac=a2d0cb84cdc550504fc5ff52107fe7e5" />
        <UnidadeLista id="3" sigla="SJK" nome="São José dos Campos" bandeira="https://img-premium.flaticon.com/png/512/197/197441.png?token=exp=1622259898~hmac=a2d0cb84cdc550504fc5ff52107fe7e5" />
        <UnidadeLista id="4" sigla="EGM" nome="Eugenio de Melo" bandeira="https://img-premium.flaticon.com/png/512/197/197441.png?token=exp=1622259898~hmac=a2d0cb84cdc550504fc5ff52107fe7e5" />
        <UnidadeLista id="5" sigla="EVO" nome="Evora" bandeira="https://img-premium.flaticon.com/png/512/197/197441.png?token=exp=1622259898~hmac=a2d0cb84cdc550504fc5ff52107fe7e5" />
      </ul> -->
  <div>
    <UnidadeCadastro />
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'dashboard',
  data () {
    return {
    }
  },
  head: {
    title: 'CPF : Unidade',
    script: [
    ]
  },
  methods: {
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
