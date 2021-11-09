<template>
  <div id="app">
    <Header />
    <Title />
    <MasterCall />
    <Services />
    <SectionB />
    <!-- <Metrics /> -->
    <Preferences />
    <Note />
    <Call />
    <Footer />
    <ModalWindow/>
  </div>
</template>

<script>
import Header from './site-sections/Header.vue'
import MasterCall from './components/MasterCall.vue'
import Services from './components/Services.vue'
import SectionB from './components/SectionB.vue'
// import Metrics from './site-sections/Metrics.vue'
import Preferences from './components/Preferences.vue'
import Note from './components/Note.vue'
import Call from './components/Call.vue'
import Footer from './components/Footer.vue'
import Title from './components/Title.vue'
import ModalWindow from "./components/ModalWindow.vue"

export default {
  name: 'App',
  components: {
    Header,
    MasterCall,
    Services,
    SectionB,
    // Metrics,
    Preferences,
    Note,
    Footer,
    Title,
    Call,
    ModalWindow
  }
}
</script>

<style lang="scss">

@import "./scss/app/defaults";
@import "./../node_modules/typeface-roboto/index.css"

</style>
