
<script>
import swal from 'sweetalert'
import { required, alphaNum } from 'vuelidate/lib/validators'
export default {
  mounted () {
    this.$http.get('/categoria').then(res => {
      this.categories = res.data.categories
    })
  },
  data () {
    return {
      categories: [],
      product: {
        name: '',
        category_id: ''
      }
    }
  },
  validations: {
    product: {
      name: {
        required,
        alphaNum
      },
      category_id: {
        required
      }
    }
  },
  computed: {
    formInvalid () {
      return this.$v.$dirty && this.$v.$invalid
    }
  },
  methods: {
    submit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$http.post('produto', this.product).then(res => {
        swal('Produto inserido com sucesso').then(() => {
          const { product } = res.data
          this.$bus.$emit('product-inserted', { product, a: 'whatever', b: 'another thing' })
          this.$router.push({ name: 'products.index' })
        })
      })
    }
  }
}
</script>

<template>
  <form action="#" class="well" @submit.prevent="submit">
    <div class="alert alert-danger alert-dismissible" role="alert" v-if="formInvalid">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <strong>Atenção!</strong> Favor preencher todos os campos obrigatórios.
    </div>
    <div
      class="form-group"
      :class="{ 'has-error': $v.product.category_id.$dirty && $v.product.category_id.$invalid }">
      <div class="control-label">Categoria</div>
      <select class="form-control" v-model="product.category_id">
        <option selected="selected"></option>
        <option
          v-for="category in categories"
          :value="category.id"
          :key="category.id">{{ category.name }}</option>
      </select>
    </div>
    <div
      class="form-group"
      :class="{ 'has-error': $v.product.name.$dirty && $v.product.name.$invalid }">
      <div class="control-label">Nome do Produto</div>
      <input
        type="text"
        class="form-control"
        @input="$v.product.name.$touch()"
        v-model="product.name">
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
