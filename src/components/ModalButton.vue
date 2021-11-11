<template>
  <button class="button is-modal-opener"> {{ text }} </button>
</template>

<script>
export default {
  name: "ModalButton",
  props: ['text'],
}
</script>

<style lang="scss" scoped>
@import '../scss/app/colors';


.button {

  &.is-modal-opener {
    font-size: 1em;
    cursor: pointer;
    color: white;
    background-color: $orange;
    border: none;
    padding: 18px 46px;
    border-radius: 30px;

    &:hover {
      text-decoration: none;
      color: white;
      background-color: rgb(255, 203, 59);
    }
  }
}

</style>