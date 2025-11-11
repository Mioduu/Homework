import { elements } from "./constants.js"
import { showMenu, getRandomColor} from "./menuHandler.js"

document.addEventListener("DOMContentLoaded", () => {

    elements.menuShowBtn.addEventListener("click", showMenu)

    elements.colorChangeBtn.addEventListener("click", () => {
        elements.coloredText.style.color = getRandomColor()
    })  

    elements.verticalAlignDiv.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element.id) // Debug
            elements.exampleText.style.verticalAlign = element.id
        })
    })

    elements.textAlignDiv.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element.id) // Debug
            elements.exampleTextAlign.style.textAlign = element.id
        })
    })
})
