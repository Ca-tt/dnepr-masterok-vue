<template>

  <!-- Card template-->
  <figure class="card">

    <!-- icon (required) -->
    <header class="card-icon">
      <font-awesome-icon :icon="card.icon"/>
    </header>

    <!-- headline (optional) -->
    <main class="card-title">{{ card.title }}</main>

    <!-- subheading or text (required) -->
    <figcaption class="card-text">{{ card.text }}</figcaption>

  </figure>

</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/app/colors';
@import '../scss/layout/media-querries';

// card configs (general)
$default-card-padding: .25em;

// icon configs
$mobile-icon-size: 25px;
$desktop-icon-size: 20px;

// text config (subtitle)
$mobile-font-size: 17px;
$desktop-font-size: 17px;

.card {

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