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
  max-width: 60%;
  margin: 100px auto auto auto;

  @media only screen and (max-width: 1200px) {
    max-width: 90%;
  }
}

.header {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  .nav {
    max-width: 60%;
    margin: auto;
    padding: 30px 0;

    a {
      text-decoration: none;
      padding: 20px 30px;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 500;

      &:hover {
        color: $primary;
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
          background-color: $primary;
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      max-width: 90%;

      a {
        font-size: 12px;
        padding: 20px 30px;
      }
    }

    @media only screen and (max-width: 768px) {
      max-width: 95%;

      a {
        font-size: 10px;
        padding: 20px 10px;
        &::after {
          width: 80%;
          left: 10%;
        }
      }
    }
  }
}
</style>
