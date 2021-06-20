<template>
  <div>
    <div class="wrapper ">
      <div class="sidebar" data-color="azure" data-background-color="black">
        <!--
      Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

      Tip 2: you can also add an image using data-image tag
      -->

        <div class="logo">
          <a href="/dashboard" class="simple-text logo-mini">
            <span class="material-icons">
              home
            </span>
          </a>
          <a href="/dashboard" class="simple-text logo-normal">
            <Suaagendafacil
              style="font-size:0.6em;color:rgb(0, 188, 212, 0,45)"
            />
          </a>
        </div>

        <DashboardSiderBar />
      </div>
      <div class="main-panel">
        <!-- Navbar -->
        <nav
          class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"
        >
          <div class="container-fluid">
            <div class="navbar-wrapper">
              <div class="navbar-minimize">
                <button
                  id="minimizeSidebar"
                  class="btn btn-just-icon btn-white btn-fab btn-round"
                >
                  <i
                    class="material-icons text_align-center visible-on-sidebar-regular"
                  >more_vert</i>
                  <i
                    class="material-icons design_bullet-list-67 visible-on-sidebar-mini"
                  >view_list</i>
                </button>
              </div>

              <a class="navbar-brand" href="javascript:;">Seja bem vindo! </a>
              <a class="navbar-brand" href="javascript:;"><Relogio /></a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon icon-bar" />
              <span class="navbar-toggler-icon icon-bar" />
              <span class="navbar-toggler-icon icon-bar" />
            </button>
            <div class="collapse navbar-collapse justify-content-end">
              <ul class="navbar-nav">
                <!-- your navbar here -->

                <ButtonBack />
                <li class="nav-item">
                  <nuxt-link to="/dashboard" class="nav-link" title="Dashboard">
                    <i class="material-icons">home</i>
                    <p class="d-lg-none d-md-block">
                      Stats
                    </p>
                  </nuxt-link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    id="navbarDropdownProfile"
                    class="nav-link"
                    href="javascript:;"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="material-icons">person</i>
                    <p class="d-lg-none d-md-block">
                      Account
                    </p>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownProfile"
                  >
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item" href="#">Settings</a>
                    <div class="dropdown-divider" />
                    <a class="dropdown-item" href="#">Log out</a>
                  </div>
                </li>
                <Notifications />
              </ul>
            </div>
          </div>
        </nav>
        <!-- End Navbar -->

        <div class="content">
          <div class="container-fluid">
            <Nuxt />
          </div>
        </div>

        <footer class="footer">
          <div class="container-fluid">
            <nav class="copyright float-left">
              &copy;
              {{ year }}
              suaagendafacil.com
            </nav>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['authenticated'],
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  head: {
    link: [],
    bodyAttrs: {
      class: 'sidebar-mini'
    },
    script: []
  },
  mounted (): void {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {}
})
</script>
<style scoped>
.copyright {
  padding-left: 1.5em;
  font-size: 1.1em;
  font-weight: 600;
}
</style>
