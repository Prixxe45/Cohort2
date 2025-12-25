let main = document.querySelector("main");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let div = document.createElement("div");
    let x = Math.floor(Math.random() * 100) ;
    let y = Math.floor(Math.random() * 100) ;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    div.style.margin = "10px";
    main.appendChild(div);
})