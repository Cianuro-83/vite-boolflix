<template>
  <div>
    <Header />
  </div>
  <ul>
    <li v-for="film in this.store.film" :key="film.id">
      <h3>TITOLO: {{ film.title }}</h3>
      <h4>TITOLO ORIGINALE: {{ film.original_title }}</h4>
      <p>
        <img :src="bandiera(film.original_language)" alt="" />
      </p>
      <p>VOTO: {{ film.vote_average }}</p>
      <p>DESCRIZIONE: {{ film.overview }}</p>
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
    bandiera(language) {
      if (language === "it") {
        return "/flag/it.png";
      }
    },
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped></style>
