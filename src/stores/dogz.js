import { defineStore } from "pinia";
import api from "../api";

export const useDogzStore = defineStore("dogz", {
  state: () => ({
    breedsList: [],
    breedImageList: [],
    favList: [],
  }),

  getters: {},

  actions: {
    async getAllBreeds() {
      try {
        const response = await api.getAllBreeds();
        console.log(response);
        this.breedsList = Object.keys(response.message);
      } catch {
        alert("Error");
      }
    },

    async getBreedsImages(breed) {
      try {
        const response = await api.getBreedsImages(breed);
        console.log(response);
        this.breedImageList = response.message;
      } catch {
        console.log("Error");
      }
    },

    addToFav(url) {
      this.favList.push(url);
    },

    removeFromFav(url) {
      this.favList.map((val) => {
        url !== val;
      });
    },
  },

  persist: true,
});
