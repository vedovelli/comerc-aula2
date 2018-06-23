
<script>
import ComercTopBar from '@c/top-bar'
import ComercErrors from '@c/errors'
export default {
  name: 'Comerc',
  components: {
    ComercTopBar,
    ComercErrors
  }
}
</script>

<template>
  <div id="app">
    <comerc-top-bar/>
    <comerc-errors />
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
