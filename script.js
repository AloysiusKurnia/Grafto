define("view/view", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.View = void 0;
    class View {
    }
    exports.View = View;
});
define("view/canvas/canvas", ["require", "exports", "view/view"], function (require, exports, view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Canvas = void 0;
    class Canvas extends view_1.View {
        constructor() {
            super();
            this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.elem.id = 'canvas';
        }
        getElement() {
            return this.elem;
        }
    }
    exports.Canvas = Canvas;
});
define("view/status-bar/status-bar", ["require", "exports", "view/view"], function (require, exports, view_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StatusBar = void 0;
    class StatusBar extends view_2.View {
        constructor() {
            super();
            this.elem = document.createElement('div');
            this.elem.id = 'status-bar';
        }
        getElement() {
            return this.elem;
        }
    }
    exports.StatusBar = StatusBar;
});
define("view/tool-bar/tool-bar", ["require", "exports", "view/view"], function (require, exports, view_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ToolBar = void 0;
    class ToolBar extends view_3.View {
        constructor() {
            super();
            this.elem = document.createElement('div');
            this.elem.id = 'tool-bar';
        }
        getElement() {
            return this.elem;
        }
    }
    exports.ToolBar = ToolBar;
});
define("view/app-view", ["require", "exports", "view/canvas/canvas", "view/status-bar/status-bar", "view/tool-bar/tool-bar"], function (require, exports, canvas_1, status_bar_1, tool_bar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    class App {
        constructor() {
            this.canvas = new canvas_1.Canvas();
            this.statusBar = new status_bar_1.StatusBar();
            this.toolBar = new tool_bar_1.ToolBar();
            const getDocument = document.getElementById('app');
            if (getDocument !== null) {
                this.elem = getDocument;
            }
            this.elem.appendChild(this.toolBar.getElement());
            this.elem.appendChild(this.canvas.getElement());
            this.elem.appendChild(this.statusBar.getElement());
        }
    }
    exports.App = App;
});
define("index", ["require", "exports", "view/app-view"], function (require, exports, app_view_1) {
    "use strict";
    return function main() {
        new app_view_1.App();
    };
});
