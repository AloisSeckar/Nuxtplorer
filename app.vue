<template>
  <div>
    [ {{ position.x }} x {{ position.y }} ]
  </div>
  <div class="hero" />
</template>

<script setup lang="ts">
import { onKeyDown, onKeyUp, useRafFn, useWindowSize } from '@vueuse/core'

const controls = {
  ArrowDown: () => {
    position.value.y += 5
    direction.value = 'd'
    offset.value.y = 128
  },
  ArrowUp: () => {
    position.value.y -= 5
    direction.value = 'u'
    offset.value.y = 0
  },
  ArrowRight: () => {
    position.value.x += 5
    direction.value = 'r'
    offset.value.y = 192
  },
  ArrowLeft: () => {
    position.value.x -= 5
    direction.value = 'l'
    offset.value.y = 64
  }
}

useRafFn(() => {
  if (moving.value) {
    if (frames.value % 15 === 0) {
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
    frames.value++
  }
})

onKeyDown(Object.keys(controls), (e) => {
  e.preventDefault()
  moving.value = true
  controls[e.key]()
})

onKeyUp(Object.keys(controls), (e) => {
  e.preventDefault()
  moving.value = false
  frames.value = 0
  phase.value = 2
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
</script>

<style>
.hero {
  width: v-bind(heroWidth + 'px');
  height: v-bind(heroHeight + 'px');
  background: url('hero-sprite.png') v-bind(offset.x + 'px') v-bind(offset.y + 'px');
  position: absolute;
  top: v-bind(position.y + 'px');
  left: v-bind(position.x + 'px');
}
</style>
