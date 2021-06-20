/* eslint-disable vue/valid-v-for */
<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card ">
        <div class="card-header card-header-info card-header-icon">
          <div class="card-icon">
            <i class="material-icons">
              search
            </i>
          </div>
          <h4 class="card-title">
            Pesquisa Unidade
          </h4>
        </div>
        <div class="card-body ">
          <form method="#" action="#">
          
            <div class="form-group bmd-form-group">
              <label for="sigle" class="bmd-label-floating">ID</label>
              <input v-model="id" type="text" class="form-control" required>
            </div>
            <div class="form-group bmd-form-group">
              <label
                for="descricao"
                class="bmd-label-floating"
              >Descricao</label>
              <input
                v-model="descricao"
                type="text"
                class="form-control"
                required
              >
            </div>
            <div class="form-group bmd-form-group">
              <label for="sigle" class="bmd-label-floating">Sigla</label>
              <input
                v-model="sigla"
                type="text"
                class="form-control"
                required
              >
            </div>
          </form>
        </div>
        <div class="card-footer ">
          <button
            type="button"
            class="btn btn-fill btn-info"
            @click="UnidadeId"
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PesquisaUnidade',
  data () {
    return {
      id: '',
      sigla: [],
      descricao: []
    }
  },
  watch: {
  },
  created (): void {},
  methods: {
    UnidadeId () {
      this.$router.push('/unidade/' + this.id)
    }
  }
})
</script>
<style scoped>
</style>
