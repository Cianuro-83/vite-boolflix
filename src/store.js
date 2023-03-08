import { reactive } from "vue";

const store = reactive({
  api_key: "334a4b12c0bb527b7ae4435b92cde0a1",
  language: "it-IT",
  film: [],
  serieTV: [],
  cerca: "",
  locandina: `https://image.tmdb.org/t/p/w342`,
});

export default store;
