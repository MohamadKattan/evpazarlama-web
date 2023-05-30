// this class for Router views based on get or post url
import { Router } from 'express';
import { getAllAds } from '../controler/database_srv.js'; // fireStore method 

const router = Router();

router.get('/', getAllAds); // render to home page 

// router.get('/get', authg);

// router.get('/post', postAuth);

export default router;
