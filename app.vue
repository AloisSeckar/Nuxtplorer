<template>
  <div class="hero" />
</template>

<script setup lang="ts">
import { onKeyStroke, useWindowSize } from '@vueuse/core'

const controls = {
  ArrowDown: () => (position.value.y += 5),
  ArrowUp: () => (position.value.y -= 5),
  ArrowRight: () => (position.value.x += 5),
  ArrowLeft: () => (position.value.x -= 5)
}

onKeyStroke(Object.keys(controls), (e) => {
  e.preventDefault()
  controls[e.key]()
})

const { width, height } = useWindowSize()
const heroWidth = 30
const heroHeight = 52
const position = ref({ x: width.value / 2 - heroWidth / 2, y: height.value / 2 - heroHeight / 2 })
</script>

<style>
.hero {
  width: v-bind(heroWidth + 'px');
  height: v-bind(heroHeight + 'px');
  background-image: url('hero.png');
  position: absolute;
  top: v-bind(position.y + 'px');
  left: v-bind(position.x + 'px');
}
</style>
