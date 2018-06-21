
<script>
export default {}
</script>

<template>
  <div>
    <h1>
      <div class="row">
        <div class="col-md-6">Produtos</div>
        <div class="col-md-6 text-right">
          <router-link class="btn btn-primary btn-xs" :to="{ name: 'products.form' }">Novo Produto</router-link>
        </div>
      </div>
    </h1>
    <router-view/>
    <table class="table table-bordered table-stripped table-hover">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Produto</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="75" class="text-center">100</td>
          <td>Nome do Produto</td>
          <td width="150" class="text-center">
            [ <router-link :to="{ name: 'products.form', params: { id: 100 } }">editar</router-link> ]
            [ <a href="#">excluir</a> ]
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  h1 {
    margin-bottom: 30px;
  }
</style>
