const wes = document.querySelector(".wes");

// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);

// There is a distinction between element selection and nod selction.
// Node selection selects all distinct nodes, including text nodes, comments, etc.
// Element selection selects only elements(tags).

// Example of node selection:
// childNodes
// firstChild
// lastChild
// parentNode
// previousSibling
// nextSibling
