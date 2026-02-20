import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';
import { AudioSample, AudioSampleModel } from './sample';

startServer();


/**
 * Load up the express server!
 */
async function startServer() {

    //------------------------------------------------------------
    // load environment variables
    //------------------------------------------------------------
    dotenv.config();


    //------------------------------------------------------------
    // postgres connection pool
    //------------------------------------------------------------
    const pool = new Pool({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: toInt(process.env.PG_PORT, 5432)
    });

    //------------------------------------------------------------
    // configure express app
    //------------------------------------------------------------
    const PORT = toInt(process.env.PORT, 3030);
    const app = express();
    app.use(cors());
    app.use(express.json({ limit: '30mb' }));
    app.use(express.urlencoded({ limit: '30mb', extended: true }));
    app.use(express.static(path.join(__dirname, '../latest')));
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });


    //------------------------------------------------------------
    // create database models
    //------------------------------------------------------------
    const audioSampleModel = new AudioSampleModel(pool);
    await audioSampleModel.init();



    //------------------------------------------------------------
    // AudioSample CRUD api endpoints
    //------------------------------------------------------------

    // create / update an audio sample
    app.post('/api/audio/:sample_id', async (req, res) => {
        try {
            const sample_id = req.params.sample_id;
            const { filename, data } = req.body;
            const sample = await audioSampleModel.update(sample_id, filename, data);
            if (sample) return res.status(201).json({ success : true });
        } catch (error) {
            console.log(error);
        }
        res.status(500).json({ success : false });
    });

    // retrieve an audio sample
    app.get('/api/audio/:sample_id', async (req, res) => {
        try {
            const sample_id = req.params.sample_id;
            const sample = await audioSampleModel.retrieve(sample_id);
            res.json( { success : (sample != null), sample });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success : false, error });
        }
    });

    // delete an audio sample
    app.delete('/api/audio/:sample_id', async (req, res) => {
        try {
            const sample_id = req.params.sample_id;
            await audioSampleModel.delete(sample_id);
            res.status(201).json( { success : true });
        } catch (error) {
            res.status(500).json( { success : false, error });
        }
    });

    // direct access an audio sample file
    app.get('/audio/:sample_id', async (req, res) => {
        const sample_id = req.params.sample_id;
        const sample = await audioSampleModel.retrieve(sample_id);
        if (sample) {
            res.write(sample.data);
        } else {
            res.status(404).send("Audio sample not found.");
        }
    });
}


function toInt(d: any, defaultValue: number = 0): number {
    const n = parseInt(d);
    return isNaN(n) ? defaultValue : n;
}
