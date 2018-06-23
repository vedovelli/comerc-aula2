
<script>
import chunk from 'lodash/chunk'
import notificationMixin from '@m/notifications'
export default {
  name: 'Products',
  mixins: [notificationMixin],
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.$bus.$on('product-inserted', ({ product }) => {
      this.list.unshift(product)
    })
    this.fetch()
  },
  methods: {
    fetch () {
      this.$http.get('/produto').then(res => {
        this.list = res.data.products.reverse()
      })
    }
  },
  computed: {
    hasProducts () {
      return this.list.length > 0
    },
    pages () {
      return chunk(this.list, 30)
    }
  }
}
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
    <table v-if="hasProducts" class="table table-bordered table-stripped table-hover">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Produto</th>
          <th class="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for ="product in pages[0]" :key="product.id">
          <td width="75" class="text-center">{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td width="150" class="text-center">
            [ <router-link :to="{ name: 'products.form', params: { id: product.id } }">editar</router-link> ]
            [ <a href="#" @click.prevent="confirm({ message: `Whatever ${product.name}`, route: `/produto/${product.id}` })">excluir</a> ]
          </td>
        </tr>
      </tbody>
    </table>
    <h3 v-else>Não há ainda produtos cadastrados!</h3>
  </div>
</template>

<style scoped>
  h1 {
    margin-bottom: 30px;
  }
</style>
