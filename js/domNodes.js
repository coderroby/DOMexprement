const pera  = document.createElement("p");
const node = document.createTextNode("Coming From JS");
pera.appendChild(node); //<p> Coming From JS </p>
const newNode = document.getElementById("div1");
newNode.appendChild(pera);