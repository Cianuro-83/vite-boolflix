<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
  <input
    @keyup.enter="$emit(`onChange`)"
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
    // **************************
    // FINE METHODS
  },
  // **************************
};
</script>

<style lang="scss" scoped></style>
