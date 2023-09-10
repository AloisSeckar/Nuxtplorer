<template>
  <div>
    <div v-for="row in tiles" :key="row[0].y" class="terrain-row">
      <div v-for="tile in row" :key="tile.x" :class="`terrain ${tile.terrain}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
useTerrainStore().init(width.value, height.value)

const tiles = computed(() => useTerrainStore().tiles)
</script>

<style>
.terrain-row {
  height: 64px;
}
.terrain {
  width: 64px;
  height: 64px;
  display: inline-block;
}
.grass-1 {
  background: url('terrain.png') 0px 0px;
}
.grass-2 {
  background: url('terrain.png') 320px 0px;
}
.grass-3 {
  background: url('terrain.png') 256px 0px;
}
.grass-4 {
  background: url('terrain.png') 192px 0px;
}
.grass-5 {
  background: url('terrain.png') 128px 0px;
}
.grass-6 {
  background: url('terrain.png') 64px 0px;
}
</style>
