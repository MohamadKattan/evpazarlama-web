import { allAdsCollection } from '../config/config-app.js';
import { onSnapshot } from 'firebase/firestore';

let listGenerleAllAds = [];
let listAllRealEstate = [];
let listAllViecahle = [];
let listAllHotel = [];

// this function for got all ads from ads collection in real time and render to home page
function getAllAds(req, res) {
    listAllRealEstate = [];
    listAllViecahle = [];
    listAllHotel = [];

    try {
        onSnapshot(allAdsCollection, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listGenerleAllAds.push(doc.data());
                if (doc.data().amainCatogry == '0') {
                    listAllRealEstate.push(doc.data());


                } else if (doc.data().amainCatogry == '1') {
                    listAllViecahle.push(doc.data());


                } else {
                    listAllHotel.push(doc.data());
                }

            });
            res.status(200).render('pages/index', {
                title: "Home",
                realList: listAllRealEstate.length <= 20 ? listAllRealEstate : listAllRealEstate.slice(0, 20),
                listAllCar: listAllViecahle.length <= 20 ? listAllViecahle : listAllViecahle.slice(0, 20),
                listAllHotel: listAllHotel.length <= 20 ? listAllHotel : listAllHotel.slice(0, 20)
            });
        });

    } catch (ex) {
        res.status(400).send(`some thing went wrong ${ex}`);
    }
}

//  this method for get one ad and display on dailoge
function getQueryOneAd(req, res) {
    const id = req.query.id
    try {
        if (id != null) {
            for (var i = 0; i < listGenerleAllAds.length; i++) {
                if (listGenerleAllAds[i]['sitting']['adsId'] == id) {
                    res.status(200).send({ data: listGenerleAllAds[i] });
                    break;
                }
            }
        }
    } catch (ex) {
        res.status(400).send(`some thing went wrong ${ex}`);
    }
}

// this method for rander to page all ads of on type from list more than 20
function getAadsMoreThan20(req, res) {

    try {
        const catogary = req.query.cat;
        if (catogary == 'real') {
            res.status(200).render('pages/all_ads', { title: "All RealEstate", list: listAllRealEstate });
        } else if (catogary == 'car') {
            res.status(200).render('pages/all_ads', { title: "All Vehicles", list: listAllViecahle });
        } else {
            res.status(200).render('pages/all_ads', { title: "All Hotels", list: listAllHotel });
        }

    } catch (ex) {
        res.status(400).send(`some thing went wrong ${ex}`);
    }
}
// this method for display all details one ad from moreDetaols btn in dailoge
function getDetailsAd(req, res) {
    try {
        const adNumber = req.query.id;
        if (adNumber != null) {
            for (var i = 0; i < listGenerleAllAds.length; i++) {
                if (listGenerleAllAds[i]['adsNumber'] == adNumber) {
                    res.status(200).render('pages/details_ad', { title: "Details ad", data: listGenerleAllAds[i] });
                    break;
                }
            }
        }
        else {
            return;
        }
    } catch (ex) {
        res.status(400).send(`some thing went wrong ${ex}`);
    }

}


export { getAllAds, getQueryOneAd, getAadsMoreThan20, getDetailsAd }
