<template lang="pug">

  .column
    slot

</template>

<script>
export default {
  name: "Column"
}
</script>

<style lang="sass" scoped>

.column
  margin: 0 auto

  // when inside a row with columns between
  .row.columns-between &

    &.left-column
      flex: 1 1 25%

    &.right-column
      flex: 1 1 50%
      display: flex
      justify-content: flex-end

</style>