import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dog.ceo/api",
});

const api = {
  async getAllBreeds() {
    const response = await apiClient.get("/breeds/list/all");
    return response.data;
  },

  async getBreedsImages(breed) {
    const response = await apiClient.get(`breed/${breed}/images/random/40`);
    return response.data;
  },
};

export default api;
