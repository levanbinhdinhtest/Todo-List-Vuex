<template>
  <header></header>
  <main>
    <app-modal/>
  </main>
  <footer></footer>
</template>

<script>
import AppModal from './components/AppModal.vue'

export default {
  name: 'App',
  components: {
    AppModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
