type TerrainTile = {
    x: number,
    y: number,
    terrain: string,
    gem?: string
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
      const available = [
        'stone',
        'corridor-lr', 'corridor-td',
        'turn-dr', 'turn-dl', 'turn-tl', 'turn-tr',
        'cross-3-d', 'cross-3-l', 'cross-3-t', 'cross-3-r',
        'cross-4'
      ]
      for (let i = 0; i < height / TILE_SIZE - 1; i++) {
        this.tiles.push([])
        for (let j = 0; j < width / TILE_SIZE - 1; j++) {
          this.tiles[i].push({
            x: i,
            y: j,
            terrain: available[Math.floor(Math.random() * available.length)],
            gem: setGemOrNothing()
          })
        }
      }
    }
  }
})

function setGemOrNothing (): string | undefined {
  const rand = Math.random()
  if (rand > 0.95) {
    return Math.round(rand * 100) % 2 === 0 ? 'gem-1' : 'gem-2'
  }
}
