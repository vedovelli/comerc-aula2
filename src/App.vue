
<script>
import ComercTopBar from '@c/top-bar'
export default {
  name: 'Comerc',
  components: {
    ComercTopBar
  }
}
</script>

<template>
  <div id="app">
    <comerc-top-bar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  body {
    margin-top: 70px;
  }
</style>
