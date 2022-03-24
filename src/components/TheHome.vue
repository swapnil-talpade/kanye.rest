<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getQuotes } from "../api/kanyerest";

const kanyeQuote = ref("");

const getQoute = async () => {
  const qoute = await getQuotes();
  kanyeQuote.value = qoute;
};

onMounted(async () => {
  // call api once
  getQoute();
});
</script>

<template>
  <span class="title">Kanye.Rest</span>
  <div class="container">
    <span>{{ kanyeQuote }}</span>
  </div>
  <div class="buttonContainer">
    <button @click="getQoute()" class="button">Get new quote</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
}
.title {
  font-size: 30px;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* CSS */
.button {
  display: flex;
  align-items: center;

  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
    inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
</style>
