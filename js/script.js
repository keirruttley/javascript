const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");

let clickCounter = 0;

function clickFunction() {

    clickCounter = clickCounter + 1;

    myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

myButton.onclick = clickFunction;
