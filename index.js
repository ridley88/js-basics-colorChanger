const body = document.getElementsByTagName("body")[0]
// body.style.backgroundColor = "purple"

function setColor(name) {
    body.style.backgroundColor = name;
} 

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`;
    console.log(color)
    
    body.style.backgroundColor = color;
}

function setSpecificColor() {
    console.log("Setting to specific color")
    body.style.backgroundColor = "rgb(37, 205, 97)"; // the rgb MUST be in quotes, otherwise interpreted as a variable
}

randomColor()