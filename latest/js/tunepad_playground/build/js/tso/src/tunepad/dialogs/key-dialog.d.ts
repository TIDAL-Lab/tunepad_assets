/**
 * Key Dialog (extends HTMLDialogElement)
 *
 * ```javascript
 * KeyDialog.show('C major');
 * ```
 */
export declare class KeyDialog extends HTMLDialogElement {
    static readonly ELEMENT = "key-dialog";
    static observedAttributes: string[];
    static show(key: string): HTMLDialogElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * When an attribute is changed on our custom component, this gets fired...
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Fire custom events whenever the value is changed by the user
     */
    private emitUpdateEvent;
}
