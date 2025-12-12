/**
 * ```html
 * <tunepad-icon icon="trash"></tunepad-icon>
 * ```
 * ### Available Icons
 * * autocompile
 * * checkmark
 * * copy
 * * cross-circle
 * * download
 * * error
 * * file
 * * file-csv
 * * file-json
 * * file-text
 * * gear
 * * insert
 * * history
 * * library
 * * lock
 * * midi
 * * midiroll
 * * minus
 * * music
 * * pause
 * * piano
 * * play
 * * plus
 * * question-circle
 * * recompile
 * * score
 * * spinner
 * * stop
 * * trash
 * * waveform
 */
export declare class TunePadIcon extends HTMLElement {
    static observedAttributes: string[];
    static readonly ELEMENT = "tunepad-icon";
    private div;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
