<template lang="pug">

  .column
    slot

</template>

<script>
export default {
  name: "Column"
}
</script>

<style lang="sass">
@import '../../scss/layout/media-querries.scss'

.column

  @include mobile-only
    margin: 0 auto

// when inside a row with columns between
:is(.row.columns-between,
    .row.columns-between-tablet,
    .row.columns-between-desktop)

  .column

    &.left-column
      flex: 1 0 30%

    &.right-column
      flex: 1 1 70%
      text-align: center

      @include from-tablet
        display: flex
        justify-content: flex-end

</style>