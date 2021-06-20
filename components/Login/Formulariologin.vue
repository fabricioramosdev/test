/* eslint-disable node/handle-callback-err */
/* eslint-disable node/handle-callback-err */
<template>
  <div class="row mt-5">
    <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
      <form class="form mt-5" method="post" action="" @submit.prevent="submitForm">
        <div class="card card-login card-hidden CardAnimation">
          <div class="card-header card-header-info text-center mt-3">
            <Suaagendafacil style="font-size:1.6em;color:rgb(0, 188, 212, 0,45)" />
            <h5 class="card-title mt-5">
              Faça login, por favor
            </h5>
            <Calendarsvg />
          </div>
          <div class="card-body">
            <span class="bmd-form-group ">
              <div class="input-group mt-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="material-icons">how_to_reg</i>
                  </span>
                </div>
                <input
                  ref="password"
                  v-model="form.email"
                  type="text"
                  class="form-control"
                  placeholder="Usuário..."
                >
              </div>
            </span>

            <span class="bmd-form-group">
              <div class="input-group mt-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i
                      class="material-icons"
                      title="Clique para revelar a senha"
                      @click="switchVisibility"
                    >password</i>
                  </span>
                </div>
                <input
                  ref="password"
                  v-model="form.senha"
                  :type="passwordFieldType"
                  class="form-control"
                  placeholder="Senha..."
                >
              </div>
            </span>
          </div>
          <div class="card-footer justify-content-center mt-3">
            <button
              type="submit"
              class="btn btn-info  btn-lg btn-block"
              :disabled="!!form.button"
            >
              <i class="material-icons mr-3">login</i>
              Vamos lá
            </button>
          </div>
          <p class="copyright">
            &copy;
            {{ year }} suaagendafacil.com.br
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swal from 'sweetalert2'

export default Vue.extend({
  data () {
    return {
      passwordFieldType: 'password',
      year: new Date().getFullYear(),
      form: {
        email: 'cerulo@gmail.com',
        senha: '123456',
        button: false
      }
    }
  },
  watch: {},
  created () {
    // this.fetchSomething()
    // console.log('*********************')
    // console.log(this.$store.state.token)
  },
  methods: {
    // async fetchSomething () {

    //   console.info(await this.$axios.post('http://10.17.6.20:3890', {
    //       'username':'fabriram',
    //       'password':'KNNvizinhos#2021'
    //     }, {
    //     headers: { 'Content-Type': 'application/json' }
    //   }))
    // },
    switchVisibility () {
      this.passwordFieldType =
        this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    submitForm (_event: any): void {
      this.form.button = true
      const obj = this

      obj.$nuxt.$loading.start()
      const email = this.form.email
      const senha = this.form.senha

      if (email === '') {
        this.$nuxt.$loading.finish()
        this.form.button = false

        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Oops...',
          text: 'Digite seu email!'
        })
      } else if (senha === '') {
        this.$nuxt.$loading.finish()
        this.form.button = false

        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Oops...',
          text: 'Digite sua senha!'
        })
      } else {
        // Faz o login
        this.$axios
          .post(
            '/login',
            {
              email,
              senha
            },
            { headers: { 'Content-Type': 'application/json' } }
          )
          .then(function (response): void {
            localStorage.setItem('token', JSON.stringify(response.data))
            setTimeout(() => obj.$nuxt.$loading.finish(), 1000)
            obj.form.button = false
            location.href = '/dashboard'
          })
          .catch(() => {
            obj.form.senha = ''
            obj.form.button = false

            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Oops...',
              text: 'Usuário não autorizado!'
            })
          })
      }
    }
  }
})
</script>

<style scoped>
.CardAnimation {
  animation: s appear;
  margin: auto;
}
.copyright{
  padding-left: 1.5em;
  font-size: 1.2em;
  font-weight: 600;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
