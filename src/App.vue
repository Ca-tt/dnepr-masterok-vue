<template>
  <Header />
  <SectionA />
  <Section />
</template>

<script>
import Header from './components/Header.vue'
import SectionA from './components/SectionA.vue'
import Section from './components/Section.vue'

export default {
  name: 'App',
  components: {
    Header,
    SectionA,
    Section
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
