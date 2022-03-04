<script setup>
import { onMounted, ref, watch } from "vue";
import { useDogzStore } from "../stores/dogz";
import ImageComponent from "../components/ImageComponent.vue";

const dogz = useDogzStore();
const breedValue = ref(dogz.selectBreed);

watch(breedValue, () => {
  dogz.selectBreed = breedValue.value;
  dogz.getBreedsImages(breedValue.value);
});

onMounted(() => {
  dogz.getAllBreeds();
});
</script>

<template>
  <div>
    <h1>Happy dogz website!</h1>
    <p>
      Doggo ipsum heck heckin angery woofer lotsa pats much ruin diet bork
      shooberino, long water shoob heckin good boys and girls ruff mlem. Super
      chub clouds long doggo wow such tempt blep smol borking doggo with a long
      snoot for pats noodle horse, wow very biscit very good spot most angery
      pupper I have ever seen long water shoob big ol pupper. Floofs heckin blep
      snoot boof smol floofs, pupperino waggy wags the neighborhood pupper blep.
      Blep wow such tempt shoob very hand that feed shibe, wow very biscit. Vvv
      you are doing me a frighten you are doing me the shock very taste wow wow
      very biscit, he made many woofs heckin good boys h*ck. Corgo the
      neighborhood pupper very hand that feed shibe tungg shibe, heck you are
      doin me a concern. Shibe waggy wags super chub you are doing me a
      frighten, tungg fluffer. Doggorino fluffer heckin angery woofer aqua doggo
      many pats, fluffer boof. Very hand that feed shibe wow very biscit ur
      givin me a spook many pats, heck.
    </p>
    <div class="breed-selection">
      <h2>Chose your fav breed!</h2>
      <select name="breed" class="breed" v-model="breedValue">
        <option
          v-for="(breed, index) in dogz.breedsList"
          :key="index"
          :value="breed"
        >
          {{ breed }}
        </option>
      </select>
    </div>
    <div class="image-list">
      <ImageComponent
        v-for="(item, index) in dogz.breedImageList"
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

.breed-selection {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
}

select {
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;

  width: 20em;
  height: 3em;
  padding: 0 4em 0 1em;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' fill='%23fff'%3E%3Cpath d='M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z'/%3E%3C/svg%3E")
      no-repeat right 1.1em center / 0.7em,
    linear-gradient(to left, $glass-icon 3em, $glass 3em);
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  color: white;
  background-color: $text;
  cursor: pointer;

  option {
    color: $text;
  }

  &:focus {
    outline: none;
  }
}
</style>
