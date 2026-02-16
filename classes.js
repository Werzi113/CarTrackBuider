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
            this.findClosestRoad(cellsGrid)
            break;
        }
    }

    findClosestRoad(cellsGrid) {
        let neighbors = []

        const pt = getPointOf(this.positionCell)

        neighbors.push(getCell(new Point(pt.x, pt.y + 1)))
        neighbors.push(getCell(new Point(pt.x, pt.y -1)))
        neighbors.push(getCell(new Point(pt.x + 1, pt.y)))
        neighbors.push(getCell(new Point(pt.x - 1, pt.y)))


        neighbors.forEach((item) =>{
            console.log(item);
            
        })
        
    }







}