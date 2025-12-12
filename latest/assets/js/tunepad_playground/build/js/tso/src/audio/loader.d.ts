import { MusicTrace } from "./trace";
import { GrowableAudioBuffer } from "./buffer";
import { WaveformData } from "./waveform";
import { Synthesizer } from "./synth";
export type AudioRenderProgress = (percent: number) => void;
/**
 * Use this interface to request an audio buffer render.
 */
export interface AudioRenderRequest {
    uuid: string;
    beats: number;
    start?: number;
    trace: MusicTrace;
    synth: Synthesizer;
    force?: boolean;
    progress: (percent: number) => void;
    _callback?: (buffer: GrowableAudioBuffer) => void;
}
/**
 * This class maintains an asynchronous request queue to generate audio buffers.
 * This creates an abstraction layer around the synthesizer.
 * By using a queue, it means we're only doing one offline audio context render at a time.
 * This improves performance and makes loading much smoother.
 * One issue with OfflineAudioContext is that it can't be cancelled once a render starts.
 * This is a huge problem because audio rendering can take seconds or minutes to render
 * with complex synthesizers or effects.
 */
export declare class AudioLoadingService {
    private queue;
    private cache;
    private static instance?;
    private constructor();
    private static init;
    /**
     * Requests offline audio render of the given resource.
     */
    static requestAudioBuffer(request: AudioRenderRequest): Promise<GrowableAudioBuffer>;
    static cancelRequest(uuid: string): void;
    static clearCache(): void;
    static clearCacheEntry(uuid: string): void;
    private _processReqest;
    /**
     * Render audio into a buffer using an offline audio context.
     * Beats must be greater than zero.
     */
    private recordIntoBuffer;
}
/**
 * Use this interface to request visual waveform render
 */
export interface WaveformRenderRequest {
    uuid: string;
    beats: number;
    start?: number;
    increment: number;
    trace: MusicTrace;
    synth: Synthesizer;
    force?: boolean;
    progress: () => void;
    waveform?: WaveformData;
    _callback?: (waveform: WaveformData) => void;
}
/**
 * This class maintains an asynchronous request queue to generate visual waveforms.
 * This creates an abstraction layer around the synthesizer.
 * By using a queue, it means we're only doing one offline audio context render at a time.
 * This improves performance and makes loading much smoother.
 * One issue with OfflineAudioContext is that it can't be cancelled once a render starts.
 * This is a huge problem because audio rendering can take seconds or minutes to render
 * with complex synthesizers or effects. Allows for chunking audio into smaller parts
 * if the goal is to create a waveform visualization.
 */
export declare class WaveformLoadingService {
    private queue;
    private cache;
    private static instance?;
    private constructor();
    private static init;
    /**
     * Requests offline waveform render of the given resource.
     */
    static requestWaveform(request: WaveformRenderRequest): Promise<WaveformData>;
    static cancelRequest(uuid: string): void;
    static clearCache(): void;
    static clearCacheEntry(uuid: string): void;
    private _processReqest;
    /**
     * Render audio into a buffer using an offline audio context.
     * Beats must be greater than zero.
     */
    private renderNextSegment;
}
