<template>
  <div>
    <Header />
  </div>
  <ul class="grid">
    <FilmCard v-for="film in this.store.film" :key="film.id" :filmcard="film" />
  </ul>
</template>

<script>
import Header from "./Header.vue";
import store from "../store";
import FilmCard from "./FilmCard.vue";
export default {
  components: {
    Header,
    FilmCard,
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

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
