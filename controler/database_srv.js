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
                realList: listAllRealEstate,
                listAllCar: listAllViecahle,
                listAllHotel: listAllHotel
            });
        });

    } catch (ex) {
        res.status(404).send('Some thing went wrong try again !!' + ex);
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
        res.status(404).send('Some thing went wrong try again !!' + ex);
    }
}


export { getAllAds, getQueryOneAd }
