<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <DashboardCardItensCadastrados />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <DashboardCardValorTotal />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <DashboardCardKitsPagos />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <DashboardCardItensPagos />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-text card-header-info">
            <div class="card-text">
              <h4 class="card-title">
                Indicadores
              </h4>
              <p class="card-category">
                Indicadores de inteligência de negócio
              </p>
            </div>
          </div>
          <div class="card-body" />
          <!--
          <iframe
            width="100%"
            height="800"
            src="https://app.powerbi.com/view?r=eyJrIjoiMDNmOWUyM2ItZmZiNS00OWUzLWIwNDYtYzNhMGU5Y2E0OWNjIiwidCI6IjFiNWJhOGEyLTMxNWQtNDVjZS05NTlhLTQyYjc0OGMwMWRlNyJ9"
            frameborder="0"
            allowFullScreen="true"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import CardItensCadastrados from '@/components/Dashboard/CardItensCadastrados'
// import CardValorTotal from '@/components/Dashboard/CardValorTotal'
// import CardKitsPagos from '@/components/Dashboard/CardKitsPagos'
// import CardItensPagos from '@/components/Dashboard/CardItensPagos'

export default Vue.extend({
  // components: {
  //   CardItensCadastrados,
  //   CardValorTotal,
  //   CardKitsPagos,
  //   CardItensPagos
  // },
  layout: 'dashboard',
  head: {
    script: [
      {
        src: 'js/material-dashboard.js?v=2.1.2',
        type: 'text/javascript',
        body: true
      }
    ]
  },
  mounted (): void {},
  methods: {}
})
</script>

<style></style>
