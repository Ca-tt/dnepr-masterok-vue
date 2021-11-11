<template lang="pug">

  section.row
    slot

</template>

<script>

export default {
  name: 'Row',
}

</script>

<style lang="sass" scoped>
@import './../../scss/layout/media-querries.scss'

/* Column configs */
$left-column-width: 100%

$right-column-width: 100%
$right-column-display: flex


//
  Site section
  Horizontal line that contains columns
  Starts from {display:block} on mobile device
  Transforms into a flex block from a tablet resolution

.row
  display: block

  @include from-tablet
    display: flex
    align-items: center

  &.columns-centered

    &-mobile
      @include mobile-only
        .column
          margin: 0 auto 2rem auto

  // enables only from tablet
  &.columns-between
    justify-content: space-between

    &-tablet
      @include from-tablet
        justify-content: space-between

    &-desktop
      @include from-desktop
        justify-content: space-between



//
  TODO:
  - add left column and right column



</style>