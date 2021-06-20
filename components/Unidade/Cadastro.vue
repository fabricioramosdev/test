<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card ">
        <div class="card-header card-header-success card-header-icon">
          <div class="card-icon">
            <i class="material-icons">
              data_saver_on
            </i>
          </div>
          <h4 class="card-title">
            Cadastrar Unidade
          </h4>
        </div>
        <div class="card-body ">
          <form method="#" action="#">
            <div class="form-group bmd-form-group">
              <label
                for="descricao"
                class="bmd-label-floating"
              >Descricao</label>
              <input v-model="descricao" type="text" class="form-control" required>
            </div>
            <div class="form-group bmd-form-group">
              <label for="sigle" class="bmd-label-floating">Sigla</label>
              <input v-model="sigla" type="text" class="form-control" required>
            </div>
          </form>
        </div>
        <div class="card-footer ">
          <button type="button" class="btn btn-fill btn-success">
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CadastraUnidade',
  data () {
    return {
      sigla: '',
      descricao: ''
    }
  },
  watch: {},
  created (): void {},
  methods: {}
})
</script>

<style></style>
