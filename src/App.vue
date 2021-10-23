<template>
  <div id="app">
    <Header />
    <Mastercall />
    <Services />
    <SectionB />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Mastercall from './components/Mastercall.vue'
import Services from './components/Services.vue'
import SectionB from './components/SectionB.vue'

export default {
  name: 'App',
  components: {
    Header,
    Mastercall,
    Services,
    SectionB
  }
}
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
