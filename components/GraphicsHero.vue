<template>
  <div class="hero" />
</template>

<script setup lang="ts">
import { onKeyDown, onKeyUp, useIntervalFn, useRafFn, useWindowSize } from '@vueuse/core'

type ControlSet = {
  ArrowDown: Function,
  ArrowUp: Function,
  ArrowRight: Function,
  ArrowLeft: Function,
}

const controls: ControlSet = {
  ArrowDown: () => {
    if (direction.value !== 'd') {
      frames.value = 0
    }
    direction.value = 'd'
    offset.value.y = 128
  },
  ArrowUp: () => {
    if (direction.value !== 'u') {
      frames.value = 0
    }
    direction.value = 'u'
    offset.value.y = 0
  },
  ArrowRight: () => {
    if (direction.value !== 'r') {
      frames.value = 0
    }
    direction.value = 'r'
    offset.value.y = 192
  },
  ArrowLeft: () => {
    if (direction.value !== 'l') {
      frames.value = 0
    }
    direction.value = 'l'
    offset.value.y = 64
  }
}

useIntervalFn(() => {
  if (moving.value) {
    switch (direction.value) {
      case 'u':
        position.value.y -= 1
        break
      case 'd':
        position.value.y += 1
        break
      case 'l':
        position.value.x -= 1
        break
      case 'r':
        position.value.x += 1
        break
    }
  }
}, 15)

useIntervalFn(() => {
  if (moving.value) {
    switch (phase.value) {
      case 1:
        phase.value = 2
        offset.value.x = 48
        break
      case 2:
        phase.value = 3
        offset.value.x = 96
        break
      case 3:
        phase.value = 1
        offset.value.x = 0
        break
    }
  }
}, 100)

useRafFn(() => {
  if (moving.value) {
    frames.value++
  }
})

onKeyDown(Object.keys(controls), (e) => {
  e.preventDefault()
  lastKeyDown.value = Date.now()
  if (moving.value === false) {
    frames.value = 0
  }
  moving.value = true
  controls[e.key as keyof ControlSet]()
})

onKeyUp(Object.keys(controls), (e) => {
  e.preventDefault()
  lastKeyUp.value = Date.now()
  if (frames.value > 20) {
    moving.value = false
    frames.value = 0
    phase.value = 2
  }
  setTimeout(() => {
    if (Date.now() - lastKeyDown.value >= 500 && Date.now() - lastKeyUp.value >= 500) {
      moving.value = false
      frames.value = 0
      phase.value = 2
    }
  }, 500)
})

const { width, height } = useWindowSize()

const heroWidth = 48
const heroHeight = 64

const offset = ref({ x: 48, y: 128 })
const position = ref({ x: Math.round(width.value / 2 - heroWidth / 2), y: Math.round(height.value / 2 - heroHeight / 2) })

const direction: Ref<'u' | 'd' | 'l' | 'r'> = ref('d')

const moving = ref(false)
const frames = ref(0)
const phase: Ref<1 | 2 | 3> = ref(2)
const lastKeyDown = ref(0)
const lastKeyUp = ref(0)
</script>

<style scoped>
.hero {
  width: v-bind(heroWidth + 'px');
  height: v-bind(heroHeight + 'px');
  background: url('hero-sprite.png') v-bind('offset.x + "px"') v-bind('offset.y + "px"');
  position: absolute;
  top: v-bind('position.y + "px"');
  left: v-bind('position.x + "px"');
}
</style>
