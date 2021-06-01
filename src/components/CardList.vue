<template>
  <div class="row">
    <div class="col-12 mb-2" v-for="pais in paises" :key="pais.name">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  setup(props, ctx) {
    const store = useStore();

    const paises = computed(() => store.getters.topPaisesPoblacion);

    onMounted(async () => {
      await store.dispatch("getPaises");
      await store.dispatch('filtrarRegion','Americas')
    });

    return {
      paises,
    };
  },
};
</script>

<style>
</style>