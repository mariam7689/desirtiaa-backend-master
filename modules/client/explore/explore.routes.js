import express from 'express';
import { getAllHiddenGems, getHiddenGemById } from './explore.controller.js';

const router = express.Router();

// مسار تجريبي
router.get('/test', (req, res) => res.send('Router is working perfectly!'));

// مسار كل الأماكن
router.get('/gems', getAllHiddenGems);

// مسار مكان واحد محدد
router.get('/gems/:id', getHiddenGemById);

export default router;