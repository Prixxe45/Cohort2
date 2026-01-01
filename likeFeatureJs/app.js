let img = document.querySelector("img");
let like = document.getElementById("like");

img.addEventListener("click", function (val){
like.style.opacity = "0.8";
like.style.scale = "1";
setTimeout(function (){
    like.style.opacity = "0";
    like.style.scale = "0.5";
},2000);
});