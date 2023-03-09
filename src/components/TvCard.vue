<template>
  <li>
    <img :src="getLocandina(tvcard.poster_path)" />
    <h3>TIPOLOGIA: {{ sezione }}</h3>
    <h3 :class="tvcard.name === tvcard.original_name ? `nascondi` : ``">
      TITOLO: {{ tvcard.name }}
    </h3>
    <h4>TITOLO ORIGINALE: {{ tvcard.original_name }}</h4>
    <p>
      <img
        :src="getFlag(tvcard.original_language)"
        :alt="tvcard.original_language"
      />
    </p>
    <p>VOTO: {{ provaStar(tvcard.vote_average) }}</p>
    <img class="star" :src="getStar(tvcard.vote_average)" alt="" />
    <p>DESCRIZIONE: {{ tvcard.overview }}</p>
  </li>
</template>

<script>
import store from "../store";
export default {
  props: {
    tvcard: {
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
      sezione: "serie tv",

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
