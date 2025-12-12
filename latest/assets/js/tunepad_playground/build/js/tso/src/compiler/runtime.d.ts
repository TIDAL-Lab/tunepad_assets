/**
 * TypeScript facing interface for Pyodide. The actual pyodide runtime is
 * loaded in a web worker (/assets/js/PythonWorker.js)
 */
export declare class PythonRuntime {
    static VERSION: string;
    private static instance;
    private readonly worker;
    private readonly queue;
    private readonly cache;
    private readonly modules;
    private active;
    private warnings;
    private listeners;
    private interruptBuffer;
    /**
     * Start the single python runtime. This is safe to call multiple times.
     * @param workerPath Path to the PythonWorker.js file (e.g. '/assets/js/PythonWorker.js')
     * @param pythonPath Path to python source files (e.g. '/assets/python')
     */
    static init(workerPath?: string, pythonPath?: string): PythonRuntime;
    private constructor();
    private findActiveRequest;
    private sendRenameWarnings;
    static destroy(): void;
    /**
     * Schedule a python compile. If force is true, force a recompile even if the code hasn't changed
     */
    static compile(cell: PythonCell, force?: boolean): Promise<CompileResponse>;
    /**
     * Rename a cell (just calls compile)
     */
    static renameCell(cell: PythonCell, oldName: string): Promise<CompileResponse>;
    /**
     * Run the given python code in the context of a cell
     */
    static runCode(code: string, cell: PythonCell): Promise<CompileResponse>;
    /**
     * Preload cell as module in the virtual pyodide filesystem
     */
    static preload(cell: PythonCell): Promise<CompileResponse>;
    /**
     * Preload cells as modules in the virutal pyodide filesystem
     */
    static preloadAll(cells: Array<PythonCell>): Promise<boolean>;
    /**
     * Get warning callbacks when cell dependencies are updated
     */
    static addWarningListener(uuid: string, listener: WarningListener): void;
    static removeWarningListener(uuid: string): void;
    static registerCanvas(name: string, canvas: HTMLCanvasElement): void;
    static unregisterCanvas(name: string): void;
    static deleteCell(cell: PythonCell): void;
    static getWarnings(): PythonError[];
    private hasWarnings;
    /**
     * Create a directory in Pyodide's internal file system
     * @param path directory name
     */
    static mkdir(path: string): void;
    /**
     * Read text data from a file in Pyodide's internal file system
     */
    static readFile(path: string): Promise<string>;
    /**
     * Write lines of text data file to Pyodide's internal file system
     * @param file full path and filename to write
     * @param data text data to write to the file
     */
    static writeFile(file: string, data: string): void;
    /**
     * Delete a file from Pyodide's internal file system
     * @param file full path and filename to delete
     */
    static deleteFile(file: string): void;
    /**
     * Rename a file in Pyodide's internal file system
     * @param file current file name and path
     * @param target new file name and path
     */
    static moveFile(file: string, target: string): void;
    private equivalentCode;
    private equivalent;
    private processQueue;
    private sendRequest;
    private removeFromCache;
    private static readonly _python_keywords;
    /**
     * Convert a string into a legal python identifier
     * Append a numerical suffix as many times as needed until unique value is produced.
     */
    static makePythonSafe(name: string, uuid: string): string;
    private duplicateName;
    /**
     * This originates from Pyodide. It sets the attribute name and value for all elements matching selector.
     */
    private setDOMElementAttribute;
}
export type PythonCallback = (response: CompileResponse) => void;
/**
 * A PythonCell is one unit of a notebook. It has a name, database uuid, and python code.
 * Cells act like individual python files in a module that can be imported from
 * one cell to another.
 */
export interface PythonCell {
    uuid: string;
    name: string;
    code: string;
    canvas: string;
}
/**
 * Interface for requesting compiles
 */
declare class CompileRequest {
    static REQUEST_ID: number;
    readonly id: number;
    constructor(cell: PythonCell, action: string, callback: PythonCallback, force?: boolean, code?: string);
    readonly cell: PythonCell;
    get uuid(): string;
    get name(): string;
    code: string;
    get canvas(): string;
    readonly action: string;
    readonly callback: PythonCallback;
    force: boolean;
    initiatedTime: number;
}
export declare class CompileResponse {
    readonly id: number;
    readonly uuid: string;
    readonly code: string;
    readonly name: string;
    readonly action: string;
    output: string[];
    trace: any;
    errors: PythonError[];
    dependencies: string[];
    globals: any;
    result: any;
    constructor(request: CompileRequest);
    get hasErrors(): boolean;
    get hasNoErrors(): boolean;
    close(): void;
}
export interface PythonError {
    name: string;
    message: string;
    details?: string;
    line: number;
    target?: string;
    source?: string;
}
type WarningListener = (warns: PythonError[]) => void;
export {};
