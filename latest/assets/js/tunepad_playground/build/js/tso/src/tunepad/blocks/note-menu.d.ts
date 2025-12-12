import { Synthesizer, MusicKey } from '../../audio';
import { NoteRecorder } from '../mcc/mcc';
/**
 * Select note durations from a popup menu
 *
 * <tunepad-note-menu>
 */
export declare class NoteMenu extends HTMLElement {
    static readonly ELEMENT = "tunepad-note-menu";
    root: ShadowRoot;
    key: MusicKey;
    synth?: Synthesizer;
    mcc: NoteRecorder;
    promise?: (result: string) => void;
    result: string;
    menu: string;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    getChordEmoji(chordNum: number): "😵‍💫" | "🥺" | "😀" | "🙁" | "🤨" | "🤩" | "🥳" | "😧";
    static show(menuName?: string, currentSelection?: string): Promise<string>;
    hide(): void;
    private setNoteInfo;
    private previewChord;
    private setChordInfo;
    private setHTML;
    private setBackground;
}
