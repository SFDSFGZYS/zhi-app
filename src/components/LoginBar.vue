<template>
  <div class="login">
    <div class="login-bg">
      <div
        class="login-bg-item"
        v-for="item in 5"
        :style="{
          animationDelay: 2 * (item - 1) + 's',
        }"
        :key="item"
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
import { ref } from 'vue'

const FIRST_LINE_STRING = 'Welcome to Zhi’s Area!'
const SECOND_LINE_STRING = 'Enjoy it'

const showCursor = ref(true)
const firstLineString = ref('')
const secondLineString = ref('')

const setTips = () => {
  let index = 0
  const timer = setInterval(() => {
    if (firstLineString.value === FIRST_LINE_STRING) {
      secondLineString.value += SECOND_LINE_STRING[index++]
      if (index === SECOND_LINE_STRING.length) {
        clearInterval(timer)
        showCursor.value = false
      }
    } else {
      firstLineString.value += FIRST_LINE_STRING[index++]
      if (index === FIRST_LINE_STRING.length) index = 0
    }
  }, 100)
}
setTimeout(() => {
  setTips()
}, 5000)
</script>
<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;

  .login-bg,
  .login-bg-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}


.login-bg-item {
  background-image: radial-gradient(2px 2px at 10px 20px, #eee, rgb(0 0 0 / 0%)), radial-gradient(2px 2px at 40px 70px, #fff, rgb(0 0 0 / 0%)), radial-gradient(2px 2px at 90px 40px, #ddd, rgb(0 0 0 / 0%));
  background-size: 200px 200px;
  background-repeat: repeat;
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
  position: absolute;
  top: 150px;
  left: 50%;
  width: 600px;
  padding: 24px;
  border: 1px solid #202637;
  border-radius: 6px;
  background-color: #0c162d;
  box-shadow: 0 1px 0 rgb(27 31 36 / 4%);
  transform: translateX(-50%);
}

.tips {
  min-height: 38px;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  color: #627597;
}

.cursor {
  color: #fff;
  animation: flesh .7s infinite;
}

.continue {
  display: inline-block;
  margin: 20px auto;
  color: #fff;
  cursor: pointer;
}

@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(.5);
    animation-timing-function: ease-in;
  }

  85% {
    opacity: 1;
    transform: scale(1.8);
    animation-timing-function: linear;
  }

  100% {
    opacity: .2;
    transform: scale(2.2);
  }
}
@keyframes flesh {
  50% {
    opacity: 0;
  }
}
</style>
