//Träffa ett element
let element = document.querySelector("h1");

//Ändra värden

element.innerText = "Hej från Javascript!";

// element.style.background = "red";
element.style.color = "white";

element.classList.remove("blue");
element.classList.add("red");

// -----------------------------------------

//Skapa element
let listItem = document.createElement("li")

let anotherListItem = document.createElement("li");

//Ge värden
listItem.innerText = "List Item #2"
anotherListItem.innerText ="List item #3";
// Placera ut i DOM:en

let ul = document.querySelector("#list");
ul.append(listItem, anotherListItem);


//querySelectorAll

let allListItems = document.querySelectorAll("li");

allListItems.forEach((li) => {
    li.style.background = "peachpuff";
})


//Exempel med logik

let names = ["Harry","Elin","Romaine","Greg"];

names.forEach(name => {
    let li = document.createElement("li");
    li.innerText = name;
    ul.append(li);
})

// addEventListener - Logik med knapptryck
//Skapa knapp
let button = document.createElement("button");
button.textContent = "Ändra bakgrundsfärg";
//Lägg på logik vid knapptryck

button.addEventListener("click", () => {
    document.body.style.background = "darkgreen"
})

document.body.append(button);


