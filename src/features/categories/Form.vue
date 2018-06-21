
<script>
export default {}
</script>

<template>
  <form action="#" class="well">
    <div class="form-group">
      <div class="control-label">Nome da Categoria</div>
      <input type="text" class="form-control">
    </div>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-default" :to="{ name: 'categories.index' }">Cancelar</router-link>
      </div>
      <div class="col-md-6 text-right">
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>
    </div>
  </form>
</template>
