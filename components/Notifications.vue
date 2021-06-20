<template>
  <li class="nav-item dropdown">
    <a
      id="navbarDropdownMenuLink"
      class="nav-link"
      href="http://example.com"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="notification">{{ notificacoes }}</span>
      <i class="material-icons">notifications</i>
      <p class="d-lg-none d-md-block">
        Some Actions
      </p>
    </a>
    <div
      class="dropdown-menu dropdown-menu-right"
      aria-labelledby="navbarDropdownMenuLink"
    >
      <a class="dropdown-item" href="#">Colear CPF0025</a>
      <a class="dropdown-item" href="#">Colear CPF0023</a>
      <a class="dropdown-item" href="#">Colear CPF0015</a>
      <a class="dropdown-item" href="#">Quebra E258744</a>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      notificacoes: 0
    }
  },
  watch: {},
  created () {
    this.time()
    setInterval(this.time, 60000) // a cada 1 min
  },
  methods: {
    time () {
      this.notificacoes = Math.floor(Math.random() * 10)
    }
  }
})
</script>

<style></style>
