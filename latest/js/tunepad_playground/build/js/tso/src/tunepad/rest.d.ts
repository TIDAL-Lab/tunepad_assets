export declare class RESTDatastore {
    private host;
    constructor(host: string);
    getProject(id: number): Promise<any>;
    getProjectCells(id: number): Promise<Array<any>>;
    getPublicSynthPatches(): Promise<Array<any>>;
    private _sendJSON;
    lookupPatch(patchID: number): string;
}
