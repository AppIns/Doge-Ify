// Code to turn every image on the page to doge
// Wow, so code, much write, very cool

// GitHub.com/AppIns/Doge.js

function random(n){
  var x = Math.random();
  x = Math.round(x * n);
  return x;
}


// Images
var imgsrc = ["https://c2.staticflickr.com/4/3689/11025069063_4132db62d2_b.jpg",
"https://upload.wikimedia.org/wikipedia/commons/b/b5/Doge2.jpg",
"https://c2.staticflickr.com/4/3721/12139928374_d16d9fd29d.jpg",
"https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg",
"https://upload.wikimedia.org/wikipedia/commons/7/78/Akita_inu.jpeg",
"https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg"];

// Amount of images
var amt = document.getElementsByTagName("IMG").length;
if(i == -1){
  // No images?
  alert("There are no images on this page");
}else{
  for (var i = 0; i < amt; i++){
    // Get a random number and an image and use an image from imgsrc
    var cIMG = document.getElementsByTagName("IMG")[i];
    var rand = random(imgsrc.length - 1);
    cIMG.src = imgsrc[rand];
  }
}
