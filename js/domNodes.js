const pera  = document.createElement("p");
const node = document.createTextNode("Coming From JS");
pera.appendChild(node); //<p> Coming From JS </p>
const newNode = document.getElementById("div1");
console.log(pera);
newNode.appendChild(pera);
const firstNode = document.getElementById('p1');
//const firstNode = document.getElementById('div1').firstChild;
//const firstNode = document.getElementById('div1').childNodes[1];

console.log(firstNode);
newNode.insertBefore(pera, firstNode);
const p2 = document.getElementById("p2");
//p2.remove();
//p2.removeChild();  //sob browser support kore
newNode.replaceChild(pera, p2);