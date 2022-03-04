import { defineStore } from "pinia";
import api from "../api";

export const useDogzStore = defineStore("dogz", {
  state: () => ({
    breedsList: [],
    breedImageList: [],
    favList: [],
    selectBreed: "",
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
        const dogArray = response.message.map((item) => {
          const isInFav =
            this.favList.find((favItem) => favItem.url === item) === undefined
              ? false
              : true;
          const dog = {
            url: item,
            fav: isInFav,
          };
          return dog;
        });
        this.breedImageList = dogArray;
      } catch {
        console.log("Error");
      }
    },

    addToFav(dog) {
      if (!dog.fav) {
        dog.fav = true;
        this.favList.push(dog);
      }
    },

    removeFromFav(dog) {
      dog.fav = false;
      const result = this.favList.filter((item) => item.url !== dog.url);
      this.favList = result;
    },
  },

  persist: true,
});
