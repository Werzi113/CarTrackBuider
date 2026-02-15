const states = ['grass', 'road', 'road-curved', 'water']
class Cell {
    

    constructor(domElement, state = 'grass', rotation = 0) {
        this.domElement = domElement;
        this.state = state;
        this.rotation = rotation;

        this.domElement.classList.add('bck-img')
        this.domElement.classList.add(state)
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