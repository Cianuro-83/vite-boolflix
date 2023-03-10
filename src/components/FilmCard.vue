<template>
  <li>
    <div class="film-card">
      <div class="poster">
        <img
          class="locandina"
          :src="getLocandina(filmcard.poster_path)"
          alt=""
        />
      </div>
      <div class="card-info">
        <h3 class="tipologia">categoria - {{ sezione }}</h3>
        <h3 class="titolo">TITOLO: <span>{{ filmcard.title }}</span></h3>
        <h4 class="titolo-originale"
          :class="filmcard.title === filmcard.original_title ? `nascondi` : ``"
        >
          TITOLO ORIGINALE: <span>{{ filmcard.original_title }}</span>
        </h4>
        <p class="idioma">
          <p class="lingua"></p>
          <img class="bandiera"
            :src="getFlag(filmcard.original_language)"
            :alt="filmcard.original_language"
          />
        </p>
        <div class="voto">
          <p class="valutazione">gradimento del pubblico</p>
          <!-- <p>VOTO: {{ verificaStar(filmcard.vote_average) }}</p> -->
          <img class="star" :src="getStar(filmcard.vote_average)" alt="" />
        </div>
        <p class="descrizione" :class="filmcard.overview ? `` : `nascondi`">
          DESCRIZIONE:  <p>{{ filmcard.overview }}</p>
        </p>
      </div>
    </div>
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

.locandina {
  width: 100%;
  height: 100%;
  object-fit: cover;
 
}
.star {
    width: 200px;
    margin-bottom: 20px;
}
.film-card {
  position: relative;
  aspect-ratio: 1/1.5;
  margin-bottom: 20px;
  &:hover{
    .card-info{
      overflow:auto;
    }
  }
  
}
.poster {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
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
  overflow: hidden;
  background-image: url("/card.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: none;
  padding: 25px;
  display: block;
  &:hover {
    z-index: 10;  
  }
  .tipologia{
    background-color: red;
    text-align: center;
    text-transform: uppercase;
    color: greenyellow;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
  .titolo, 
  .titolo-originale{
  margin-bottom: 20px;
    span{
      font-weight: normal;
    }
  }  
  .bandiera{
    width: 50px;
    margin-bottom: 20px;
  }
  .valutazione{
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;
   }
   .descrizione{
    font-weight: bold;
    p {
      margin-top: 20px;
      font-weight: normal;
      text-align: justify;
      line-height: 1.5em;
    }
   }
  }

</style>
