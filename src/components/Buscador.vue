<template>
  <input
    type="text"
    class="form-control"
    placeholder="Ingrese país"
    v-model="texto"
    @keyup="search"
  />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {

    const store = useStore()
    const texto = ref("");

    const search = () => {
      store.dispatch('filtrarNombre', texto.value)
    };

    return {
      texto,
      search,
    };
  },
};
</script>

<style>
</style>