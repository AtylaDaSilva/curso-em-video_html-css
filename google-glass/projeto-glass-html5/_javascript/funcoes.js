const img = document.querySelector("#img_header_glass");
const nav = document.getElementsByClassName("main_menu_li");

addListeners();

function addListeners() {
    for(var i = 0; i < nav.length; i++) {
        nav[i].addEventListener("mouseover", changeImg);
        nav[i].addEventListener("mouseout", revertImg);
    }
}

function changeImg() {
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
    img.src = "_imagens/glass-oculos-preto-peq.png";
}