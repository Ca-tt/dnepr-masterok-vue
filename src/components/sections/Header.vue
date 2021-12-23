<template>
  <header class="site-header">

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
          <!-- <MultiLanguage></MultiLanguage> -->
        </Column>
      </Row>
      <!-- right column end-->
    </Container>
  </header>
</template>

<style lang="scss" scoped>
@import '../../scss/layout/helpers';

$header-padding: .5em 0;
$header-font-color: white;

.site-header {
  padding: $header-padding;
  background-color: rgba(48, 120, 255, 0.657);
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

// .header-icon {
//   padding: 0;
//   font-size: 18px;
//   color: #999;
//   margin-right: 10px;
// }



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
// import MultiLanguage from '@/components/MultiLanguage.vue'
import Container from '../layout/Container';
import Row from "@/components/layout/Row";
import Column from "@/components/layout/Column";
import CardIsHorizontal from "@/components/cards/HorizontalCard";

export default {
  name: "Header",
  components: {
    CardIsHorizontal,
    Column,
    Row,
    Container,
    // MultiLanguage,
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
          text: '067 135 15 47',
          link: true,
        },
        {
          title: '',
          text: '099 053 88 64',
          link: true,
        },
      ]
    }
  }
};
</script>
