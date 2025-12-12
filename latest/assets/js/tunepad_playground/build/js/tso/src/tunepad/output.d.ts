/**
 * <python-output>{ output }</python-output>
 */
export declare class PythonOutput extends HTMLElement {
    static DefineElement(): void;
    static observedAttributes: never[];
    private root;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setHTML;
    private toggleClass;
}
