<template>
  <header>
    <div class="logo-container">
      <img class="logo" src="/logo.png" alt="" />
      <select name="" id="">
        <option value="">sfoglia</option>
      </select>
      <p class="age">bambini</p>
    </div>
    <div class="search-container">
      <SearchBar class="search" />
      <img class="notifiche" src="/campanella.png" alt="" />
      <img class="cianuro" src="/cianuro.png" alt="" />
      <select name="" id="">
        <option value="">simone cianuro buzzeo</option>
      </select>
    </div>
  </header>
</template>

<script>
import store from "../store";
import SearchBar from "./SearchBar.vue";
export default {
  components: {
    SearchBar,
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
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(227, 128, 10);
  background: linear-gradient(
    15deg,
    rgba(227, 128, 10, 1) 0%,
    rgba(7, 8, 0, 1) 31%
  );
  width: 100%;
  padding: 20px 30px;
}

.logo-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 25px;
  select {
    width: 90px;
    padding: 5px 0;
    text-align: center;
    text-transform: capitalize;
    border: none;
    background-color: transparent;
    color: greenyellow;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .age {
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: bold;
  }
  .logo {
    height: 70px;
    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  }
}
.search-container {
  display: flex;
  align-items: center;
  gap: 25px input {
    line-height: 2rem;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid currentColor;
    font-weight: bolder;
    font-size: 15px;
    text-transform: uppercase;
  }
  .search {
    margin-right: 25px;
  }
  select {
    width: 240px;
    padding: 5px 0;
    text-align: center;
    text-transform: capitalize;
    border: none;
    background-color: transparent;
    color: greenyellow;
    font-size: 1.2rem;
    cursor: pointer;
  }
  img {
    width: 45px;
    cursor: pointer;
  }
  .cianuro {
    margin: 0 15px;
  }
}
</style>
