import { urlRoutingServer } from './app-info.js';
import { currentLocation } from '../model/current_location.js';

const valInputContry = $('#contry');
const valInputCity = $('#city');

function myLocation() {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((p) => {
                valInputContry.val(p.coords.latitude);
                valInputCity.val(p.coords.longitude);
            });
        } else {
            console.log('Location Not availbel');
        }
    } catch (ex) {
        console.log(ex);
    }

}

export { myLocation }