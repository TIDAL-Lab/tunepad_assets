import { Pool } from "pg";


export interface AudioSample {
    id?: number;
    project_id: string;   // project uuid field
    filename: string;         // sample file name
    data: string;         // base64 encoded audio file data
    modified: string;     // timestamp
    deleted: boolean;     // soft delete
}


export class AudioSampleModel {

    public static SQL_INIT = `
CREATE TABLE IF NOT EXISTS audio_samples (
    sample_id VARCHAR(100) PRIMARY KEY,
    filename VARCHAR(100) NOT NULL DEFAULT '',
    data TEXT NOT NULL DEFAULT '',
    modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
GRANT ALL PRIVILEGES ON TABLE audio_samples TO admin;
`;

    private pool: Pool;

    constructor(pool : Pool) {
        this.pool = pool;
    }


    async init() : Promise<any> {
        const result = await this.pool.query(AudioSampleModel.SQL_INIT);
        return result;
    }


    async retrieve(sample_id : string) : Promise<AudioSample | null> {
        const sql = 'SELECT * FROM audio_samples WHERE sample_id = $1';
        const result = await this.pool.query(sql, [ sample_id ]);
        return (result.rowCount === 1) ? result.rows[0] as AudioSample : null;
    }

    // insert / update
    async update(sample_id : string, filename : string, data : string): Promise<AudioSample | null> {
        const sql = `
            INSERT INTO audio_samples (sample_id, filename, data) VALUES ($1, $2, $3)
            ON CONFLICT (sample_id) DO UPDATE
            SET filename = EXCLUDED.filename, data = EXCLUDED.data
            RETURNING *`;
        const result = await this.pool.query(sql, [ sample_id, filename, data ]);
        return (result.rowCount === 1) ? result.rows[0] as AudioSample : null;
    }


    async delete(sample_id : string) : Promise<boolean> {
        const sql = 'DELETE FROM audio_samples WHERE sample_id = $1';
        const result = await this.pool.query(sql, [ sample_id ]);
        return true;
    }
}
