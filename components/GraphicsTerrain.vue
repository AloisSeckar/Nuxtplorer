<template>
  <div>
    <div class="terrain grass-1" />
    <div class="terrain grass-2" />
    <div class="terrain grass-3" />
    <div class="terrain grass-4" />
    <div class="terrain grass-5" />
    <div class="terrain grass-6" />
  </div>
</template>

<style>
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
