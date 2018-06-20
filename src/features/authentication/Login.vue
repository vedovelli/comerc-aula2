
<script>
export default {}
</script>

<template>
  <div>
    <div class="panel panel-default panel-login">
      <div class="panel-heading">
        <h4>Bem vindo a Comerc</h4>
      </div>
      <form action="#" class="panel-body">
        <div class="form-group">
          <div class="control-label">E-mail</div>
          <input type="email" class="form-control">
        </div>
        <div class="form-group">
          <div class="control-label">Senha</div>
          <input type="password" class="form-control">
        </div>
        <button class="btn btn-block btn-primary">Acessar</button>
        <p class="password-link">
          <router-link :to="{ name: 'password.index' }">Esqueci minha senha</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style src="./styles.css"></style>
