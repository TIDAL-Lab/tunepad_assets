/**
 * Timeline can show midi piano roll or waveform view of audio
 *
 * <tunepad-block-menu>
 *     <tunepad-block code="playNote($0)">
 *       playNote <div class="param" data-menu="pitch">60</div>
 *     </tunepad-block>
 *     <tunepad-block code="for i in range($0):" color="pink">
 *       repeat <div class="param" data-type="int">8</div> times
 *     </tunepad-block>
 * <tunepad-block-menu>
 */
export declare class BlockMenu extends HTMLElement {
    static readonly ELEMENT = "tunepad-block-menu";
    static observedAttributes: never[];
    private root;
    private menu;
    private target?;
    constructor();
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private formatCode;
    private waitForWindowLoad;
}
export declare class Block extends HTMLElement {
    static readonly ELEMENT = "tunepad-block";
    static observedAttributes: string[];
    constructor();
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
