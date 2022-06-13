import { View } from "../view";

class GraphNode extends View {
    private elem: SVGCircleElement;
    constructor(x: number, y: number) {
        super();
        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.elem.setAttribute('x', `${x}`);
        this.elem.setAttribute('y', `${y}`);
        this.elem.classList.add('graph-node');
    }

    getElement(): Element {
        return this.elem;
    }

}