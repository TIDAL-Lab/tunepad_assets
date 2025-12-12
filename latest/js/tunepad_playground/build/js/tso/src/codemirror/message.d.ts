/**
 * <python-message type="test" pass="true">{ message }</python-message>
 */
export declare class PythonMessage extends HTMLElement {
    static DefineElement(): void;
    static observedAttributes: string[];
    private pass;
    private type;
    private message;
    private details?;
    private root;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private setFields;
    private setHTML;
    private addClass;
    private removeClass;
}
