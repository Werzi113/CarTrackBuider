const states = ['grass', 'road', 'road-curved', 'water']
class Cell {
    

    constructor(domElement, state = 'grass', rotation = 0) {
        this.domElement = domElement;
        this.state = state;
        this.rotation = rotation;

        this.initializeDomElement(this.domElement)
    }

    initializeDomElement(el) {
        el.classList.add('bck-img')
        el.classList.add(this.state)
        el.style.transform = 'rotate(' + this.rotation + 'deg)';
    }

    rotate(degrees) {
        this.rotation = (this.rotation + degrees)
        this.domElement.style.transform = 'rotate(' + this.rotation + 'deg)';
    }

    shiftCellState() {
        
        
        const index = states.indexOf(this.state)
        const nextIndex = (index + 1) % states.length
        this.state = states[nextIndex]


        this.domElement.classList.remove(states[index])
        this.domElement.classList.add(this.state)
    }



}
class Point {
    constructor(x = undefined, y = undefined) {
        this.x = x
        this.y = y
    }
}
class Car {
    constructor(positionCell) {
        this.positionCell = positionCell
        
        
        this.carDomElement = document.createElement('div')
        this.carDomElement.classList.add('car')
    
        this.spawnAt()

        this.mooving = true
    }

    spawnAt(atCell = this.positionCell) {
        atCell.domElement.appendChild(this.carDomElement)

    }

    moveTo(targetElement) {
        this.positionCell.domElement.removeChild(this.carDomElement)
        this.spawnAt(targetElement)
    }

    startMoving(cellsGrid) {
        
        while (this.mooving) {
            
            setTimeout(() => {

                let newCell = this.findClosestRoad(cellsGrid)
                this.moveTo(newCell)     
            }, 1000);

            
        }
    }

    findClosestRoad(cellsGrid) {
        let neighbors = []

        const index = cellsGrid.indexOf(this.positionCell)
        
        
        

        neighbors.push(cellsGrid[index + gridSize])
        neighbors.push(cellsGrid[index - gridSize])
        neighbors.push(cellsGrid[index + 1])
        neighbors.push(cellsGrid[index - 1])


        for (let index = 0; index < neighbors.length; index++) {
            const item = neighbors[index];
            if (item.state == 'road' || item.state == 'road-curved') {
                console.log(item);
                
                return item
            }
        }
        
    }







}