let btn = document.querySelector("input");
let body = document.querySelector("body");
let img = document.querySelector(".img");
let texto = document.querySelector(".texto");
btn.addEventListener("change", ()=>{
    if(btn.checked){
        body.setAttribute("data-contexto", "escuro");
        img.setAttribute("src", "assets/dormindo.png");
        texto.textContent="Hora de acordar! Clique no botão.";
        img.classList.add("dark")
    }else{
        body.setAttribute("data-contexto", "claro");
        img.setAttribute("src", "assets/acordada.png");
        texto.innerHTML = '<p class="texto">Ela está com soninho. <br> clica aqui pra ela tirar um cochilo</p>'
        img.classList.remove("dark")
    }
    
})