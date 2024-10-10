const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph");

let clickCounter = 0;

function clickFunction() {

    console.log("the button has been clicked");
    clickCounter = clickCounter + 3;

    myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

myButton.onclick = clickFunction;
