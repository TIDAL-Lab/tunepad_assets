import { PythonEditor } from '../codemirror';
import { CompileResponse } from '../compiler/runtime';
/**
 * ## TunePad code cell.
 * ```html
 * <tunepad-cell
 *    uuid = "{{ database UUID }}"
 *    name = "{{ valid python file }}"
 *    saved = "{{ date }}"
 *    readonly = "false"
 *    autocompile = "false"
 *    theme = "dark | light"
 *    timeline = "midi" | "waveform" | "score" | "none"
 *    instrument = "piano"
 *    patch = "grand-piano"
 *    canvas = "{{ canvas name }}"
 *    host = "https://api.tunepad.com"
 *    font-size = "13px"
 *    midi-out = "false"
 *    mini-in = "false">
 * playNote(30)  # default Python code here...
 * </tunepad-cell>
 * ```
 */
export declare class TunePadCell extends HTMLElement {
    static readonly ELEMENT = "tunepad-cell";
    static observedAttributes: string[];
    /** unique database identifier */
    private _uuid;
    /** REQUIRED attribute -- unique database identifier */
    get uuid(): string;
    /** python "file" name. should be a legal and unique python identifier */
    name: string;
    /** contents of the code editor */
    get code(): string;
    /** canvas attribute */
    get canvas(): string;
    /** all of the HTML elements are contained within a shadow DOM */
    private root;
    /** <tunepad-python-editor> element */
    private editor;
    /** <tunepad-timeline> element */
    private timeline;
    /** name input field */
    private nameField;
    /** automatically compile after line edits */
    private autocompile;
    /** generate midi output from the keyboard */
    private midiOut;
    /** listen for incoming midi events */
    private midiIn;
    /** code changed */
    private codeChanged;
    /** which virtual instrument to show (piano, bass, guitar, drums, definitions) */
    private instrument;
    /** patch name (e.g. 'grand-piano', '808-drums') */
    private patch;
    /** audio synthesizer */
    private synth;
    /** gets created by the TunePad runtime */
    private trace;
    /** TunePad audio system */
    private audio;
    /** duration of the audio loop in beats (rounded up to nearest measure) */
    private duration;
    /** datastore host url for loading custom sounds */
    private host;
    /** connectedCallback function completed? */
    private _loaded;
    /** audio scheduling helpers */
    get currentBeat(): number;
    get cummulativeBeats(): number;
    get beatsPerMeasure(): number;
    get currentMeasure(): number;
    get cummulativeMeasure(): number;
    get remainingBeats(): number;
    get percentBeats(): number;
    get clockTime(): number;
    get startTime(): number;
    get startBeat(): number;
    get elapsedTime(): number;
    get beatsPerSec(): number;
    get secsPerBeat(): number;
    get elapsedBeats(): number;
    get durationMeasures(): number;
    private _start_time;
    private _start_beat;
    private _last_measure;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Return a serialized snapshot of state
     */
    save(): any;
    /**
     * Restore from a saved version
     */
    restore(data: any, loadPython?: boolean): void;
    /**
     * I'm not sure we should keep this or not. Trying to figure out how bind the codemirror editor with Y.js
     */
    getEditor(): PythonEditor;
    /**
     * Replace code in the editor
     * @param code
     */
    replaceCode(code: string): void;
    /**
     * Trigger a python compile and display any errors, warnings, messages, or print outputs
     * that result.
     */
    recompile(force?: boolean): Promise<void>;
    private _preloaded;
    /**
     * Run the provided python code in this cell and return the result.
     * Recompile should be called first.
     */
    runPythonCode(code: string): Promise<CompileResponse>;
    /**
     * Call a python event function (e.g. animate)
     */
    pythonEvent(event: string, args?: number[]): Promise<CompileResponse>;
    private postCompile;
    private setOutput;
    /**
     * setName can be called from the outline class to change the name of a cell
     * to a valid python identifier.
     */
    setName(name: string): void;
    private setAutoCompile;
    private setReadOnly;
    private setMidiOut;
    private setMidiIn;
    private setTheme;
    private setTimelineView;
    private setInstrument;
    private setPatch;
    private showLoader;
    private hideLoader;
    private playNote;
    private releaseNote;
    private instrumentAtPlayhead;
    private instrumentNoteOn;
    private instrumentNoteOff;
    private instrumentAllNotesOff;
    private cueMeasure;
    /**
     * Animate the playhead
     */
    animation(): void;
    /**
     * Used to cue up one measure of audio at a time ...
     */
    audioTimer: () => void;
    private _timer;
    private _last_pulse;
    private pulse;
    playAudio(): void;
    pauseAudio(): void;
    blockDropped(pointerX: number, pointerY: number, code: string): void;
    onClockReset(): void;
    onClockTimeChange(): void;
    onTempoChange(): void;
    onTimeSignatureChange(): void;
    onKeyChange(): void;
    /**
     * Called when the cell is first loaded into the page.
     * Bind all button clicks, codemirror events, etc.
     */
    private _bindUserEvents;
    private traceAtPlayhead;
    private addTrace;
    private clearTrace;
    emitUpdateEvent(property: string, value: any): void;
    private emitDeleteEvent;
    private emitCopyEvent;
    private loadCustomSounds;
    private loadSingleSound;
    private setClass;
    private addClass;
    private removeClass;
    private setHTML;
    private enable;
    private disable;
    private waitForWindowLoad;
}
