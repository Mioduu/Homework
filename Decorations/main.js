import { elements } from "./constants.js"
import { showMenu, getRandomColor } from "./menuHandler.js"

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

    const decorationOptions = [
        { line: "none", style: "", thickness: "", color: "" },
        { line: "underline", style: "solid", thickness: "2px", color: "red" },
        { line: "overline", style: "dashed", thickness: "3px", color: "blue" },
        { line: "line-through", style: "dotted", thickness: "4px", color: "green" },
    ]

    elements.decorationButtons.forEach((button, index) => {
        button.textContent = decorationOptions[index].line || "None"
        button.addEventListener("click", () => {
            elements.exampleDecorationText.style.textDecorationLine = decorationOptions[index].line
            elements.exampleDecorationText.style.textDecorationStyle = decorationOptions[index].style
            elements.exampleDecorationText.style.textDecorationThickness = decorationOptions[index].thickness
            elements.exampleDecorationText.style.textDecorationColor = decorationOptions[index].color
        })
    })

    const transformDiv = document.createElement("div")
    transformDiv.style.marginTop = "20px"
    transformDiv.style.display = "flex"
    transformDiv.style.gap = "10px"
    const transforms = ["uppercase", "lowercase", "capitalize"]
    transforms.forEach(transform => {
        const btn = document.createElement("button")
        btn.textContent = transform
        btn.style.minWidth = "100px"
        btn.style.flexGrow = "1"
        btn.style.textAlign = "center"
        btn.addEventListener("click", () => {
            elements.exampleDecorationText.style.textTransform = transform
        })
        transformDiv.appendChild(btn)
    })
    document.querySelector(".decorationsDiv").appendChild(transformDiv)


   const spacingDiv = document.createElement("div")
    spacingDiv.style.marginTop = "20px"
    spacingDiv.style.display = "flex"
    spacingDiv.style.flexDirection = "row"
    spacingDiv.style.flexWrap = "wrap"
    spacingDiv.style.justifyContent = "center"
    spacingDiv.style.gap = "2px"

    const createSpacingBtn = (text, styleObj) => {
        const btn = document.createElement("button")
        btn.textContent = text
        btn.style.minWidth = "100px"
        btn.style.flexGrow = "1"
        btn.style.textAlign = "center"
        btn.addEventListener("click", () => {
            Object.assign(exampleDecorationText.style, styleObj)
        })
        spacingDiv.appendChild(btn)
    }

    createSpacingBtn("Wcięcie", { textIndent: "30px" })
    createSpacingBtn("Letter Spacing", { letterSpacing: "5px" })
    createSpacingBtn("Word Spacing", { wordSpacing: "10px" })
    createSpacingBtn("Line Height", { lineHeight: "2" })
    createSpacingBtn("White-space: nowrap", { whiteSpace: "nowrap" })

    document.querySelector(".decorationsDiv").appendChild(spacingDiv)

    const shadowBtn = document.createElement("button")
    shadowBtn.textContent = "Text Shadow"
    shadowBtn.addEventListener("click", () => {
        exampleDecorationText.style.textShadow = "2px 2px 5px gray"
    })
    document.querySelector(".decorationsDiv").appendChild(shadowBtn)
})
