// Code to turn every image on the page to doge
// Wow, so code, much write, very cool

// GitHub.com/AppIns/Doge-ify

function random(n){
  var x = Math.random();
  x = Math.round(x * n);
  return x;
}

// Images, you could change this to be a totally different program even
var imgsrc = ["https://c2.staticflickr.com/4/3689/11025069063_4132db62d2_b.jpg",
"https://upload.wikimedia.org/wikipedia/commons/b/b5/Doge2.jpg",
"https://c2.staticflickr.com/4/3721/12139928374_d16d9fd29d.jpg",
"https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg",
"https://upload.wikimedia.org/wikipedia/commons/7/78/Akita_inu.jpeg",
"https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg",
"https://upload.wikimedia.org/wikipedia/commons/2/20/Shiba_Inu.jpg",
"http://img01.deviantart.net/e7c4/i/2014/161/8/e/shiba_inu_13_by_xxtgxxstock-d7lvpf4.jpg",
"http://img13.deviantart.net/6f0a/i/2014/141/9/0/shiba_inu_by_xxtgxxstock-d7j6ozc.jpg",
"https://c2.staticflickr.com/6/5219/5504186832_ae53584120.jpg"];

// Amount of images
var amt = document.getElementsByTagName("IMG").length;
if(i == 0){
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
