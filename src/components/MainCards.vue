<script setup>
import MainCardSingle from './MainCardSingle.vue'
</script>

<template>
  <div class="grid">
    <MainCardSingle v-for="n in 12" :key="n" />
  </div>
</template>

<style scoped>
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
  gap:16px; padding:16px;
}
</style>
