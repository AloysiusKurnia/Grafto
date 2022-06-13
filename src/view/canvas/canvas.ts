import { View } from "../view";

/**
 * The canvas on which the user can create graph.
 */
export class Canvas extends View {
    private elem: SVGSVGElement;
    private viewBoxSize = 240;
    private viewBoxCenterX = 0;
    private viewBoxCenterY = 0;

    constructor() {
        super();
        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.elem.id = 'canvas';

        this.updateViewBox();

        const testCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        testCircle.setAttribute('xc', '0');
        testCircle.setAttribute('yc', '0');
        testCircle.setAttribute('r', '5');

        this.elem.appendChild(testCircle);

        this.elem.addEventListener('click', ev => {
            const coord = this.userCoordinateToSVGCoordinate(ev.offsetX, ev.offsetY);
            testCircle.setAttribute('xc', `${coord.x}`);
            testCircle.setAttribute('yc', `${coord.y}`);
        });
    }

    /** @Override */
    getElement(): Element {
        return this.elem;
    }

    /**
     * Updates the viewbox of the element.
     */
    updateViewBox() {
        const left = this.viewBoxCenterX - this.viewBoxSize / 2;
        const top = this.viewBoxCenterY - this.viewBoxSize / 2;
        const size = this.viewBoxSize;
        this.elem.setAttribute('viewBox', `${left} ${top} ${size} ${size}`);
    }

    /**
     * Converts from user offset coordinate to in-svg coordinates.
     * 
     * @param x The x coordinate given by MouseEvent.offsetX.
     * @param y The x coordinate given by MouseEvent.offsetY.
     */
    private userCoordinateToSVGCoordinate(x: number, y: number) {
        // TODO: Calculate these
        const width = this.elem.clientWidth;
        const height = this.elem.clientHeight;

        return { x: 0, y: 0 };
    }
}