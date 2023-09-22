<template>
  <div>
    <div class="gem gem-1" style="left: 142px; top: 132px;" />
    <div class="gem gem-2" style="left: 140px; top: 258px;" />
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

<script setup>
useHead({
  bodyAttrs: {
    class: 'nuxtplorer'
  }
})
</script>

<style>
.nuxtplorer {
  margin: 2px;
}
.overlay {
  position: absolute;
  left: 20px;
  top: 5px;
  z-index: 1;
  color: white;
  margin: 5px;
}
</style>
