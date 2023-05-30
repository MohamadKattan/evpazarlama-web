import { englishLan, aribcLan, turkishLan } from './lan110/lan110.js';
import { activeColor, slideDownOrup, displayNone } from './controler_methods/navbar-methods.js';
import { overCarousel } from "./controler_methods/carousel-metgods.js";
"use strict";
$(document).ready(function () {
    // ===============translate methods ==========
    englishLan();
    aribcLan();
    turkishLan();


    //============ nav bar methods================
    activeColor();
    slideDownOrup();
    displayNone();

    //=============carousel methods================
    overCarousel();
});