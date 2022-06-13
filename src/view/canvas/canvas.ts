import { View } from "../view";

/**
 * The canvas on which the user can create graph.
 */
export class Canvas extends View {
    private elem: SVGSVGElement;
    
    constructor() {
        super();
        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.elem.id = 'canvas';
    }

    getElement(): Element {
        return this.elem;
    }
}