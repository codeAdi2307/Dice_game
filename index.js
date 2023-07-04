// Player 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var changeimage1 = "/dice"+randomNumber1+".png";
var photo = document.querySelectorAll("img")[0];//now this has became and element.
photo.setAttribute("src",changeimage1);

// Player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var changeimage2 = "/dice"+randomNumber2+".png";
var nxtphoto = document.querySelectorAll("img")[1];
nxtphoto.setAttribute("src",changeimage2);

// change of header
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="PLayer 1 wins!";
}
if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="PLayer 2 wins!";
}
if (randomNumber1==randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!";
}