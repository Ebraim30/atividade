<script setup>
import { useCounterStore } from "@/stores/counter";
const counterStore = useCounterStore();

</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <h2>contador:{{ counterStore.count }}</h2>
    <h2>contador:{{ counterStore.doubleCount }}</h2>
    <button @click="counterStore.increment">+</button>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
