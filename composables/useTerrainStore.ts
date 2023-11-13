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
      for (let j = 0; j < height / TILE_SIZE - 1; j++) {
        this.tiles.push([])
        for (let i = 0; i < width / TILE_SIZE - 1; i++) {
          this.tiles[j].push({
            x: i,
            y: j,
            terrain: setRandomTerrainTile(this.tiles, i, j),
            gem: setGemOrNothing()
          })
        }
      }
    }
  }
})

function setRandomTerrainTile (tiles: TerrainTile[][], x: number, y: number): string {
  const leftNeighbour = x > 0 ? tiles[y][x - 1] : null
  const topNeighbour = y > 0 ? tiles[y - 1][x] : null
  const leftCorridor = !!leftNeighbour && ['corridor-lr', 'turn-dr', 'turn-tr', 'cross-3-d', 'cross-3-t', 'cross-3-r', 'cross-4'].includes(leftNeighbour.terrain)
  const topCorridor = !!topNeighbour && ['corridor-td', 'turn-dr', 'turn-dl', 'cross-3-d', 'cross-3-l', 'cross-3-r', 'cross-4'].includes(topNeighbour.terrain)
  const available = [] as string[]
  if (leftCorridor && topCorridor) {
    available.push('turn-tl', 'cross-3-l', 'cross-3-t', 'cross-4')
  } else if (leftCorridor) {
    available.push('corridor-lr', 'turn-dl', 'cross-3-d')
  } else if (topCorridor) {
    available.push('corridor-td', 'turn-tr', 'cross-3-r')
  } else {
    available.push('turn-dr')
  }
  return available[Math.floor(Math.random() * available.length)]
}

function setGemOrNothing (): string | undefined {
  const rand = Math.random()
  if (rand > 0.95) {
    return Math.round(rand * 100) % 2 === 0 ? 'gem-1' : 'gem-2'
  }
}
