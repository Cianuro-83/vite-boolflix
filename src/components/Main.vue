<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from "./Header.vue";
import store from "../store";
import axios from "axios";
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
    prendiFilm() {
      const film = this.store.film;
      const serieTv = this.store.serieTv;
      const cerca = this.store.cerca;
      console.log("ecco i film", film);
      console.log("e queste sono le serie tv", serieTv);

      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=334a4b12c0bb527b7ae4435b92cde0a1&query=`,
          {
            params: {
              original_title: cerca,
            },
          }
        )
        .then((res) => {
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
