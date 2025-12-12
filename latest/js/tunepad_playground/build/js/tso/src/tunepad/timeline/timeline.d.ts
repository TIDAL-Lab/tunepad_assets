import { MusicTrace } from '../../audio';
/** Timeline has three different view options */
export declare const TimelineViews: string[];
/**
 * Timeline can show midi piano roll or waveform view of audio
 *
 * <tunepad-timeline
 *     playhead = "0"           // location of the playhead in beats
 *     theme = "dark | light"   // default is dark
 *     instrument = "piano"     // changes the color of the visualization
 *     view = "waveform">       // visualization "midi", "waveform", "score", "none"
 */
export declare class Timeline extends HTMLElement {
    static readonly ELEMENT = "tunepad-timeline";
    static observedAttributes: string[];
    /** view attribute (midi, waveform, score) */
    private view;
    private get isWaveform();
    private get isMidiRoll();
    private get isScore();
    private trace;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    setTrace(t: MusicTrace, force?: boolean): void;
    private switchView;
}
