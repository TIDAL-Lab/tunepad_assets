/**
 * ## TunePadCanvas cell (an object that other tunepad python cells can draw on)
 * ```html
 * <tunepad-canvas
 *    uuid = "{{ database UUID }}"
 *    name = "{{ valid python file }}"
 *    width = "{{ pixel width }}"
 *    height = "{{ pixel height }}">
 * </tunepad-canvas>
 * ```
 */
export declare class TunePadCanvas extends HTMLElement {
    static readonly ELEMENT = "tunepad-canvas";
    static observedAttributes: string[];
    /** unique database identifier */
    uuid: string;
    /** canvas "name". should be a legal and unique python identifier */
    name: string;
    /** inner canvas object */
    canvas: HTMLCanvasElement;
    /** all of the HTML elements are contained within a shadow DOM */
    private root;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * setName can be called from the outline class to change the name of a cell
     * to a valid python identifier.
     */
    setName(name: string): void;
}
