
<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="{ name: 'dashboard.index' }">Comerc</router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <!--https://router.vuejs.org/api/#applying-active-class-to-outer-element-->
          <router-link tag="li" :to="{ name: 'products.index' }"><a>Produtos</a></router-link>
          <router-link tag="li" :to="{ name: 'categories.index' }"><a>Categorias</a></router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
