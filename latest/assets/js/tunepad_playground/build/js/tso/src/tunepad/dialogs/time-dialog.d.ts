/**
 * Time Signature Dialog (extends HTMLDialogElement)
 * ```html
 * <dialog is="time-signature-dialog" time="4/4"></dialog>
 * ```
 */
export declare class TimeSignatureDialog extends HTMLDialogElement {
    static readonly ELEMENT = "time-signature-dialog";
    static observedAttributes: never[];
    static show(numerator: number, denominator: number): HTMLDialogElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * When an attribute is changed on our custom component, this gets fired...
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private setTimeSignature;
    private getNumerator;
    private getDenominator;
    /**
     * Fire custom events whenever the value is changed by the user
     */
    private emitUpdateEvent;
}
