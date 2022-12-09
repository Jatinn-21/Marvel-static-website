let ad = document.getElementById("ads");
//generate a random number between 1 and 11
let adnum = Math.floor(Math.random() * 11 + 1);
console.log(`You Got ${adnum}`);
ad.setAttribute("src", `${adnum}.jpg`);


