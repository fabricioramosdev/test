<template>
  <li class="nav-item">
    <a
      class="nav-link"
      href="javascript:;"
      title="Voltar"
      @click="onClickBack()"
    >
      <i class="material-icons">arrow_back</i>
      <p class="d-lg-none d-md-block">
        Stats
      </p>
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {}
  },
  watch: {},
  created () {},
  methods: {
    onClickBack () {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      this.$router.go(-1)
    }

  }
})
</script>
<style></style>
