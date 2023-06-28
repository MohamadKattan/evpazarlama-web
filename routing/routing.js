// this class for Router views based on get or post url
import { Router } from 'express';
import { getAllAds, getQueryOneAd, getAadsMoreThan20, getDetailsAd } from '../controler/database_srv.js'; // fireStore method 
import urlRoutekey from './route-config.js';

const router = Router();

router.get(`${urlRoutekey.home}`, getAllAds); // render to home page 

router.get(`${urlRoutekey.oneAd}`, getQueryOneAd); // loop on list for one ad 

router.get(`${urlRoutekey.allAds}`, getAadsMoreThan20); // for got all ads of list more than 20

router.get(`${urlRoutekey.datailsAd}`, getDetailsAd); // for display details ad click btn in dailog

export default router;
