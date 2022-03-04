<script setup>
import { defineProps } from "vue";
defineProps({
  imageSrc: String,
  color: String,
});
</script>

<template>
  <div class="item">
    <img :src="imageSrc" />
    <img v-svg-inline class="icon" src="@/assets/icons/heart-regular.svg" />
    <img v-svg-inline class="icon" src="@/assets/icons/heart-solid.svg" />
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/varibles.scss";
.item {
  width: 250px;
  height: 250px;
  padding: 5px;
  background-color: $primary;
  border-radius: 30px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
}
</style>
