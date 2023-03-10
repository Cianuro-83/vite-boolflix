<template>
  <div class="main">
    <img :src="getHero()" />
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
    getHero() {
      if (this.store.film === [] && this.store.serieTv === []) {
        console.log(`poi`, this.store.film);
        return "/herotrasparent.png";
      }
    },
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped>
.hero {
  margin: 0 auto;
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 80px;
}
.invisible {
  display: none;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.main {
  padding: 250px 50px 20px 50px;
}
</style>
