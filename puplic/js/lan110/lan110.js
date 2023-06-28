// this class for locale languges and text aling based on languge direction
const enBtn = $("a.enBtn");
const arBtn = $("a.arBtn");
const trBtn = $("a.trBtn");
const textAlignLan = $(".textAlignLan");
const containerlanguges = $("div.lan-contant-rv");


// class for every elment for translate text
const navReale = $(".realLan");
const navCars = $(".carLan");
const navHotel = $(".hotelLan");
const navSingUp = $(".singUpLan");
const navSingIn = $(".singInLan");
const navLnguges = $(".LangugesLan");
const mycarouselPargarfText = $(".mycarousel-p");
const sorryText = $(".SorryLan");
const noDataText = $(".noDataLan");
const moreAdText = $(".moreAd a");
const homeLanText = $(".HomeLan")

const translateToEn = () => {
    textAlignLan.css("textAlign", "left");
    containerlanguges.css("left", "25px");
    navReale.text("Real estates");
    navCars.text("Vehicles");
    navHotel.text("Hotels");
    navSingUp.text("Sing Up");
    navSingIn.text("Sign In");
    navLnguges.text("Language");
    mycarouselPargarfText.text(" Buying - Selling - Renting ");
    sorryText.text("Sorry!");
    noDataText.text(" No Data yet...");
    moreAdText.text("More Ads");
    homeLanText.text("HomePage");
    localStorage.setItem("lan", "en");

}

const translateToAr = () => {
    textAlignLan.css("textAlign", "right");
    containerlanguges.css("left", "60%");
    navReale.text("عقارات");
    navCars.text("مركبات");
    navHotel.text("فنادق");
    navSingUp.text("التسجيل");
    navSingIn.text("تسجيل الدخول");
    navLnguges.text("لغة");
    mycarouselPargarfText.text(" شراء - بيع - تأجير ");
    sorryText.text("معذرة!");
    noDataText.text("لا توجد بيانات حتى الآن ...");
    moreAdText.text("إعلانات أكثر");
    homeLanText.text("الصفحة الرئيسية");
    localStorage.setItem("lan", "ar");

}

const translatToTr = () => {
    textAlignLan.css("textAlign", "left");
    containerlanguges.css("left", "25px");
    navReale.text("Emlak");
    navCars.text("Araçlar");
    navHotel.text("Oteller");
    navSingUp.text("üye Ol");
    navSingIn.text("Giriş Yap");
    navLnguges.text("Dil");
    mycarouselPargarfText.text(" Alım - satım - kiralama ");
    sorryText.text("Üzgünüm!");
    noDataText.text("Henüz Veri Yok...");
    moreAdText.text("Daha Fazla");
    homeLanText.text("Anasayfa");
    localStorage.setItem("lan", "tr");
}


// this method for set en lan
const englishLan = () => {
    enBtn.on("click", () => translateToEn());
}

// this method for set ar lan
const aribcLan = () => {
    arBtn.on("click", () => translateToAr());
}

// this method for set tr lan
const turkishLan = () => {
    trBtn.on("click", () => translatToTr());
}


// this method for got lan from locale storage 
const getLoaclLan = () => {
    const lan = localStorage.getItem("lan");
    if (lan != null) {
        if (lan == 'ar') {

            translateToAr();
        } else if (lan == 'tr') {

            translatToTr();
        } else {

            translateToEn();
        }
    } else { translateToEn(); }

}

export { englishLan, aribcLan, turkishLan, getLoaclLan }
