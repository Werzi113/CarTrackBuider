const menu = document.querySelector('#menu')
const editor = document.querySelector('#editor')
const grid = document.querySelector('#editorGrid')

//amount of cells in grid
const gridSize = 20
//size of cell inside grid
const cellHeight = 54
const cellWidth = 58

let cellStates = ['grass', 'road', 'water']


grid.addEventListener('click', (e) => {
    switchCellState(e.target)
    
    
    
})

generateGrid()

function generateGrid() {

    grid.style.gridTemplateColumns = 'repeat(' + gridSize + ',' + cellWidth + 'px)'
    grid.style.gridTemplateRows = 'repeat(' + gridSize + ',' + cellHeight + 'px)'


    for (let index = 0; index < gridSize * gridSize; index++) {
        const el = document.createElement('div')
        el.classList.add('grass')

        grid.appendChild(el)
    }
}

function switchCellState(cell) {
    const i = cellStates.indexOf(cell.classList[0])
    const nextIndex = (i + 1) % cellStates.length
    cell.classList.remove(cellStates[i])
    cell.classList.add(cellStates[nextIndex])
    
}



