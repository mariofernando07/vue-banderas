<template>
  <div class="text-center">
    <h3>Filtrar por continentes</h3>
    <div class="btn-group">
      <button class="btn btn-dark" @click="filtrar('Americas')">AM</button
      ><button class="btn btn-dark" @click="filtrar('Europe')">EU</button
      ><button class="btn btn-dark" @click="filtrar('Asia')">AS</button
      ><button class="btn btn-dark" @click="filtrar('Oceania')">OC</button
      ><button class="btn btn-dark" @click="filtrar('Africa')">AF</button
      ><button class="btn btn-dark" @click="filtrar('')">ALL</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const filtrar = (region) => {
      store.dispatch('filtrarRegion', region)
    };
    return {
      filtrar,
    };
  },
};
</script>

<style>
</style>