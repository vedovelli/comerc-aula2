
<script>
import swal from 'sweetalert'
import { setToken } from '@s/local'
export default {
  data () {
    return {
      email: 'vedovelli@gmail.com',
      password: '123456'
    }
  },
  methods: {
    submit () {
      const { email, password } = this
      this.$http
        .post('/autenticacao', { email, password })
        .then(res => {
          setToken(res.data.token).then(() => {
            this.$router.push({ name: 'products.index' })
          })
        }).catch(res => {
          swal(res.response.data.error).then(() => {
            this.$refs.emailField.focus()
          })
        })
    }
  }
}
</script>

<template>
  <div>
    <div class="panel panel-default panel-login">
      <div class="panel-heading">
        <h4>Bem vindo a Comerc</h4>
      </div>
      <form action="#" class="panel-body" @submit.prevent="submit">
        <div class="form-group">
          <div class="control-label">E-mail</div>
          <input ref="emailField" type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <div class="control-label">Senha</div>
          <input type="password" class="form-control" v-model="password">
        </div>
        <button class="btn btn-block btn-primary" type="submit">Acessar</button>
        <p class="password-link">
          <router-link :to="{ name: 'password.index' }">Esqueci minha senha</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped src="./styles.css"></style>
