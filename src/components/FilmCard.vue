<template>
  <li>
    <img :src="this.store.locandina + filmcard.poster_path" alt="`/vite.svg`" />
    <h3>TIPOLOGIA: {{ sezione }}</h3>
    <h3>TITOLO: {{ filmcard.title }}</h3>
    <h4>TITOLO ORIGINALE: {{ filmcard.original_title }}</h4>
    <p>
      <img
        :src="getFlag(filmcard.original_language)"
        :alt="filmcard.original_language"
      />
    </p>
    <p>VOTO: {{ filmcard.vote_average }}</p>
    <p>DESCRIZIONE: {{ filmcard.overview }}</p>
  </li>
</template>

<script>
import store from "../store";
export default {
  props: {
    filmcard: {
      type: Object,
      required: true,
    },
  },
  components: {
    // **************************
    // FINE COMPONETS
  },
  // **************************
  data() {
    return {
      store,
      sezione: "film",
      // **************************
      // FINE DATA E RETURN &
    };
  },
  // **************************
  computed: {
    film() {
      return this.store.film;
    },
    serieTV() {
      return this.store.serieTv;
    },

    // **************************
    // FINE COMPUTED
  },
  // **************************
  watch: {
    // **************************
    // FINE WATCH
  },
  // **************************
  methods: {
    getFlag(language) {
      switch (language) {
        case `it`:
          return "/flag/it.png";
        case `es`:
          return "/flag/es.png";
        case `fr`:
          return "/flag/fr.png";
        case `en`:
          return "/flag/gb.png";
        case `ja`:
          return "/flag/jp.png";
        case `us`:
          return "/flag/us.png";
      }
    },

    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped>
@use "../style/partials//variables" as *;
</style>
