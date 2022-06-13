import { View } from "../view";

export class StatusBar extends View {
    elem: HTMLDivElement;
    constructor() {
        super();
        this.elem = document.createElement('div');
        this.elem.id = 'status-bar';

        this.elem.innerText = 'Lorem ipsum';
    }

    getElement(): Element {
        return this.elem;
    }
}