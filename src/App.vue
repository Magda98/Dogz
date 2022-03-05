<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink :to="{ name: 'homeview' }">Breeds</RouterLink>
      <RouterLink :to="{ name: 'fav' }">Fav</RouterLink>
    </nav>
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/base.scss";

.container {
  max-width: 70%;
  margin: 100px auto auto auto;

  @media only screen and (max-width: 1200px) {
    max-width: 90%;
  }
}

.header {
  background-color: $text;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;

  .nav {
    max-width: 70%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;

    a {
      text-decoration: none;
      padding: 20px 30px;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 500;
      color: #fff;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(#fff, 0.2);
      }

      &::after {
        display: block;
        content: " ";
        width: 50%;
        height: 2px;
        background-color: transparent;
        position: absolute;
        bottom: 10px;
        left: 25%;
        transition: background-color 0.3s;
      }

      &.router-link-exact-active {
        &::after {
          background-color: #fff;
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      max-width: 90%;
      padding: 5px 0;
      a {
        font-size: 12px;
        padding: 20px 30px;

        &::after {
          bottom: 12px;
        }
      }
    }
  }
}
</style>
