<template>
  <!-- TODO: wrap every card with a column component -->

  <!-- Card template-->
  <a class="card-link" :href="card.link">

    <figure class="column card is-horizontal">

      <!-- icon (required) -->
      <header class="card-icon">
        <font-awesome-icon :icon="card.icon"/>
      </header>

      <!-- subheading or text (required) -->
      <figcaption class="card-text">
        {{ card.text }}
      </figcaption>

    </figure>
  </a>
</template>

<script>
export default {
  name: 'CardIsHorizontal',
  props: {
    card: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/app/colors';
@import '../../scss/layout/media-querries';

// TODO: refactor and gather old styles and new
$cards-section-padding: 30px 0;

$card-icon-size: 50px;
$card-color: white;

// card configs (general)
$default-card-padding: .25em;

// icon configs
$mobile-icon-size: 25px;
$desktop-icon-size: 20px;

// text config (subtitle)
$mobile-font-size: 17px;
$desktop-font-size: 17px;


.card-link {
  color: $card-color;
  text-decoration: none;
}

.card {
  // карточки в хедере
  &.is-horizontal {

    .card-icon {
      padding: $default-card-padding;
      font-size: $mobile-icon-size;
    }

    .card-text {
      padding: $default-card-padding;
      font-size: $mobile-font-size;
    }

    @include from-desktop {
      display: flex;
      align-items: center;

      .card-icon {
        font-size: $desktop-icon-size;
      }

      .card-text {
        font-size: $desktop-font-size;
      }
    }
  }
}
</style>