let grow = 0; 
let btn = document.querySelector("button");
let progress = document.getElementById("progress");
let card = document.getElementById("card");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  let int = setInterval(() =>{
  grow++;
  h2.innerText = `${grow}%`;
  progress.style.width = `${grow}%`;
  }, 50);

 setTimeout(() => {
  clearInterval(int);
  btn.innerText = "Downlode Completed";
  btn.disabled = true;
h1.innerHTML = "Downlode Completed";
  card.style.boxShadow = "0 0 10px green";
 }, 5000);

});