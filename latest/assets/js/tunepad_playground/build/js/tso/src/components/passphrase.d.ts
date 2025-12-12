/**
 * Passphrase authenticator using emoji selections.
 * ```html
 * <pass-phrase digits="6"></dialog>
 * ```
 *
 * When the user enters all of the emojis, the element will emit a custom event 'passphrase-entered'
 */
export declare class Passphrase extends HTMLElement {
    static readonly ELEMENT = "pass-phrase";
    static DefineElement(): void;
    static observedAttributes: string[];
    private root;
    private charset;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * When an attribute is changed on our custom component, this gets fired...
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private render;
    reset(): void;
    private handleKeypress;
    private advanceFocus;
    private setFocus;
    private setHTML;
    private isComplete;
    private emitEnterEvent;
}
