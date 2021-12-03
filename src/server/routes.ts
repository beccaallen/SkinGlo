import * as express from 'express';
import fetch from "node-fetch";
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

router.get("/products", async (req, res) => {
    try {
        let skinglo = await fetch("https://skincare-api.herokuapp.com/products");
        const data = await skinglo.json();
        res.json(data);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }  
})

export default router;