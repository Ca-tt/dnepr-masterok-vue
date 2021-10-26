<template>
  <div id="app">
    <Header />
    <Title />
    <MasterCall />
    <Services />
    <SectionB />
    <Advantages />
    <Note />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MasterCall from './components/MasterCall.vue'
import Services from './components/Services.vue'
import SectionB from './components/SectionB.vue'
import Advantages from './components/Advantages.vue'
import Note from './components/Note.vue'
import Footer from './components/Footer.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    Header,
    MasterCall,
    Services,
    SectionB,
    Advantages,
    Note,
    Footer,
    Title
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
