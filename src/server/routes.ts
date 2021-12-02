import * as express from 'express';
import DB from './db';

const router = express.Router();


router.get('/skinglo', async (req, res) => {
    try {
        let skinglo = await DB.skinglo.all();
        res.json(skinglo);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }    
})

export default router;