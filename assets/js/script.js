// methode 1 : 
// Using qrcode.js library by adding the cdn 
var button    = document.getElementById("generate-button");
var inputText = document.getElementById("text");
var showQr    = document.getElementById("qrcode");

button.addEventListener("click", function() {
    var qrcode = new QRCode(showQr, {
        text: inputText.value,
        width: 400,
        height: 400,
        colorDark : "#4949FF",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});

// Methode 2 :
// using googlechartApi 
// cht =qr      chs=<width>x<height>        chl=data

// button.addEventListener("click",()=>{
//     let src = `https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${inputText.value}`;
//     showQr.innerHTML += `<img src="${src}">`;  
// })