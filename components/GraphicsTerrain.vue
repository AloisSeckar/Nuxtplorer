<template>
  <div class="terrain-wrap">
    <div v-for="row in tiles" :key="row[0].y" class="terrain-row">
      <div v-for="tile in row" :key="tile.x" :class="`terrain ${tile.terrain}`">
        <div v-if="tile.gem" class="gem" :class="tile.gem" />
      </div>
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

.stone {
  background: url('caverns.png') 0px 0px;
}

.corridor-lr {
  position: relative;
}
.corridor-lr::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 256px 0px;
}

.corridor-td {
  position: relative;
}
.corridor-td::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 256px 0px;
  transform: rotate(90deg);
}

.turn-dr {
  position: relative;
}
.turn-dr::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 192px 0px;
}

.turn-dl {
  position: relative;
}
.turn-dl::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 192px 0px;
  transform: rotate(90deg);
}

.turn-tl {
  position: relative;
}
.turn-tl::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 192px 0px;
  transform: rotate(180deg);
}

.turn-tr {
  position: relative;
}
.turn-tr::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 192px 0px;
  transform: rotate(270deg);
}

.cross-3-d {
  position: relative;
}
.cross-3-d::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 128px 0px;
}

.cross-3-l {
  position: relative;
}
.cross-3-l::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 128px 0px;
  transform: rotate(90deg);
}

.cross-3-t {
  position: relative;
}
.cross-3-t::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 128px 0px;
  transform: rotate(180deg);
}

.cross-3-r {
  position: relative;
}
.cross-3-r::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 128px 0px;
  transform: rotate(270deg);
}

.cross-4 {
  position: relative;
}
.cross-4::before {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  background: url('caverns.png') 64px 0px;
}
</style>
