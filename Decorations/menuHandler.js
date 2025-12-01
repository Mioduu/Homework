import { elements } from "./constants.js";

let menuShowState = 0

export function showMenu() {
    menuShowState = menuShowState === 0 ? 1 : 0
    console.log(menuShowState)
    elements.menuShowBtn.textContent = menuShowState ? "Zwiń menu" : "Menu formatowania"
    elements.hiddenMenu.classList.toggle("hidden", !menuShowState)
    elements.hiddenMenu.classList.toggle("centered", menuShowState)   
}

export function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}