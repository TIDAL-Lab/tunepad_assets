import { Note, MIDIEvent, SynthPatch } from '../audio';
/**
 * ## TunePad generic instrument interface that wraps piano, drums, bass, guitar, etc.
 * ```html
 * <tunepad-instrument midi-in="false" midi-out="false"></tunepad-instrument>
 * ```
 */
export declare class TunePadInstrument extends HTMLElement {
    static readonly ELEMENT = "tunepad-instrument";
    static observedAttributes: string[];
    /** all of the HTML elements are contained within a shadow DOM */
    private root;
    /** used to generate note hints and recordings */
    private recorder;
    /** midi input enabled */
    private midiIn;
    /** midi output enabled */
    private midiOut;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private setMidiLED;
    private setMidiIn;
    private setMidiOut;
    setPatch(patch: SynthPatch, action: string): void;
    private relayEvent;
    private emitNoteEvent;
    private emitUpdateEvent;
    private emitActionEvent;
    onMidiInput(event: MIDIEvent): void;
    private setNoteHint;
    showNoteOn(note: Note): void;
    showNoteOff(note: Note): void;
    allNotesOff(): void;
    private buildPatchMenu;
    private addClass;
    private removeClass;
    private setClass;
    private setHTML;
}
