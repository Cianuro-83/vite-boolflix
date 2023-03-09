<template>
  <li>
    <img :src="getLocandina(filmcard.poster_path)" alt="" />
    <h3>TIPOLOGIA: {{ sezione }}</h3>
    <h3>TITOLO: {{ filmcard.title }}</h3>
    <h4 :class="filmcard.title === filmcard.original_title ? `nascondi` : ``">
      TITOLO ORIGINALE: {{ filmcard.original_title }}
    </h4>
    <p>
      <img
        :src="getFlag(filmcard.original_language)"
        :alt="filmcard.original_language"
      />
    </p>
    <p>VOTO: {{ provaStar(filmcard.vote_average) }}</p>
    <img class="star" :src="getStar(filmcard.vote_average)" alt="" />
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
    locandina() {
      return this.store.locandina;
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
    getLocandina(poster) {
      if (poster === null) {
        return "/BOOLFLIX.jpg";
      } else {
        return this.locandina + poster;
      }
    },
    provaStar(voto) {
      return Math.round(voto / 2);
    },
    getStar(voto) {
      if (Math.round(voto / 2) === 5) {
        return "/star/5stelle.png";
      } else if (Math.round(voto / 2) === 4) {
        return "/star/4stelle.png";
      } else if (Math.round(voto / 2) === 3) {
        return "/star/3stelle.png";
      } else if (Math.round(voto / 2) === 2) {
        return "/star/2stelle.png";
      } else if (Math.round(voto / 2) === 1) {
        return "/star/1stelle.png";
      } else {
        return "/star/0stelle.png";
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
.nascondi {
  display: none;
}
.star {
  width: 150px;
}
</style>
