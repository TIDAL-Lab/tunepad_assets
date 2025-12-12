import { Note } from "./note";
export declare const MAJOR_KEYS: string[];
export declare const MINOR_KEYS: string[];
export declare const MODES: string[];
export declare class MusicKey {
    /** e.g. 'C', 'F', 'C♯/D♭' */
    readonly key: string;
    /** 'major' or 'minor' */
    readonly mode: "major" | "minor";
    /** start step (0 - 11) of a scale in this key */
    readonly base: number;
    /** combined name */
    get name(): string;
    /** short name without the slash and alias key */
    get shortName(): string;
    get isMajor(): boolean;
    get isMinor(): boolean;
    /** map name to vex compatible key signature */
    get signature(): string;
    /** create a key from the given name (e.g. 'A minor') */
    constructor(name: string);
    get relativeMajor(): MusicKey;
    get relativeMinor(): MusicKey;
    /** key-specific note name with correct accidental indicator */
    getNoteName(note: Note, includeAccidental?: boolean): string;
    /** key-specific accidental for the given note */
    getAccidental(note: Note): '♯' | '♭' | '♮' | '';
    /** Returns the proper diatonic chord roman numeral based on the key and a given chord number */
    getChordRoman(chord: number): string;
    /** Returns the proper diatonic chord name based on the key and a given chord number */
    getChordName(chord: number): string;
    /** Returns a list of notes representing the given triad starting in the 4th octave */
    getDiatonicTriad(chord: number, octave?: number): number[];
    /** Does this key naturally include this note (should it be displayed without an accidental)? */
    containsNote(note: Note): boolean;
    private stripAccidental;
}
