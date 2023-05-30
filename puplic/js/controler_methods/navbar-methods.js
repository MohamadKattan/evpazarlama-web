let isToogleNavSliding = false;

const navLinksInPage = $("a.nav-link");
const dropDownNavBtnResponsev = $(".icon-bars");
const dropDownContantMenuRespoev = $(".nav-dropDonw-responsev-content");
const linkDropDownContanResponsev = $(".nav-dD-rv-ct-link");


// this function when click on nav link in page for add active class 
const activeColor = () => {
    navLinksInPage.on("click", function () {
        navLinksInPage.removeClass("active");
        $(this).addClass("active");

    });

}

// this function for dropDown responsev slideDownOrup
const slideDownOrup = () => {
    dropDownNavBtnResponsev.on("click", function () {
        if (!isToogleNavSliding) {
            isToogleNavSliding = true;
        } else {
            isToogleNavSliding = false;
        }
        dropDownContantMenuRespoev.slideToggle("slow", function () {
            if (isToogleNavSliding) {
                $(this).css("display", "block")


            } else {
                $(this).css("display", "none")
            }

        });
    });

}
// this method when click on link it will change nav menue contant responsev to none 
const displayNone = () => {
    linkDropDownContanResponsev.on("click", function () {
        isToogleNavSliding = false;
        dropDownContantMenuRespoev.slideUp("slow", function () {
            dropDownContantMenuRespoev.css("display", "none")
        });

    });

}


export {
    activeColor, slideDownOrup, displayNone
}