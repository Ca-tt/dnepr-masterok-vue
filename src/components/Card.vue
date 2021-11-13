<template>

    <!-- TODO: wrap every card with a column component -->

    <!-- Card template-->
    <figure class="column card">

      <!-- icon (required) -->
      <header class="card-icon">
        <font-awesome-icon :icon="card.icon"/>
      </header>

      <!-- headline (optional) -->
      <main class="card-title">{{ card.title }}</main>

      <!-- subheading or text (required) -->
      <figcaption
          class="card-text">{{ card.text }}</figcaption>

    </figure>

</template>

<script>

export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/app/colors';
@import '../scss/layout/media-querries';

// TODO: refactor and gather old styles and new
$cards-section-padding: 30px 0;

$card-icon-size: 50px;
$card-color: $grey;

// card configs (general)
$default-card-padding: .25em;

// icon configs
$mobile-icon-size: 25px;
$desktop-icon-size: 20px;

// text config (subtitle)
$mobile-font-size: 17px;
$desktop-font-size: 17px;

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

  // карточки в Metrics
  &.is-vertical {

    @include to-desktop {
      max-width: 50%;
      margin: 0 auto 2rem auto;
    }

    text-align: center;
      color: $card-color;

    // change card width as screen getting bigger
    @media screen and (min-width: $tablet) {
      width: 50%;
    }
    @media screen and (min-width: $desktop) {
      width: auto;
    }

    .card-icon {
      font-size: $card-icon-size;
      margin: 0 0 2rem 0;
    }

    .card-title {
      font-size: 2rem;
      margin: 0 0 1rem 0;
    }

    .card-text {
      color: #f5ac00;
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

}

</style>