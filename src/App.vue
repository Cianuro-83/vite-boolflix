<template>
  <header>
    <Header />
  </header>
  <div>
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
    Main,
    // **************************
    // FINE COMPONETS
  },
  // **************************
  data() {
    return {
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
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss">
@use "./style/general.scss";
header {
  position: fixed;
  z-index: 999;
}
.hero {
  margin: 0 auto;
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 80px;
}
</style>
