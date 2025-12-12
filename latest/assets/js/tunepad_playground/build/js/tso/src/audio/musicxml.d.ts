import { MusicTrace } from './trace';
/**
 * Used to generate music XML code from a MusicTrace object
 */
export declare class MusicXMLGenerator {
    private audio;
    constructor();
    generate(trace: MusicTrace, percussion?: boolean): string;
    private get xmlKey();
    private calculateNote;
    private getNoteDurationValue;
    private greedyNoteValue;
    private calculateClef;
    private calculateTies;
    private calculateNoteFit;
    private assembleXML;
}
