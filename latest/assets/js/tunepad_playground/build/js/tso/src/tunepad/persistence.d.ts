import { TunePadProject } from './project';
/**
 * Persistence provider using Y.js web socket provider
 */
export declare class ProjectPersistence {
    private provider;
    private yProject;
    private yCells;
    private project;
    private static instance;
    /**
     * Using a singleton pattern to avoid creating multiple yDocs.
     * This gets called from TunePadProject.
     */
    static Initialize(project: TunePadProject): void;
    /**
     * Set up the yDoc and websocket provider. Then wait for sync...
     */
    private constructor();
    /**
     * This gets called after the provider has synced up with the datastore.
     */
    private init;
    private ySave;
    private yLoad;
    /**
     * From <tunepad-project awareness="username:usercolor">
     */
    private setAwareness;
    /**
     * When the add cell button is pressed
     */
    private addCell;
    private copyCell;
    private bindYText;
    private formatDate;
    private date_formatter;
    private restore;
    private reorder;
    private waitForElementConnected;
}
