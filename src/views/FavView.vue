<script setup>
import { useDogzStore } from "../stores/dogz";
import ImageComponent from "../components/ImageComponent.vue";

const dogz = useDogzStore();
</script>

<template>
  <div>
    <h1>Fav Dogs List!</h1>

    <div class="image-list">
      <ImageComponent
        v-for="(item, index) in dogz.favList"
        :key="index"
        :imageSrc="item"
      ></ImageComponent>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/varibles.scss";
</style>
