/**
 * ## TunePadFile cell writes a file to the python file system. Format will be inferred from file extension.
 * ```html
 * <tunepad-file
 *    uuid = "{{ database UUID }}"
 *    name = "{{ valid python file name path (e.g. "words.txt", "words.csv", "words.json" )}}">
 * contents of file
 * go in the inner html
 * </tunepad-file>
 * ```
 */
export declare class TunePadFile extends HTMLElement {
    static readonly ELEMENT = "tunepad-file";
    static observedAttributes: never[];
    /** all of the HTML elements are contained within a shadow DOM */
    private root;
    /** full file path name */
    get name(): string;
    private _loaded;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * User can upload a new file to replace the existing one
     */
    replaceFile(file: File): void;
    /**
     * Return a serialized snapshot of state
     */
    save(): Promise<any>;
    /**
     * Restore from a saved version
     */
    restore(data: any): void;
    /**
     * Update file information from file contents...
     */
    private updateFile;
    /**
     * file format based on file extension
     */
    private get fileType();
    private validFileType;
    /**
     * format data depending on the file type
     */
    private formatData;
    /**
     * file size as string
     */
    private formatBytes;
    /**
     * Only display n characters of the file
     */
    private subdata;
    /**
     * Convert a string into a legal python file path name
     */
    private makePythonSafe;
    private waitForWindowLoad;
    private lineCount;
    private setHTML;
    private addClass;
    private removeClass;
    private toggleClass;
}
