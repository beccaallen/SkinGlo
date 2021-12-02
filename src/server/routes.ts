import * as express from 'express';

import DB from './db';

const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

router.get('/skinglo', async (req, res) => {
    try {
        let skinglo = await DB.skinglo.all();
        res.json(skinglo);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }    
});

router.get('/skinglo/photo/:api_id', async (req, res) => {
    try {
        let skinglo = await DB.skinglo.getPhotoPath(Number(req.params.api_id));
        res.json(skinglo);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }    
});

export default router;