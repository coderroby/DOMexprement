const x = document.forms['frm1'];
console.dir(x);
const len = x.length;

let text = " ";
for(let i = 0; i < len; i++ ){
    text += "<p>" + x[i].value + "</p>"; 
    
    console.log(x[i].value);
}

document.getElementById('formValues').innerHTML = text;