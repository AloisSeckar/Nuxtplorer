<template>
  <div class="terrain-wrap">
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
const terrainWidth = computed(() => useTerrainStore().getWidth)
const terrainHeight = computed(() => useTerrainStore().getHeight)
</script>

<style scoped>
.terrain-wrap {
  width: v-bind('terrainWidth + "px"');
  height: v-bind('terrainHeight + "px"');
  border: 2px solid black;
  margin: 0 auto;
}
.terrain-row {
  height: v-bind('TILE_SIZE + "px"');
}
.terrain {
  width: v-bind('TILE_SIZE + "px"');
  height: v-bind('TILE_SIZE + "px"');
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
