<template>
  <input
    @keyup.enter="prendiFilm"
    v-model="store.cerca"
    placeholder="cerca il film che vuoi guardare"
    type="text"
  />
</template>

<script>
import store from "../store";
import axios from "axios";
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
    prendiFilm() {
      const serieTv = this.store.serieTv;
      const cerca = this.store.cerca;

      console.log("e queste sono le serie tv", serieTv);

      axios
        .get(`https://api.themoviedb.org/3/search/movie?`, {
          params: {
            api_key: this.store.api_key,
            query: cerca,
            language: this.store.language,
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.store.film = res.data.results;
          console.log("film nello store", this.store.film);
          this.store.cerca = "";
        })
        .catch((error) => {
          this.store.film = [];
        });
    },
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped>
input {
  line-height: 2rem;
  width: 35%;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid currentColor;
  font-weight: bolder;
  font-size: 15px;
  text-transform: uppercase;
}
</style>
