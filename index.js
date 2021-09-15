const btn = document.getElementById("btn");
const btnI = document.getElementById("btnI");
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("conteiner-menu");

function hideMenu() {
    if (menu.className ==  "conteiner-menu") {
        menu.className = "menu_hide";
        btnMenu.id = "btn-menuT";
        btnI.className = "img_menuT";
    } else if(menu.className == "menu_hide"){
        menu.className = "conteiner-menu";
        btnMenu.id = "btn-menu";
        btnI.className = "img_menu";
    }
}

btn.addEventListener("click", hideMenu);
