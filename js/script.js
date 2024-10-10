const myButton = document.getElementById("btn");
const myParagraph = document.getElementById("my-paragraph")

myButton.onclick = clickFunction;

function clickFunction() {
    myParagraph.innerHTML = "my new paragraph";
}
