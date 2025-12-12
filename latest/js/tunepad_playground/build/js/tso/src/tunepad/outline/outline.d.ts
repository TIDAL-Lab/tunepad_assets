/**
 * <tunepad-outline></tunepad-outline>
 */
export declare class ProjectOutline extends HTMLElement {
    static readonly ELEMENT = "tunepad-outline";
    static observedAttributes: never[];
    private root;
    private menu;
    private observer;
    private ordering;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private rebuildMenu;
    private addCell;
    private emitReorderEvent;
}
