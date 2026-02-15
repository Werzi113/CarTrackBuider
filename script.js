

const menu = document.querySelector('#menu')
const editor = document.querySelector('#editor')
const grid = document.querySelector('#editorGrid')

const resetButton = editor.querySelector('button')

//amount of cells in grid
const gridSize = 20
//size of cell inside grid
const cellSize = 45

let cells = []

let gridMousePos = new Point()

document.addEventListener('mousemove', (e) => {
    gridMousePos = getRelativeClickPosition(e)
    
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'r') {
        const cell = getCell(gridMousePos)
        cell.rotate(90)
    }
})

grid.addEventListener('click', (e) => {    
    
    const cell = getCell(gridMousePos)
    cell.shiftCellState()
})

resetButton.addEventListener('click', () => {
    resetGrid()
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

function resetGrid() {
    grid.innerHTML = ''
    cells = []
    generateGrid()
}

function getCell(point) {
    const iX = Math.trunc(point.x/cellSize)
    const iY = Math.trunc(point.y/cellSize)
    const index = Number(gridSize * iY) + Number(iX)

    return cells[index]
}
function getRelativeClickPosition(mouseEvent) {
    const x = mouseEvent.pageX - grid.offsetLeft
    const y = mouseEvent.pageY - grid.offsetTop
    
    let pt = new Point(x, y) 

    return pt
}




