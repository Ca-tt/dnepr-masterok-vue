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
    <!-- <Check /> -->
  </div>
</template>

<script>
import Header from './components/sections/Header.vue'
import MasterCall from './components/MasterCall.vue'
import Services from './components/Services.vue'
import Metrics from './components/sections/Metrics.vue'
import Preferences from './components/Preferences.vue'
import Note from './components/Note.vue'
import Call from './components/Call.vue'
import Footer from './components/Footer.vue'
import Title from './components/Title.vue'
// import Check from './php/Check.php'

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
    // Check,
  },
}
</script>

<style lang="scss">
/*
  below listed
  Default Page Styles for
  - body
  - styles for mobile responsiveness

*/

// TODO: подключить локальные шрифты.
// А пока и так сойдет =)
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');
@import './scss/app/colors';
@import './scss/layout/media-querries';

$default-page-text-alignment: center;
$default-page-color: $light-grey;

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  color: $default-page-color;

  @include to-desktop {
    text-align: $default-page-text-alignment;
  }
}

body,
figure {
  margin: 0;
}

:is(h1, h2, h3, h4, h5, h6) {
  margin: 0;
}

</style>
