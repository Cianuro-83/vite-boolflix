<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
  <input
    @keyup.enter="prendiFilm"
    v-model="store.cerca"
    placeholder="cerca il film che vuoi guardare"
    type="text"
  />
</template>

<script>
import store from "../store";
export default {
  components: {
    // **************************
    // FINE COMPONETS
  },
  // **************************
  data() {
    return {
      title: "BOOLFLIX",
      store,
      // **************************
      // FINE DATA E RETURN &
    };
  },
  // **************************
  computed: {
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
    prendiFilm() {
      const film = this.store.film;
      const serieTv = this.store.serieTv;
      console.log("ecco i film", film);
      console.log("e queste sono le serie tv", serieTv);

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=334a4b12c0bb527b7ae4435b92cde0a1&query=ritorno+al+futuro`
        )
        .then((response) => {
          console.log(res);
          console.log(res.data);
        });
    },
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped></style>
