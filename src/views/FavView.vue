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
        :item="item"
      ></ImageComponent>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/varibles.scss";

.image-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  padding: 10px 0;
  box-sizing: border-box;
}
</style>
