import { MusicTrace } from '../../audio';
/**
 * Draws music notation given a MusicTrace object
 */
export declare class TimelineScore extends HTMLElement {
    static readonly ELEMENT = "timeline-score";
    static observedAttributes: string[];
    /** all of the HTML elements are contained within a shadow DOM */
    private root;
    /** inner and outer container that allow for horizontal scrolling */
    private container;
    private scrollContainer;
    /** dimensions of outer scroll container (will get resized on compontent load) */
    private width;
    private height;
    /** TunePad audio engine */
    private audio;
    /** hold on to the generated notes so that we can step through notes with the playhead */
    private notes;
    /** carries note fragments from one measure to the next */
    private remainders;
    private clef;
    private beatmap;
    private get isPercussion();
    /** trace object used to generate score. when this property is updated, the score will rerender */
    private trace;
    /** total beat count for the current trace rounded up to the nearest measure */
    private get beats();
    constructor();
    setTrace(t: MusicTrace, force?: boolean): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    onClockReset(): void;
    onClockTimeChange(): void;
    onTempoChange(): void;
    onTimeSignatureChange(): void;
    onKeyChange(): void;
    private emitEvent;
    /**
     * Take a MusicTrace and render sheet music using Vex.
     */
    render(): void;
    private _render;
    /**
     * Highlight notes that intersect with the playhead
     */
    movePlayhead(ph: number): void;
    private playhead;
    private beatToX;
    private xToBeat;
    private generateVoice;
    private groupIntoChords;
    private splitGroups;
    screenToSVG(screenX: number): number;
    SVGToScreen(svgX: number): number;
}
