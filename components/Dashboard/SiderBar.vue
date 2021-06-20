<template>
  <div class="sidebar-wrapper">
    <ul class="nav">
      <li class="nav-item active  ">
        <a class="nav-link" href="/dashboard">
          <i class="material-icons">dashboard</i>
          <p id="teste_dashboard">Dashboard</p>
        </a>
      </li>
      <!-- your sidebar here -->

      <li class="nav-item ">
        <a class="nav-link" data-toggle="collapse" href="#pagesExamples">
          <i class="material-icons">settings</i>
          <p>
            Configuração
            <b class="caret" />
          </p>
        </a>
        <div id="pagesExamples" class="collapse">
          <ul class="nav">
            <li class="nav-item ">
              <NuxtLink to="/configurar" class="nav-link">
                <span class="sidebar-mini"> A </span>
                <span class="sidebar-normal">Configurar agenda</span>
              </NuxtLink>
            </li>

            <li class="nav-item ">
              <NuxtLink to="/unidade" class="nav-link">
                <span class="sidebar-mini"> U </span>
                <span class="sidebar-normal">Unidade</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {}
  },
  watch: {},
  created (): void {},
  methods: {}
})
</script>

<style></style>
