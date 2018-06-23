
<script>
export default {
  data () {
    return {
      error: null
    }
  },
  mounted () {
    this.$bus.$on('error-captured', error => {
      this.error = error
    })
    this.$bus.$on('reset-errors', () => {
      this.error = null
    })
  },
  computed: {
    currentError () {
      if (this.error == null) {
        return 'none'
      }
      if (this.error.message === 'Network Error') {
        return 'network'
      }
      if (this.error.response.status === 422) {
        return '422'
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="alert alert-danger" v-if="currentError == 'network'">
      Serviço fora do ar. Pedimos desculpas pelo inconveniente.
    </div>
    <div class="alert alert-warning" v-if="currentError == '422'">
      E-mail ou senha incorreto
    </div>
  </div>
</template>
