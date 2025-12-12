import { MusicTrace, TraceEvent, TunePadAudio } from '../../audio';
/**
 * Timeline that shows midi piano roll
 *
 * <timeline-midi
 *     playhead = "0"           // location of the playhead in beats
 *     theme = "dark | light"   // default is dark
 *     instrument = "piano">    // changes the color of the visualization
 */
export declare class TimelineMidi extends HTMLElement {
    static ELEMENT: string;
    static observedAttributes: string[];
    protected root: ShadowRoot;
    protected audio: TunePadAudio;
    protected svg: SVGSVGElement;
    protected container: HTMLDivElement;
    protected scrollContainer: HTMLDivElement;
    protected get beats(): number;
    /** duration of each measure in beats */
    protected get measure(): number;
    /** dimensions of outer container (will get resized on compontent load) */
    protected width: number;
    protected height: number;
    /** how many pixels wide per quarter note */
    protected get beatWidth(): number;
    /** how many pixels wide for the entire trace */
    protected get traceWidth(): number;
    /** pixels per second of audio */
    protected get pixelsPerSecond(): number;
    /** height of the top ruler */
    protected readonly rulerHeight = 20;
    /** height of the element minus the ruler */
    protected get scoreHeight(): number;
    /** trace object used to visualize audio data */
    protected trace: MusicTrace;
    /** playhead attribute: position of the orange playhead in beats */
    protected playhead: number;
    /** path that renders the playhead and handles user input events */
    protected _playheadLine: SVGPathElement;
    /** waveform is rendered inside this group */
    protected _dataGroup: SVGGElement;
    /** for the midi roll, how many vertical notes to show? */
    private tracks;
    private get isPercussion();
    constructor();
    setTrace(t: MusicTrace, force?: boolean): void;
    onClockReset(): void;
    onClockTimeChange(): void;
    onTempoChange(): void;
    onTimeSignatureChange(): void;
    onKeyChange(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    beatToX(beat: number): number;
    xToBeat(x: number): number;
    /**
     * (Re)draw the entire timeline
     */
    protected render(): void;
    private renderRuler;
    private renderPlayhead;
    private noteToTrack;
    protected renderData(): void;
    private renderNote;
    /**
     * Called when the window and possibly containing element are resized.
     */
    private resize;
    /**
     * Move playhead to a new location
     */
    private movePlayhead;
    private hidePreview;
    private previewNote;
    emitEvent(name: string, tevent?: TraceEvent): void;
    private _down;
    private registerTouchEvents;
}
