<template>
  <div class="container">
    <LangButton />
    <Header />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/Header'
import LangButton from './components/LangButton'
export default {
  name: 'App',
  components: {
    LangButton,
    Header
  },
  computed: {
    ...mapState(['language'])
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
  max-width: 1200px;
}

.container {
  justify-self: center;
  justify-items: center;
  max-width: 1200px;
}
</style>
