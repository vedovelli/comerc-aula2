
<script>
export default {}
</script>

<template>
  <div>
    <div class="panel panel-default panel-login">
      <div class="panel-heading">
        <h4>Redefinir senha</h4>
      </div>
      <form action="#" class="panel-body">
        <div class="form-group">
          <div class="control-label">Informe o e-mail do seu cadastro:</div>
          <input type="email" class="form-control">
        </div>
        <button class="btn btn-block btn-primary">Enviar link para reset</button>
        <p class="password-link">
          <router-link :to="{ name: 'login.index' }">Voltar</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped src="./styles.css"></style>
