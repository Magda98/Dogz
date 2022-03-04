<script setup>
import { defineProps } from "vue";
import { useDogzStore } from "../stores/dogz";

const dogz = useDogzStore();

defineProps({
  item: {
    imageSrc: String,
    fav: Boolean,
  },
});
</script>

<template>
  <div class="item">
    <img :src="item.url" />
    <div class="actions">
      <button v-if="item.fav" class="btn" @click="dogz.removeFromFav(item)">
        <img class="icon" v-svg-inline src="@/assets/icons/heart-solid.svg" />
      </button>
      <button v-else class="btn" @click="dogz.addToFav(item)">
        <img v-svg-inline class="icon" src="@/assets/icons/heart-regular.svg" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/varibles.scss";
.item {
  padding: 20px 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    object-fit: cover;
    width: 250px;
    height: 250px;
    border-radius: 5px;
  }
  .actions {
    display: flex;
    margin: 10px;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: none;
      padding: 10px 10px;
      border-radius: 5px;
      transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &:hover {
        background-color: rgba($primary, 0.2);
      }
    }
    .icon {
      width: 25px;
      fill: $primary;
    }
  }
}
</style>
