console.log("Go Chuck !");

import Menu from "./Menu.js"

let imageChuck = document.querySelector("div");
imageChuck.addEventListener("mouseenter", () => {
    imageChuck.style.borderRadius = "0";
});
imageChuck.addEventListener("mouseleave",() => {
    imageChuck.style.borderRadius = "50%";
});

let fleches = document.getElementsByClassName("picto");

for (let i = 0; i < fleches.length; i++) {
    fleches.item(i).addEventListener("click", () => {
        if (fleches.item(i).parentNode.nextElementSibling.style.visibility === "hidden") {
            fleches.item(i).parentNode.nextElementSibling.style.visibility = "visible";
        } else {
            fleches.item(i).parentNode.nextElementSibling.style.visibility = "hidden";
        }
    });
};

let nav = document.querySelector("nav");
let foot = document.querySelector("footer");

async function getDojo() {
    const response = await fetch("../data/menu.json");
    let menus = await response.json();
    menus.principal.forEach(element => {
        let parentMenu = new Menu(element.nom, element.lien);
        nav.appendChild(parentMenu.createMenu());
    });
    menus.pied.forEach(elem => {
        let footerMenu = new Menu(elem.nom, elem.lien);
        foot.appendChild(footerMenu.createMenu());
    });
    let truc = document.querySelectorAll("a");
    menus.principal[1].sousmenus.forEach(e => {
        let sousMenu = new Menu (e.nom, e.lien);
        truc[1].appendChild(sousMenu.createSousMenu());
    });
}
getDojo();