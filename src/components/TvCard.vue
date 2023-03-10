<template>
  <li>
    <div class="tv-card">
      <div class="poster">
        <img class="locandina" :src="getLocandina(tvcard.poster_path)" />
      </div>
      <div class="card-info">
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
      </div>
    </div>
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
  width: 330px;
  height: 500px;
  text-align: center;
  overflow: hidden;
}
.tv-card {
  position: relative;
  width: 330px;
  height: 500px;
  margin-bottom: 20px;
}
.poster {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 327px;
  height: 498px;
  overflow: hidden;
  z-index: 10;
  &:hover {
    transform: rotatey(180deg);
    backface-visibility: hidden;
    transition: all 1.5s;
  }
}
.card-info {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 327px;
  height: 498px;
  overflow-y: auto;
  background-color: black;
  padding: 25px;
  display: block;
  &:hover {
    z-index: 10;
  }
}
</style>
