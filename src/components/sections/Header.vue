<template>
  <header id="site-header"  class="site-header">

    <Container>
      <Row class="columns-between">

        <!-- left column -->
        <Column class="column left-column">
          <CardIsHorizontal :card="cards[0]"></CardIsHorizontal>
        </Column>

        <!-- right column -->
        <Column class="column right-column">
          <CardIsHorizontal :card="cards[1]"></CardIsHorizontal>
          <CardIsHorizontal :card="cards[2]"></CardIsHorizontal>
          <CardIsHorizontal :card="cards[3]"></CardIsHorizontal>
        </Column>
      </Row>
      <!-- right column end-->
    </Container>
  </header>
</template>

<style lang="sass" scoped>
@import '../../scss/layout/helpers'

$header-padding: .5em 0
$header-font-color: white
$header-background: #485D7D

.site-header 
  padding: $header-padding
  background-color: $header-background
  color: $header-font-color

.card 
  max-width: 100%

.clock 
  max-width: 18px

.site-header,
a 
  color: white

@media (max-width: 767px) 
  header 
    display: none
</style>

<script>
import Container from '../layout/Container';
import Row from "./../../components/layout/Row";
import Column from "./../../components/layout/Column";
import CardIsHorizontal from "./../cards/HorizontalCard";

export default {
  name: "Header",
  components: {
    CardIsHorizontal,
    Column,
    Row,
    Container,
  },
  data() {
    return {
      cards: [
        {
          title: '',
          text: 'Відкриваємо замки будь-якої складності',
        },
        {
          title: '',
          text: 'Працюємо цілодобово',
        },
        {
          title: '',
          text: this.$phoneNumbers.vodafone,
          link: this.$phoneNumbersLinks.vodafone,
        },
        {
          title: '',
          text: this.$phoneNumbers.kievstar,
          link: this.$phoneNumbersLinks.kievstar,
        },
      ]
    }
  }
};
</script>
