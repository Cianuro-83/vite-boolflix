<template>
  <div class="main">
    <ul class="grid">
      <FilmCard
        v-for="film in this.store.film"
        :key="film.id"
        :filmcard="film"
      />
      <TvCard v-for="tv in this.store.serieTV" :key="tv.id" :tvcard="tv" />
    </ul>
  </div>
</template>

<script>
import store from "../store";
import FilmCard from "./FilmCard.vue";
import TvCard from "./TvCard.vue";
export default {
  components: {
    FilmCard,
    TvCard,
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.main {
  padding: 250px 50px 20px 50px;
}
</style>
