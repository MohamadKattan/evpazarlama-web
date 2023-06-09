import { englishLan, aribcLan, turkishLan, getLoaclLan } from './lan110/lan110.js';
import { activeColor, slideDownOrup, displayNone } from './controler_methods/navbar-methods.js';
import { overCarousel } from "./controler_methods/carousel-metgods.js";
import { closeDailogeOneAd, gotAdID } from "./controler_methods/dailoge-methods.js";
import { myLocation} from "./controler_methods/mixin-methods.js";



"use strict";
$(document).ready(function () {

    // ===============get Location===============
    myLocation();
    // ===============translate methods ==========
    getLoaclLan();
    englishLan();
    aribcLan();
    turkishLan();
    //============ nav bar methods================
    activeColor();
    slideDownOrup();
    displayNone();

    //=============carousel methods================

    overCarousel();
    //=============dailoge mehtods=================
    closeDailogeOneAd();
    gotAdID();
});

