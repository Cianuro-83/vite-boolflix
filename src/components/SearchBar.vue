<template>
  <div>
    <input
      @keyup.enter="prendiFilm"
      v-model="store.cerca"
      placeholder="cerca il film che vuoi guardare"
      type="text"
    />
    <div>
      <button @click="prendiFilm" type="text">cerca</button>
    </div>
  </div>
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
      // chiamata per cercare i film
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
          // this.store.cerca = "";
        })
        .catch((error) => {
          this.store.film = [];
        });
      // chiamata per cercare le serie tv
      axios
        .get(`https://api.themoviedb.org/3/search/tv?`, {
          params: {
            api_key: this.store.api_key,
            query: cerca,
            language: this.store.language,
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          this.store.serieTV = res.data.results;
          console.log("Serie tv nello store", this.store.serieTV);
          // this.store.cerca = "";
        })
        .catch((error) => {
          this.store.serieTV = [];
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
  font-weight: bold;
  width: 360px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid currentColor;
  font-weight: bolder;
  font-size: 15px;
  text-transform: uppercase;
  position: relative;
}
button {
  line-height: 1.2rem;
  width: 60px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid red;
  font-weight: bolder;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  right: 419px;
  top: 35px;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
}
</style>
