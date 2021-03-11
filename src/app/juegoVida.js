class JuegoVida {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
    this.cells = 6;
    this.grid = this.createGrid();
  }

  createGrid() {
    let finalGrid = [];

    for (let i = 0; i < this.width; i++) {
      let row = [];

      for (let j = 0; j < this.heigth; j++) {
        row.push(0);
      }

      finalGrid.push(row)
    }

    return finalGrid
  }

  createInitialLife(grid) {
    let newGrid = grid;
    let count = 0;

    do{
      if (newGrid[this.getRandomCell(this.width - 1)][this.getRandomCell(this.heigth - 1)] != 1) {
        newGrid[this.getRandomCell(this.width - 1)][this.getRandomCell(this.heigth - 1)] = 1
        count++
      }
    }while(count < this.cells)
    
    return newGrid;
  }

  getRandomCell(max) {
    return Math.round(Math.random() * max)
  }

  validateCell(i, j, grid) {
    if (grid[i] != undefined) {
      if (grid[i][j] == undefined) {
        return 0
      }else {
        return grid[i][j]
      }
    } else {
      return 0;
    }
  }

  rulesAnalizer(grid) {
    let newGrid = this.createGrid()
    let counter = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        counter = (
          this.validateCell(i - 1 , j, grid) +
          this.validateCell(i - 1, j - 1 , grid) +
          this.validateCell(i - 1, j + 1, grid) +
          this.validateCell(i, j - 1, grid) +
          this.validateCell(i, j + 1, grid) +
          this.validateCell(i + 1, j - 1, grid) +
          this.validateCell(i + 1, j, grid) +
          this.validateCell(i + 1, j + 1, grid))
          
        //console.log(counter)
        newGrid[i][j] = this.applyRules(counter, grid[i][j])
      }
    }
    console.table(newGrid)
    return newGrid
  }

  applyRules(numberNeighbours, cellState) {
    if (
      cellState === 1 
      && (numberNeighbours < 2 || numberNeighbours > 3)) {
        return 0
    } else if ((
      cellState === 1 && (numberNeighbours === 2 || numberNeighbours === 3 ))
      || (cellState === 0 && numberNeighbours === 3)) {
        return 1
      } else return 0
  }

  startGame() {
    let grid = this.createGrid();
    let newGrid = []

    grid = this.createInitialLife(grid)
    console.table(grid);
    newGrid = this.rulesAnalizer(grid)
    //console.table(newGrid)
  }
}

module.exports = JuegoVida;
