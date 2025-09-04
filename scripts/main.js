var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png")
        myImage.setAttribute("src", "images/7d8619463bd42be0338e40338b5090cb.jpg");
    else
        myImage.setAttribute("src", "images/firefox-icon.png");
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "mozilla is cool" + myName;
};

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "mozilla is cool (stored) " + storedName;
};

myButton.onclick = function(){
    setUserName();
};