<template>
  <div class="login">
    <div class="login-bg">
      <div
        class="login-bg-item"
        v-for="item in 5"
        :style="{
          animationDelay: 2 * (item - 1) + 's',
        }"
      ></div>
    </div>
    <img
      src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg"
      class="bg-image"
    />
    <div class="login-panel">
      <div class="tips">
        {{ firstLineString }}
        <br v-if="secondLineString.length" />
        {{ secondLineString }}
        <span class="cursor" v-if="showCursor">|</span>
      </div>
      <div class="continue">
        Continue
        <i class="iconfont icon-direction-right"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const FIRST_LINE_STRING = "Welcome to Zhi’s Blog!";
const SECOND_LINE_STRING = "Enjoy it";

const showCursor = ref(true);
const firstLineString = ref("");
const secondLineString = ref("");

const setTips = () => {
  let index = 0;
  const timer = setInterval(() => {
    if (firstLineString.value === FIRST_LINE_STRING) {
      secondLineString.value += SECOND_LINE_STRING[index++];
      if (index === SECOND_LINE_STRING.length) {
        clearInterval(timer);
        showCursor.value = false;
      }
    } else {
      firstLineString.value += FIRST_LINE_STRING[index++];
      if (index === FIRST_LINE_STRING.length) index = 0;
    }
  }, 100);
};
setTimeout(() => {
  setTips();
}, 5000);
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #000;
  overflow: hidden;
}
.login-bg,
.login-bg-item {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.login-bg-item {
  background-image: radial-gradient(
      2px 2px at 10px 20px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0;
  animation: zoom 15s infinite;
}
.bg-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  transform: translate(-50%, -50%);
}
.login-panel {
  width: 600px;
  padding: 24px;
  background-color: #0c162d;
  border: 1px solid #202637;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  border-radius: 6px;
  box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04);
}
.tips {
  color: #627597;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
    Liberation Mono, monospace;
}
.cursor {
  color: #fff;
  animation: flesh 0.7s infinite;
}
@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  }
  85% {
    opacity: 1;
    transform: scale(1.8);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0.2;
    transform: scale(2.2);
  }
}
@keyframes flesh {
  50% {
    opacity: 0;
  }
}
</style>
