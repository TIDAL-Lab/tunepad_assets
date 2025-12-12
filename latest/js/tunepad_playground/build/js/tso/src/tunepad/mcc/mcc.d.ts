import { Note } from "../../audio";
/**
 * This class keeps a buffer of notes played and released to auto generate python code from an instrument UI
 */
export declare class NoteRecorder {
    static QUANT: number;
    private audio;
    private groups;
    get current(): NoteGroup;
    constructor();
    noteOn(note: number | Note): void;
    noteOff(note: number | Note): void;
    get currentHint(): string;
    get currentNoteNumbers(): number[];
    /** Get full history of notes played with rests inserted */
    getHistory(quant: boolean): string;
    clear(): void;
}
declare class NoteGroup {
    notes: NoteRecord[];
    get open(): boolean;
    get closed(): boolean;
    get empty(): boolean;
    get onset(): number;
    get release(): number;
    get durationSeconds(): number;
    constructor();
    noteOn(n: number | Note, onset: number): void;
    noteOff(n: number | Note, release: number): void;
    getHint(bpm: number, quant?: boolean): string;
    private formatBeats;
}
declare class NoteRecord {
    /** note onset in seconds (will get converted to beats) */
    onset: number;
    /** note release in seconds */
    release: number;
    /** notes being played */
    note: Note;
    /** is this note still being played */
    get open(): boolean;
    get closed(): boolean;
    constructor(note: Note, onset: number);
}
/**
 * Dialog that shows a history of notes played
 */
export declare class NoteHistoryDialog {
    private root;
    private mcc;
    private overlay;
    static quant: boolean;
    constructor(mcc: NoteRecorder);
    show(): void;
    hide(): void;
    private setHTML;
}
export {};
