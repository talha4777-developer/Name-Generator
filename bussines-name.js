// <-------------Adjective List--------------->
let adjective = {
    first: "Crazy",
    seccond: "Amzing",
    third: "Fire"
}

// <-------------Shop Name List--------------->
let shopname = {
    first: "Engine",
    seccond: "Food",
    third: "Garments"
}

// <-------------Other Word List--------------->
let otherword = {
    first: "Bros",
    seccond: "Limited",
    third: "Hub"
}

// <-------------Initialize Variable--------------->
let adj;
let shop;
let other;


// <-------------Random Ajective--------------->
let randomAdjective = Math.random();

if (randomAdjective < 0.33) {
    adj = adjective.first;
} else if (randomAdjective < 0.66) {
    adj = adjective.seccond;
} else {
    adj = adjective.third;
}


// <-------------Random Shop Name--------------->
let randomshopName = Math.random();

if (randomshopName < 0.33) {
    shop = shopname.first;
} else if (randomshopName < 0.66) {
    shop = shopname.seccond;
} else {
    shop = shopname.third;
}

// <-------------Random Other Word--------------->
let randomOtherWord = Math.random();

if (randomOtherWord < 0.33) {
    other = otherword.first;
} else if (randomOtherWord < 0.66) {
    other = otherword.seccond;
} else {
    other = otherword.third;
}

document.write(`Bussines Name = ${adj} ${shop} ${other}`);

