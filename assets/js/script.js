// methode 1 : 
// Using qrcode.js library by adding the cdn 
var button = document.getElementById("generate-button");
button.addEventListener("click", function() {
    var inputText = document.getElementById("text").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: inputText,
        width: 400,
        height: 400,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});

// Methode 2 :
// using googlechartApi 
// cht =qr      chs=<width>x<height>        chl=data

