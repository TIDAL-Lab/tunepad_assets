import { GrowableAudioBuffer } from "./buffer";
export interface WaveSample {
    wmin: number;
    wmax: number;
    wavg: number;
}
/**
 * Stores a compressed/reduced version of an audio buffer with just enough information to
 * render a waveform visualization.
 */
export declare class WaveformData {
    private waveform;
    readonly sampleRate = 44100;
    readonly blockSize = 128;
    readonly stride = 8;
    get waveRate(): number;
    get isEmpty(): boolean;
    get duration(): number;
    private _top_path;
    private _bottom_path;
    /**
     * Create a new empty waveform
     */
    constructor();
    /**
     * Appends one waveform sample representing 128 underlying audio frames
     */
    appendSample(sample: WaveSample): void;
    /**
     * Append the given audio data to this waveform.
     */
    appendBuffer(buffer: AudioBuffer | GrowableAudioBuffer): void;
    /**
     * Create a new buffer from the given AudioBuffer object
     */
    static fromBuffer(buffer: AudioBuffer | GrowableAudioBuffer): WaveformData;
    get wavepath(): SVGPathElement;
}
