<template>
  <li>
    <img class="locandina" :src="getLocandina(tvcard.poster_path)" />
    <h3>TIPOLOGIA: {{ sezione }}</h3>
    <h3>TITOLO: {{ tvcard.name }}</h3>
    <h4 :class="tvcard.name === tvcard.original_name ? `nascondi` : ``">
      TITOLO ORIGINALE: {{ tvcard.original_name }}
    </h4>
    <p>
      <img
        :src="getFlag(tvcard.original_language)"
        :alt="tvcard.original_language"
      />
    </p>
    <!-- <p>VOTO: {{ verificaStar(tvcard.vote_average) }}</p> -->
    <img class="star" :src="getStar(tvcard.vote_average)" alt="" />
    <p :class="tvcard.overview ? `` : `nascondi`">
      DESCRIZIONE: {{ tvcard.overview }}
    </p>
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
    verificaStar(voto) {
      return Math.round(voto / 2);
    },
    getStar(voto) {
      switch (Math.round(voto / 2)) {
        case 5:
          return "/star/5stelle.png";
        case 4:
          return "/star/4stelle.png";
        case 3:
          return "/star/3stelle.png";
        case 2:
          return "/star/2stelle.png";
        case 1:
          return "/star/1stelle.png";
        case 0:
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
.locandina {
  width: 300px;
}
</style>
