import { urlRoutingServer } from "./app-info.js";
// this class for dailoge methods 
const linkOfIdOneAd = $('.data-dailoge');
const containerDailoge = $('.dailoge');
let isDailogeOpened = false;


// this method for got id ads after that got from data base 
const gotAdID = function () {
    linkOfIdOneAd.on('click', function () {
        const id = $(this).data("item");
        if (id != null) {
            $.get(`${urlRoutingServer.oneAdquery}${id}`, function (data, status) {
                if (status == 'success') {
                    const addata = {
                        adress: data.data.adress.country +
                            ' - ' + data.data.adress.city + ' - '
                            + data.data.adress.area,
                        adsNumber: data.data.adsNumber,
                        details: data.data.details,
                        images: data.data.images,
                        owner: data.data.owner[1],
                        title: data.data.title
                    }
                    appendDailoge(addata);
                }
            });

        } else {
            return;
        }
    });
}
// this method for append a dailoge 
const appendDailoge = (data) => {
    if (!isDailogeOpened) {
        isDailogeOpened = true;
        const dailogeDiv = $("<div class = 'showDailoge'></div>");
        const closeIcon = $('<i class="fa-solid fa-xmark"></i>');
        const adsNumberInfo = $("<h4 class='ad-number'></h4>").text('No : ' + data.adsNumber);
        const imgInfo = $("<img class = 'img-info'>").attr("src", data.images[0]);
        const adressInfo = $("<p class = 'adress-info'></p>").text('Adress : ' + data.adress);
        const titleInfo = $("<p class = 'details-info'></p>").text(data.title[0] + ' : ' + data.details[0]);
        const priceInfo = $("<p class = 'details-price'></p>").text(data.title[2] + ' : ' + data.details[2] + data.details[3]);
        dailogeDiv.append(closeIcon);
        dailogeDiv.append(adsNumberInfo);
        dailogeDiv.append(imgInfo);
        dailogeDiv.append(titleInfo);
        dailogeDiv.append(adressInfo);
        dailogeDiv.append(priceInfo);
        containerDailoge.append(dailogeDiv);
    }
}

// this method for close dailoge 
const closeDailogeOneAd = () => {
    containerDailoge.on('click', function () {
        isDailogeOpened = false;
        containerDailoge.empty()
    });
}

export { closeDailogeOneAd, gotAdID }