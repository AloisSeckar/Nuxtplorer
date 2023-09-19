<template>
  <div>
    <ClientOnly>
      <div class="overlay">
        <GuiCoordsBox />
        <GuiFpsBox />
      </div>
      <div>
        <GraphicsHero />
      </div>
      <div>
        <GraphicsTerrain />
      </div>
    </ClientOnly>
  </div>
</template>

<style>
.overlay {
  position: absolute;
  z-index: 1;
  color: white;
  margin: 5px;
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
