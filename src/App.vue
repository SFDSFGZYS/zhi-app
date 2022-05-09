<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Login from "./components/Login.vue";

const obj = {
  name: "zhi",
  age: 18,
  sex: "male",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const a = [obj,obj]
console.log(a);
obj.name = 'phoenix'
console.log(a);

console.log([...new Set(a)]);
console.log(Array.from({length:10}));
console.log(Array.from({
  c:0,
  1:1,
  2:2,
  3:3,
  4:4,
  length:10
}));


</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <Login />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
