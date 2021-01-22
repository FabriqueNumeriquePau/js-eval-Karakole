class Menu {
    constructor(nom, lien) {
        this.nom = nom;
        this.lien = lien;
    }
    createMenu() {
        const bouton = document.createElement("a");
        bouton.textContent = this.nom;
        bouton.href = this.lien;
        return bouton;
    }
    createSousMenu() {
        const maDiv = document.createElement("div");
        const bouton = document.createElement("a");
        bouton.textContent = this.nom;
        bouton.href = this.lien;
        maDiv.appendChild(bouton);
        return maDiv;
    }
}
export default Menu;