<template>
  <div class="card" :style="{'background-color': '#f6f6fa'}">
    <div class="card-body">
      <h5 class="text-center">{{ pais.name }}</h5>
      <p class="text-center">
        <img class="img-fluid w-50" :src="pais.flag" :alt="`${pais.name} flag`">
      </p>
      <p class="card-text">
        <span class="badge badge-dark d-block mb-1">
          Nativename: {{ pais.nativeName }}</span
        >
        <span class="badge badge-info d-block mb-1 p-3">
          Population: {{ numeroFormat(pais.population) }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >Capital: {{ pais.capital }}</span
        >
        <span class="badge badge-dark d-block mb-1"
          >Region: {{ pais.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pais: {
      type: Object,
    },
  },
  setup() {
    const numeroFormat = (num) => {
      return new Intl.NumberFormat('de-DE').format(num);
    };

    return {
      numeroFormat,
    };
  },
};
</script>

<style>
</style>