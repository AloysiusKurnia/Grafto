import { View } from "../view";

export class ToolBar extends View {
    private elem: HTMLDivElement;
    constructor() {
        super();
        this.elem = document.createElement('div');
        this.elem.id = 'tool-bar';
    }

    getElement(): Element {
        return this.elem;
    }
}