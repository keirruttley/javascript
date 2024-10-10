const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("character-image")

let clickCounter = 0;

function clickFunction() {
    console.log("the button has been clicked");
    clickCounter = clickCounter + 3;

    characterImage.src = "assets/arbiter.webp"

    myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

myButton.onclick = clickFunction;

