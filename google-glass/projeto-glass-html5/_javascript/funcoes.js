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

function showArticle_tela() {
    hideArticles();
    const article = document.querySelector("#article_tela");
    article.className = "show_article";
}

function showArticle_camera() {
    hideArticles();
    const article = document.querySelector("#article_camera");
    article.className = "show_article";
}

function showArticle_touch() {
    hideArticles();
    const article = document.querySelector("#article_touch");
    article.className = "show_article";
}

function showArticle_battery() {
    hideArticles();
    const article = document.querySelector("#article_battery");
    article.className = "show_article";
}

function hideArticles() {
    const articles = document.getElementsByClassName("show_article");
    if (articles.length > 0) {
        for (var i = 0; i < articles.length; i++) {
            articles[i].className = "hide_article";
        }
    }
}

//Header nav image references
const img = document.querySelector("#img_header_glass");
const defaultSrc = img.src; //Default page image path

//Header nav reference
const nav = document.getElementsByClassName("main_menu_li");

//Map area references
const area_screen = document.querySelector("#area_screen");
const area_camera = document.querySelector("#area_camera");
const area_touch = document.querySelector("#area_touch");
const area_battery = document.querySelector("#area_battery");

//Map Listeners
area_screen.addEventListener("click", showArticle_tela);
area_camera.addEventListener("click", showArticle_camera);
area_touch.addEventListener("click", showArticle_touch);
area_battery.addEventListener("click", showArticle_battery);

//Adds event listeners on nav menu <li> elements
addListeners();