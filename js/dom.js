/* const x = document.forms['frm1'];
//console.dir(x[0].value);
const len = x.length;

let text = " ";
for(let i = 0; i < len; i++ ){
    text += "<p>" + x[i].value + "</p>"; 
    
    console.log(x[i].value);
}

document.getElementById('formValues').innerHTML = text; */


//animation
function changeMe() {
    const animateFrame = document.getElementById("animate");
    console.log(animateFrame);
    let mypos = 0;
    const startChange = setInterval(change, 20);
    function change() {
        mypos++;
        if (mypos < 380) {
            animateFrame.style.top = mypos + "px";
            animateFrame.style.left = mypos + "px";
        }
        else {
            clearInterval(startChange);
        }
    }
}

function changeInnerText (which){
    console.log(which);
    which.innerHTML = 'Hi'
} 
console.log("trieng to typing practice");


const btn = document.getElementById("btn1");
btn.addEventListener('click', btnClick);
const btn2 = document.getElementById("btn2");
btn2.addEventListener('mouseover', btnClick);

function btnClick(){
    console.log("Hi");
}