var song = document.getElementById("play");
const startTm = document.querySelector(".start-time");
const bar1 = document.querySelector(".bar");

song.addEventListener("click", function(){
    var audio = new Audio("Devara-Trailer-BGM-Mix-HD.mp3");
    audio.play();
   this.onclick =  document.querySelector("#image").classList.toggle("image1");
   this.onclick = song.innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play1").addEventListener("click", function(){
    var audio = new Audio("song-2.mp3");
    audio.play();
   this.onclick =  document.querySelector(".image11").classList.add("image1");
   this.onclick = document.getElementById("play1").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play2").addEventListener("click", function(){
    var audio = new Audio("song-3.mp3");
    audio.play();
   this.onclick =  document.querySelector(".image12").classList.add("image1");
   this.onclick = document.getElementById("play2").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play3").addEventListener("click", function(){
    var audio = new Audio("Believer(PagalNew.Com.Se).mp3");
    audio.play();
   this.onclick =  document.querySelector(".image13").classList.add("image1");
   this.onclick = document.getElementById("play3").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play4").addEventListener("click", function(){
    var audio = new Audio("Marvel-Anthem-A-R-Rahman.mp3");
    audio.play();
   this.onclick =  document.querySelector(".image14").classList.add("image1");
   this.onclick = document.getElementById("play4").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play5").addEventListener("click", function(){
    var audio = new Audio("Love Me Like You Do(PagalWorld.com.so).mp3");
    audio.play();
   this.onclick =  document.querySelector(".image15").classList.add("image1");
   this.onclick = document.getElementById("play5").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play6").addEventListener("click", function(){
    var audio = new Audio("Perfect-(Mr-Jat.in).mp3");
    audio.play();
   this.onclick =  document.querySelector(".image16").classList.add("image1");
   this.onclick = document.getElementById("play6").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});
document.getElementById("play7").addEventListener("click", function(){
    var audio = new Audio("Tum-Hi-Ho-Ab-Tum-Hi-Ho(PagalWorld).mp3");
    audio.play();
   this.onclick =  document.querySelector(".image17").classList.add("image1");
   this.onclick = document.getElementById("play7").innerHTML = '<i class="material-icons" style="font-size:24px">&#xe034;</i>';
   bar1.value = 0;
});