
<script>
import { removeToken } from '@s/local'
export default {
  data () {
    return {
      hasToken: false
    }
  },
  mounted () {
    this.$bus.$on('logged-in', () => {
      this.hasToken = true
    })
  },
  methods: {
    logout () {
      removeToken().then(() => {
        this.hasToken = false
        this.$router.push({ name: 'login.index' })
      })
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="{ name: 'dashboard.index' }">Comerc</router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-left">
          <!--https://router.vuejs.org/api/#applying-active-class-to-outer-element-->
          <router-link v-show="hasToken" tag="li" :to="{ name: 'products.index' }"><a>Produtos</a></router-link>
          <router-link v-show="hasToken" tag="li" :to="{ name: 'categories.index' }"><a>Categorias</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right" v-show="hasToken">
          <li><a href="#" @click.prevent="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
