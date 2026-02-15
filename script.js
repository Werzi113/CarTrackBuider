
const menu = document.querySelector('#menu')
const editor = document.querySelector('#editor')
const grid = document.querySelector('#editorGrid')

const resetButton = editor.querySelector('#reset')
const saveButton = editor.querySelector('#save')
const loadbutton = editor.querySelector('#load')

const newMapBtn = document.querySelector('#newMapBtn')
const loadMapBtn = document.querySelector('#loadMapBtn')
const backToMenuBtn = editor.querySelector('#backToMenu')

const savePopup = document.querySelector('#savePopup')
const mapNameInput = document.querySelector('#mapNameInput')
const popupOkBtn = document.querySelector('#popupOkBtn')
const popupCancelBtn = document.querySelector('#popupCancelBtn')

//amount of cells in grid
const gridSize = 20
//size of cell inside grid
const cellSize = 35

let cells = []

let gridMousePos = new Point()


backToMenuBtn.addEventListener('click', () => {
    toggleScreen(editor, menu)
})
newMapBtn.addEventListener('click', () => {
    toggleScreen(menu, editor)
    clearGrid()
    generateGrid()
})
loadMapBtn.addEventListener('click', () => {
    toggleScreen(menu, editor)
    loadGrid()
})

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
    clearGrid()
    generateGrid()
})

saveButton.addEventListener('click', () => {
    savePopup.classList.remove('hidden')
    mapNameInput.value = ''
    mapNameInput.focus()
})

popupOkBtn.addEventListener('click', () => {
    const mapName = mapNameInput.value.trim()
    if (mapName) {
        saveGrid(mapName)
        savePopup.classList.add('hidden')
    } else {
        alert('Prosím zadej jméno mapy!')
    }
})

popupCancelBtn.addEventListener('click', () => {
    savePopup.classList.add('hidden')
})

mapNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        popupOkBtn.click()
    }
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

function clearGrid() {
    grid.innerHTML = ''
    cells = []
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

function saveGrid(mapName = 'Map') {
    localStorage.setItem(mapName, JSON.stringify(cells))
}

function loadGrid() {
    cells = []
    grid.innerHTML = ''
    const loaded = JSON.parse(localStorage.getItem('Map'))
    
    for (let index = 0; index < loaded.length; index++) {        
        const item = loaded[index]
        const el = document.createElement('div')

        grid.appendChild(el)

        cells.push(new Cell(el, item.state, item.rotation))
   
    }
}

function toggleScreen(hideEl, showEl)  {
    hideEl.classList.add('hidden')
    showEl.classList.remove('hidden')
}





