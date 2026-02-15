

const menu = document.querySelector('#menu')
const editor = document.querySelector('#editor')
const grid = document.querySelector('#editorGrid')

//amount of cells in grid
const gridSize = 20
//size of cell inside grid

const cellSize = 45


const cellStates = ['grass', 'road', 'water']
let cells = []



grid.addEventListener('click', (e) => {
    
    
    
    const cell = getCell(getRelativeClickPosition(e))
    cell.shiftCellState()
    



    
    
    
})

generateGrid()

function generateGrid() {

    grid.style.gridTemplateColumns = 'repeat(' + gridSize + ',' + cellSize + 'px)'
    grid.style.gridTemplateRows = 'repeat(' + gridSize + ',' + cellSize + 'px)'


    for (let index = 0; index < gridSize * gridSize; index++) {
        const el = document.createElement('div')


        grid.appendChild(el)
        cells.push(new Cell(el))
        
        
    }
}

function getCell(point) {
    const iX = Math.trunc(point.x/cellSize)
    const iY = Math.trunc(point.y/cellSize)
    const index = Number(gridSize * iY) + Number(iX)

    return cells[index]
}
function getRelativeClickPosition(clickEvent) {
    const x = clickEvent.pageX - clickEvent.offsetX
    const y = clickEvent.pageY - clickEvent.offsetY
    
    let pt = new Point(x, y) 

    return pt
}




