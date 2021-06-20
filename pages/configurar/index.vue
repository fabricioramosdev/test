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
            Configurar agenda
          </h4>
        </div>
        <div class="card-body ">
          <form-wizard shape="circle" color="#00bcd4" @on-complete="onComplete">
            <h2 slot="title">
              Configure sua agenda
            </h2>
            <tab-content title="Personal details">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info">
              My second tab content
            </tab-content>
            <tab-content title="Last step">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    nextButtonText: {
      type: String,
      default: 'Proximo'
    }
  },
  data () {
    return {}
  },
  methods: {
    onComplete () {
      alert('Yay. Done!')
    }
  }
})
</script>

<style></style>
