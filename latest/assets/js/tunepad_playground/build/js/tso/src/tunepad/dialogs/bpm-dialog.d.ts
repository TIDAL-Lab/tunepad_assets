/**
 * Tempo Dialog (extends HTMLDialogElement)
 * ```html
 * <dialog is="bpm-dialog" tempo="90"></dialog>
 * ```
 */
export declare class BPMDialog extends HTMLDialogElement {
    static readonly ELEMENT = "bpm-dialog";
    static observedAttributes: string[];
    private bpm;
    static show(tempo: number): HTMLDialogElement;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * When an attribute is changed on our custom component, this gets fired...
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private setTempo;
    private adjustTempo;
    /**
     * SPINNER +/- BUTTONS
     * events for the tempo buttons. we implement press and hold
     * to rapidly increase the tempo by holding the button down.
     */
    private bindSpinnerButton;
    /**
     * Fire custom events whenever the value is changed by the user
     */
    private emitUpdateEvent;
}
