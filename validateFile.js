function validateInput(event){
    event.preventDefault();
    let firstName= document.getElementById("fname");
    console.log(fname);
    let lastName= document.getElementById("lname");
    console.log(lname);
    let zip= document.getElementById("zip");
    console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstLast);

    if(firstLast.length > 20){
    alert("Not Enough characters");
    return;
    }
    console.log("Valid First ans Last Name");

    
    if (zip.length != 5 || !Number.isInteger(parseInt(zip)) ){
        alert("Invalid zip  must be 5 didgits long");
        return;
    }
    
    console.log("Zip Valid");
}

window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if (form){
        form.addEventListener("submit", validateInput);
    }
})