<template>
  <header class="site-header">

    <Container>
      <Row class="columns-between">

        <!-- left column -->
        <Column class="column left-column">

          <Card :card="cards[0]" class="is-horizontal"></Card>

        </Column>

        <!-- right column -->
        <Column class="column right-column">

          <Card :card="cards[1]" class="is-horizontal"></Card>
          <Card :card="cards[2]" class="is-horizontal"></Card>
          <Card :card="cards[3]" class="is-horizontal"></Card>

        </Column>
      </Row>
      <!-- right column end-->
    </Container>
  </header>
</template>

<style lang="scss" scoped>
@import './../scss/layout/helpers';

$header-padding: .5em 0;
$header-font-color: white;

.site-header {
  padding: $header-padding;
  background-color: #222;
  color: $header-font-color;
}

.card {
  max-width: 100%;
}

//.left-column {
//  flex: 1 0 25%;
//}
//
//.right-column {
//  justify-content: flex-end;
//  align-items: center;
//}

.header-icon {
  padding: 0;
  font-size: 18px;
  color: #999;
  margin-right: 10px;
}

.clock {
  max-width: 18px;
}

.site-header,
a {
  color: white;
}

@media (max-width: 767px) {
  header {
    display: none;
  }
}
</style>

<script>
import Container from '../components/layout/Container';
import Card from '../components/Card';
import Row from "@/components/layout/Row";
import Column from "@/components/layout/Column";

export default {
  name: "Header",
  components: {
    Column,
    Row,
    Container,
    Card,
  },
  data() {
    return {
      cards: [
        {
          icon: 'lock',
          title: '',
          text: 'Открываем замки любой сложности',
        },
        {
          icon: 'clock',
          title: '',
          text: 'Работаем круглосуточно',
        },
        {
          icon: 'mobile',
          title: '',
          text: '067 135 15 47',
        },
        {
          icon: 'mobile',
          title: '',
          text: '099 053 88 64',
        },
      ]
    }
  }
};
</script>
