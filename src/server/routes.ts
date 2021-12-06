import * as express from 'express';
import { RouteChildrenProps } from 'react-router-dom';
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

router.get("/skinglo/conflicts/:ingredientOneID&:ingredientTwoID", async (req, res) => {
    try {
        const ingredientOneID = req.params.ingredientOneID;
        const ingredientTwoID = req.params.ingredientTwoID;

        let conflicts = await DB.skinglo.getConflicts(ingredientOneID, ingredientTwoID);
        res.json(conflicts);
    } catch (error) {
        console.log(e);
        res.status(500).send(error);
    }
});

export default router;