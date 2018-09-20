

const bill = document.getElementById("amount");
const tipPer = document.getElementById("percent");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const eachTotal = document.getElementById("eachTotal");
const eachTip = document.getElementById("eachTip");
const people = document.getElementById("people");

const minPer = document.getElementById("minPer");
const plusPer = document.getElementById("plusPer");
const minPeo = document.getElementById("minPeo");
const plusPeo = document.getElementById("plusPeo");
let cost = 0;
let tipVal = 0;

function update(){
    tipVal = bill.value*tipPer.value/100
    tip.innerHTML = tipVal;
    cost = Number(tip.innerHTML)+Number(bill.value);
    total.innerHTML = "$"+cost;
    eachTotal.innerHTML = cost/Number(people.value);
    eachTip.innerHTML = tipVal/Number(people.value);
}


minPer.onclick = (e) => {
    tipPer.value-=5;
    update();
}

plusPer.onclick = (e) => {
    tipPer.value = Number(tipPer.value)+5;
    update();
}

minPeo.onclick = (e) => {
    people.value-=1;
    update();
}

plusPeo.onclick = (e) => {
    people.value = Number(people.value)+1;
    update();
}