/**
 * The wrapper for HTML/SVG elements.
 */
export abstract class View {
    /**
     * Obtain the element of the view.
     */
    abstract getElement(): Element;

    /**
     * `appencChild` but with multiple children.
     * 
     * @param children The array of the children to be appended.
     */
    appendChildren(children: View[]) {
        children.forEach(child => {
            this.appendChild(child);
        });
    }

    /**
     * Make the child to have this object as a parent.
     * 
     * @param child The child to be appended.
     */
    appendChild(child: View) {
        this.getElement().appendChild(child.getElement());
    }
}