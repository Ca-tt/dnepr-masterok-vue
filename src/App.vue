<template>
  <div id="app">
    <Header />
    <Title />
    <MasterCall />
    <Services />
    <Metrics />
    <Preferences />
    <Note />
    <Call />
    <Footer />
  </div>
</template>

<script>
import Header from './site-sections/Header.vue'
import MasterCall from './components/MasterCall.vue'
import Services from './components/Services.vue'
import Metrics from './site-sections/Metrics.vue'
import Preferences from './components/Preferences.vue'
import Note from './components/Note.vue'
import Call from './components/Call.vue'
import Footer from './components/Footer.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    Header,
    MasterCall,
    Services,
    Metrics,
    Preferences,
    Note,
    Footer,
    Title,
    Call,
  },
}
</script>

<style lang="scss">

@import "./scss/app/defaults";
// TODO: подключить локальные шрифты.
// А пока и так сойдет =)
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');

</style>
