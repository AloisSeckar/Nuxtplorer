type TerrainTile = {
    x: number,
    y: number,
    terrain: string
}

export const TILE_SIZE = 64

export const useTerrainStore = defineStore({
  id: 'pinia-terrain',
  state: () => {
    return {
      tiles: [] as TerrainTile[][]
    }
  },
  getters: {
    getWidth: state => state.tiles[0].length * TILE_SIZE,
    getHeight: state => state.tiles.length * TILE_SIZE
  },
  actions: {
    init (width: number, height: number) {
      const available = ['grass-1', 'grass-2', 'grass-3', 'grass-4', 'grass-5', 'grass-6']
      for (let i = 0; i < height / TILE_SIZE - 1; i++) {
        this.tiles.push([])
        for (let j = 0; j < width / TILE_SIZE - 1; j++) {
          this.tiles[i].push({
            x: i,
            y: j,
            terrain: available[Math.floor(Math.random() * available.length)]
          })
        }
      }
    }
  }
})
