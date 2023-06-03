// this class for Router views based on get or post url
import { Router } from 'express';
import { getAllAds, getQueryOneAd } from '../controler/database_srv.js'; // fireStore method 
import urlRoutekey from './route-config.js';

const router = Router();

router.get(`${urlRoutekey.home}`, getAllAds); // render to home page 

router.get(`${urlRoutekey.oneAd}`, getQueryOneAd);

export default router;
