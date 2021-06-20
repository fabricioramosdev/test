import state from './state'

export default {
  increment (state) {
	 state.counter++
  },
  setNumero (state, numero) {
	  state.numero = numero
  },
  setClass (state, text) {
    state.bodyClass = text
  },
  setAuthenticated (state, status) {
    state.authenticated = status
  }
}
