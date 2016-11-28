import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import restaurant from '../controller/restaurant';

let router = express();

// Connect to the db
initializeDb(db => {
    // Internal middleware
    router.use(middleware({ config, db }));

    // API routes v1
    router.use('/restaurant', restaurant({ config, db }));
});

export default router;