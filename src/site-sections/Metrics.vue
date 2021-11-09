<template>
  <section class="cards has-four-cards metrics">
    <Card v-for="card in cards" :key="card.icon" :card="card" class="is-horizontal"/>
  </section>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'Metrics',
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        {
          icon: 'truck',
          title: '20 мин',
          text: 'ПРИБЫТИЕ МАСТЕРА',
        },
        {
          icon: 'lock-open',
          title: 'до 30 мин',
          text: 'ОТКРЫТИЕ ЗАМКА',
        },
        {
          icon: 'check-circle',
          title: '100%',
          text: 'РЕЗУЛЬТАТ',
        },
        {
          icon: 'user-circle',
          title: 'на 100%',
          text: 'ОФИЦИАЛЬНО',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../scss/app/colors';
@import './../scss/layout/breakpoints';


// TODO: refactor and gather old styles and new
$cards-section-padding: 30px 0;

$card-icon-size: 40px;
$card-color: $grey;

.cards {
  padding: $cards-section-padding;

  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media screen and (min-width: $desktop) {
    justify-content: space-around;
  }

  .card {
    margin: 0;
    color: $card-color;

    // change card width as screen getting bigger
    @media screen and (min-width: $tablet) {
      width: 50%;
    }
    @media screen and (min-width: $desktop) {
      width: auto;
    }

    &-icon {
      font-size: $card-icon-size;
    }

    &-title {

    }

    &-text {
      color: #f5ac00;
    }
  }
}

</style>
