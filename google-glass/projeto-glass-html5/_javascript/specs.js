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