/**
 * ## TunePad project menu bar
 * ```html
 * <tunepad-project-menu></tunepad-project-menu>
 * ```
 */
export declare class TunePadProjectMenu extends HTMLElement {
    static readonly ELEMENT = "tunepad-project-menu";
    static observedAttributes: string[];
    /** TunePad audio system */
    private audio;
    /** all of the HTML elements are contained within a shadow DOM */
    private root;
    /** name input field */
    private nameField;
    /** internal state for tempo that gets externalized to the audio system via custom event */
    private bpm;
    /** internal state for time signature */
    private time;
    /** internal state for key signature */
    private key;
    private playButton;
    private pauseButton;
    private stopButton;
    private settingsButton;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    onClockReset(): void;
    onClockTimeChange(): void;
    onTempoChange(): void;
    onKeyChange(): void;
    onTimeSignatureChange(): void;
    onPlayStart(): void;
    onAllPause(): void;
    private setName;
    private setTempo;
    private setTimeSignature;
    private setKey;
    private emitUpdateEvent;
    private emitButtonEvent;
    private setHTML;
    private waitForWindowLoad;
    private bindDialogEvents;
}
