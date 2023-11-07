function sayLol(timestamp) {
    document.write("<script type='button' value='Lol'>");

}

function addButton(){

    console.log("addButton");
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value", "New Button");

    //var buttonText = document.createTextNode("New button");
    //inputElement.appendChild(buttonText);

    var parent= document.getElementById("memeParagraph");
    parent.appendChild(inputElement);

    var newParagrapgh = document.createElement("p");

    var prargrapghText = document.createTextNode("New Prargrapgh");
    parent.appendChild(prargrapghText);

    parent.appendChild(newParagrapgh);
}

function addButtons(){
    console.log("Adding Buttons");

    let inputElementStart = document.createElement("input");
    inputElementStart.setAttribute("type", "button");
    inputElementStart.setAttribute("value", "Start");
    inputElementStart.setAttribute("id", "startButton");
    inputElementStart.setAttribute("onclick", "startButton()");

    let inputElementStop = document.createElement("input");
    inputElementStop.setAttribute("type", "button");
    inputElementStop.setAttribute("value", "Stop");
    inputElementStop.setAttribute("id","stopButton");
    inputElementStop.setAttribute("onclick", "stopButton()");
    inputElementStop.setAttribute("disabled","true");

    let parent = document.getElementById("memeParagraph");
    parent.appendChild(inputElementStart);
    parent.appendChild(inputElementStop);
}

function startButton(){
    console.log("pressed Start");
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.setAttribute("disabled","true");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.removeAttribute("disabled");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "3s";
}

function stopButton(){
    let inputElementStart = document.getElementById("startButton");
    inputElementStart.removeAttribute("disabled");

    let inputElementStop = document.getElementById("stopButton");
    inputElementStop.setAttribute("disabled","true");

    let memeImage = document.getElementById("memeImage");
    memeImage.style.animationDuration = "0s";
}

