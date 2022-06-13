import { Canvas } from "./canvas/canvas";
import { StatusBar } from "./status-bar/status-bar";
import { ToolBar } from "./tool-bar/tool-bar";

export class App {
    private canvas: Canvas;
    private statusBar: StatusBar;
    private toolBar: ToolBar;

    private elem: HTMLElement;
    constructor() {
        this.canvas = new Canvas();
        this.statusBar = new StatusBar();
        this.toolBar = new ToolBar();

        const getDocument = document.getElementById('app');
        if (getDocument !== null) {
            this.elem = getDocument;
        }

        this.elem.appendChild(this.toolBar.getElement());
        this.elem.appendChild(this.canvas.getElement());
        this.elem.appendChild(this.statusBar.getElement());
    }
}