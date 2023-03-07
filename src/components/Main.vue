<template>
  <div>
    <Header />
  </div>
  <ul>
    <li v-for="film in this.store.film" :key="film.id">
      <div>TITOLO: {{ film.title }}</div>
      <div>TITOLO ORIGINALE: {{ film.original_title }}</div>
      <div>LINGUA: {{ film.original_language }}</div>
      <div>VOTO: {{ film.vote_average }}</div>
    </li>
  </ul>
</template>

<script>
import Header from "./Header.vue";
import store from "../store";
export default {
  components: {
    Header,
    // **************************
    // FINE COMPONETS
  },
  // **************************
  data() {
    return {
      store,
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
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped></style>
