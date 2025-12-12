import { Extension } from "@codemirror/state";
/**
 * Used to add gutter markers
 */
export interface Marker {
    line: number;
    message?: string;
}
/**
 * TunePad python code editor
 *
 * ```html
 * <python-editor
 *    readonly = "{{ true | false }}"
 *    theme = "{{ dark | light }}"
 *    font-size = "13px">
 *
 * # default python code goes here...
 * for i in range(30):
 *     playNote(30)
 * </python-editor>
 * ```
 */
export declare class PythonEditor extends HTMLElement {
    static DefineElement(): void;
    static observedAttributes: string[];
    private theme;
    private themeState;
    private readonly;
    private readonlyState;
    private fontSize;
    private fontSizeState;
    private collabState;
    private state?;
    private view?;
    private root;
    get code(): string;
    private _initialContent?;
    set initialContent(s: string);
    private language;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Replace all text content
     */
    replaceCode(code: string): void;
    insertCodeInNewLine(code: string): void;
    /**
     * Turn on collaborative editing by binding to a Y.Text object
     */
    bindCollaboration(collab: Extension[]): void;
    unbindCollaboration(): void;
    /**
     * Set markers in the gutter. Will first clear existing markers of this type
     */
    setMarkers(marks: Marker[], type: "error" | "warning" | "trace"): void;
    /**
     * Clear all gutter markers of a given type
     */
    clearMarkers(type: "error" | "warning" | "trace"): void;
    /**
     * Add a single gutter marker of a given type
     */
    setMarker(mark: Marker, type: "error" | "warning" | "trace"): void;
    /**
     * A list of errors to show below the editor
     */
    set errors(errs: PythonError[]);
    /**
     * A list of warnings to show below the editor
     */
    set warnings(warns: PythonError[]);
    /**
     * A list of unit test results to show below the editor
     */
    /**
     * A list of messages to show below the editor
     */
    /**
     * A list of print outputs to show below the editor
     */
    private emitEvent;
    /**
     * Listen for user events that might trigger a recompile
     */
    private _lines;
    private _lineAt;
    private eventHandlers;
    private extensions;
    blockDropped(pointerX: number, pointerY: number, code: string): void;
    private insertBlockCode;
    private generateFontSizeTheme;
    private setHTML;
    private addClass;
    private removeClass;
    private waitForWindowLoad;
}
interface PythonError {
    name: string;
    message: string;
    details?: string;
    line: number;
    target?: string;
    source?: string;
}
export {};
