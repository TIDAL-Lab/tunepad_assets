import { TimelineMidi } from './midi';
/**
 * Timeline that can show waveform view of audio
 *
 * <timeline-waveform
 *     playhead = "0"           // location of the playhead in beats
 *     theme = "dark | light"   // default is dark
 *     instrument = "piano">    // changes the color of the visualization
 */
export declare class TimelineWaveform extends TimelineMidi {
    static readonly ELEMENT = "timeline-waveform";
    static _TIMELINE_ID: number;
    private uuid;
    /** used to generate waveform data */
    private synth;
    private waveform;
    constructor();
    onTempoChange(): void;
    protected render(): void;
    /**
     * Creates SVG path that visualizes the waveform
     */
    protected renderData(): void;
    private regenerateWaveform;
}
