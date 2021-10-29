<template>
  <figure class="card">
    <div class="card-icon">
      <font-awesome-icon :icon="card.icon" />
    </div>
    <h2 class="card-title">{{ card.title }}</h2>
    <h3 class="card-text">{{ card.text }}</h3>
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

<style scoped>

</style>