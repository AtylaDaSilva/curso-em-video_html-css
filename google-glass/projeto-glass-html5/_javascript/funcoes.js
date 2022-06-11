const img = document.querySelector("#img_header_glass");
const defaultSrc = img.src; //Default page image path
const nav = document.getElementsByClassName("main_menu_li");

console.log(defaultSrc);
addListeners();

function addListeners() {
    for(var i = 0; i < nav.length; i++) {
        nav[i].addEventListener("mouseover", changeImg);
        nav[i].addEventListener("mouseout", revertImg);
    }
}

function changeImg() {
    //References the element that triggered the event
    const id = this.id;

    switch (id) {
        case "home":
            img.src = "_imagens/home.png";
            break;
        case "specs":
            img.src = "_imagens/especificacoes.png";
            break;
        case "fotos":
            img.src = "_imagens/fotos.png";
            break;
        case "media":
            img.src = "_imagens/multimidia.png";
            break;
        case "fale-conosco":
            img.src = "_imagens/contato.png";
            break;
    }
}

function revertImg() {
    //Reverts back to the default page image
    img.src = defaultSrc;
}