/********************************

        COOKIE clicker

********************************/

//declare default variables
let cookieCount = 0;


//delcare DOM variables
let cookieCounter = document.getElementById("cookie-counter");
let cookieClicker = document.getElementById("cookie-clicker");
let buyClickPower = document.getElementById("buy-click-power");

cookieCounter.innerHTML = cookieCount;

//everytime a user clicks the button, their cookies are increased by the value of clickpower
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount+clickPower;
    refreshCookieCount();
})



let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
    document.getElementById("title").innerHTML = cookieCount+" Cookies!"
}


/********************************

        Click Power

********************************/


//dom vars
let clickPowerPrice = document.getElementById("click-power-price");
let clickPowerLevel = document.getElementById("click-power-level");
let clickPowerMultiple = document.getElementById("click-power-multiple");

//default vars
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;



buyClickPower.addEventListener("click", function(){
    if(cookieCount >= clickPowerPriceAmount){
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount();

        //Upgrade power level
        clickPowerLevelNumber += 1;

        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount*1.33);

        //update Click Power
        clickPower += 1 + Math.floor(clickPowerLevelNumber * 1.05);

        //Refresh shop item
        refreshPowerClick();
    }
})


let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}





/********************************

          Grandmas

********************************/

//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let autoGrandma = false;

//declare DOM vars
let buyGrandma = document.getElementById("buy-grandma");
let grandmaPrice = document.getElementById("grandma-price");
let grandmaLevel = document.getElementById("grandma-level");
let grandmaMultiple = document.getElementById("grandma-multiple");

//Buy a grandma
buyGrandma.addEventListener("click", function() {
    //check cookies
    if(cookieCount >= grandmaPriceAmount) {
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();


        //upgrade power level
        grandmaLevelNumber += 1;

        //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount*1.33);

        //update grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

        //turn on autoGrandma!
        autoGrandma = true;
        autoGrandmaStart();

        //refresh shop item
        refreshGrandma();
    }
})

let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function(){
        cookieCount += grandmaPower-10;
        refreshCookieCount();
    }, 1000)
    }

let refreshGrandma = function(){
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower-10;
}


/********************************

          Facilities

********************************/

//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if(cookieCount >= facilityPriceAmount){
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()

        //upgrade power level
        facilityLevelNumber +=1;

        //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

        //update facility power
        facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);

        //turn autoFacility on!
        facilityAuto = true;
        autoFacilityStart();

        //refresh shop item
        refreshFacility();
    }


})

//game loop
let autoFacilityStart = function(){
    let facilityInt = window.setInterval(function(){
        cookieCount += facilityPower-600;
        refreshCookieCount();
    },1000);
}

//refresh shop
let refreshFacility = function(){
    facilityLevel.innerHTML = facilityLevelNumber;
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}




/********************************

          Teleporters

********************************/

//set default values
let teleAuto = false;
let telePower = 10000;
let telePriceAmount = 5000000;
let teleLevelNumber = 0;

//declare DOM variables
let buytele = document.getElementById('buy-tele');
let telePrice = document.getElementById('tele-price');
let teleLevel = document.getElementById('tele-level');
let teleMultiple = document.getElementById('tele-multiple');

//buy a tele
buytele.addEventListener("click", function() {
    //set autoLoop to false
    teleAuto = false;

    //make sure we have enough cookies
    if(cookieCount >= telePriceAmount){
        cookieCount -= telePriceAmount;
        refreshCookieCount()

        //upgrade power level
        teleLevelNumber +=1;

        //update price
        telePriceAmount = Math.floor(telePriceAmount * 1.33);

        //update tele power
        telePower += 1000 + Math.floor(teleLevelNumber * 1.33);

        //turn autotele on!
        teleAuto = true;
        autoteleStart();

        //refresh shop item
        refreshtele();
    }


})

//game loop
let autoteleStart = function(){
    let teleInt = window.setInterval(function(){
        cookieCount += telePower-1000;
        refreshCookieCount();
    },1000);
}

//refresh shop
let refreshtele = function(){
    teleLevel.innerHTML = teleLevelNumber;
    telePrice.innerHTML = telePriceAmount;
    teleMultiple.innerHTML = telePower - 1000;
}