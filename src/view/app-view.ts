import { Canvas } from "./canvas/canvas";
import { StatusBar } from "./status-bar/status-bar";
import { ToolBar } from "./tool-bar/tool-bar";

export class App {
    private canvas: Canvas;
    private statusBar: StatusBar;
    private toolBar: ToolBar;
    constructor() {
        this.canvas = new Canvas();
        this.statusBar = new StatusBar();
        this.toolBar = new ToolBar();
    }
}