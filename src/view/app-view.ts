import { Canvas } from "./canvas/canvas";
import { StatusBar } from "./status-bar/status-bar";
import { ToolBar } from "./tool-bar/tool-bar";
import { View } from "./view";

/**
 * The main app. This will be enclosed in a div with id #app.
 */
export class App extends View {
    private canvas: Canvas;
    private statusBar: StatusBar;
    private toolBar: ToolBar;

    private elem: HTMLElement;
    constructor() {
        super();
        const getDocument = document.getElementById('app');
        if (getDocument !== null) {
            this.elem = getDocument;
        }
        this.canvas = new Canvas();
        this.statusBar = new StatusBar();
        this.toolBar = new ToolBar();

        this.appendChildren([
            this.toolBar,
            this.canvas,
            this.statusBar
        ]);
    }

    getElement(): Element {
        return this.elem;
    }
}