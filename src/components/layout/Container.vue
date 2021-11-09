<template>
  <main class="container">
    <slot></slot>
  </main>
</template>


<style lang="scss">
/*

  Classes, used in module:
 * .container
 * .container-has-columns-between
 * .left-column
 * .right-column

*/
@import "../../scss/layout/layout";

/* Container configs */
$container-paddings: 0 1rem;

/* Column configs */
$left-column-width: 100%;
$right-column-width: 100%;

$right-column-display: flex;

.container {
  @extend .is-centered;
  padding: $container-paddings;

  @include from-tablet {
    max-width: 90%;
  }

  @include from-large-desktop {
    max-width: 70%;
  }

  // TODO: refactor code repetition

  // starting from tablet
  &.has-columns-between-tablet {

    @include from-tablet {
      display: flex;
      justify-content: space-between;

      .left-column {
        max-width: $left-column-width;
      }

      .right-column {
        max-width: $right-column-width;
      }
    }
  }

  // starting from tablet
  &.has-columns-between-desktop {

    @include from-desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-column {
        max-width: $left-column-width;
      }

      .right-column {
        display: $right-column-display;
        max-width: $right-column-width;
      }
    }
  }

}
</style>

<script>
export default {
  name: "Container",
};
</script>