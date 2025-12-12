import { TunePadCell } from './cell';
/**
 * ## TunePad project
 * ```html
 * <tunepad-project
 *    uuid = "{{ database UUID }}"
 *    name = "{{ python module name }}"  // must be a valid python identifier
 *    readonly = "false"                 // default is false
 *    tempo = "90"
 *    key = "C Major"
 *    time = "4/4">
 *
 *    <!-- optional -->
 *    <tunepad-project-menu>
 *
 *    <!-- optional -->
 *    <tunepad-block-menu> ... </tunepad-block-menu>
 *
 *    <!-- required -->
 *    <tunepad-cell-list>
 *        <tunepad-cell></tunepad-cell>
 *        <tunepad-cell></tunepad-cell>
 *        <p> Other html content </p>
 *        <tunepad-cell></tunepad-cell>
 *
 *        <!-- etc -->
 *    </tunepad-cell-list>
 *
 *    <!-- optional -->
 *    <tunepad-outline></tunepad-outline>
 * </tunepad-project>
 * ```
 */
export declare class TunePadProject extends HTMLElement {
    static readonly ELEMENT = "tunepad-project";
    static observedAttributes: string[];
    /** unique database identifier */
    uuid: string;
    /** project name */
    name: string;
    /** TunePad audio system */
    private audio;
    /** allows project to keep track of added and deleted tunepad-cells */
    private observer?;
    constructor();
    onClockReset(): void;
    onClockTimeChange(): void;
    onTempoChange(): void;
    onKeyChange(): void;
    onTimeSignatureChange(): void;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    /**
     * Serialize this project and all cells. Return a JSON stringified object
     */
    save(): any;
    restore(data: any): Promise<void>;
    /**
     * Move a target <tunepad-cell> element to a new location.
     * Have to create a clone of the original to do this correctly.
     *
     * @param moved the uuid of the cell to move
     * @param newPosition index of the cell's new position
     * @returns the <tunepad-cell> that was reinserted
     */
    reorderCells(moved: string, newPosition: number): TunePadCell | undefined;
    recompileAll(): Promise<void>;
    private waitForWindowLoad;
    private emitUpdateEvent;
    private waitForElementConnected;
}
