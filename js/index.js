var itemPath = ("images/dice");

function randomElement(){
  var randomNumber = Math.floor(Math.random()*6 + 1);  
  return randomNumber;  
};

document.getElementById('img1').src=itemPath + randomElement()+".png";


document.getElementById('img2').src=itemPath + randomElement()+".png";


if (document.getElementById('img1').src > document.getElementById('img2').src){
  document.querySelector('h1').innerHTML="🚩 Player 1 Wins!"
} else if (document.getElementById('img1').src < document.getElementById('img2').src){
  document.querySelector('h1').innerHTML="Player 2 Wins! 🚩"
} else if (document.getElementById('img1').src = document.getElementById('img2').src) {
  document.querySelector('h1').innerHTML="🚩 Draw! 🚩";}
