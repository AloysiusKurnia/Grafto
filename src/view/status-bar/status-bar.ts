import { View } from "../view";

export class StatusBar extends View {
    elem: HTMLDivElement;
    constructor() {
        super();
        this.elem = document.createElement('div');
        this.elem.id = 'status-bar';

        this.elem.innerText = 'Shift-click on an empty space to add a new node. '
            + 'Shift-click and drag on a node to add a new edge.';
    }

    getElement(): Element {
        return this.elem;
    }
}