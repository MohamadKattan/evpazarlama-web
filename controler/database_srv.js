import { allAdsCollection } from '../config/config-app.js';
import { onSnapshot } from 'firebase/firestore';



// this function for got all ads from ads collection in real time and render to home page
function getAllAds(req, res) {
    const listAllAds = [];
    const listAllRealEstate = [];
    const listAllViecahle = [];
    const listAllHotel = [];
    try {
        onSnapshot(allAdsCollection, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().amainCatogry == '0') {
                    listAllRealEstate.push(doc.data());
                    listAllAds.push(doc.data());

                } else if (doc.data().amainCatogry == '1') {
                    listAllViecahle.push(doc.data());
                    listAllAds.push(doc.data());

                } else {
                    listAllHotel.push(doc.data());
                    listAllAds.push(doc.data());

                }

            });
            res.status(200).render('pages/index', { title: "Home", listAds: listAllAds });
            console.log("home" + listAllRealEstate.length);
            console.log("car" + listAllViecahle.length);
            console.log("hotel" + listAllHotel.length);
        });

    } catch (ex) {
        // res.status(404).render('pages/error', { title: "Error" });
        res.status(404).send('Some thing went wrong try again !!' + ex);
    }
}

export { getAllAds }