const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
function formValidation(){
    const formData = document.forms['myForm'];
    console.dir(formData);
    //console.log(formData[0].value);
    const input1Value = formData.elements[0].value;
    if(isNaN(input1Value) &&  typeof input1Value === 'string' && format.test(input1Value) == false ) console.log(input1Value);
    else alert('Please input String value');

    return true;
}