
<script>
  export default {
    props: {
      produto: {
        type: Object,
        default: {
          id: '',
          name: '',
          category: ''
        }
      }
    }
  }
</script>

<template>
  <form action="#" class="well">
    <div class="form-group">
      <div class="control-label">Nome do Produto</div>
      <input type="text" class="form-control" v-model="produto.name">
    </div>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-default" :to="{ name: 'products.index' }">Cancelar</router-link>
      </div>
      <div class="col-md-6 text-right">
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>
    </div>
  </form>
</template>
