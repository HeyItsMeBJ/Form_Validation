var instructions = document.getElementsByClassName('instructions');

instructions[0].innerHTML = 'Ex: abcdef xyz',
    instructions[1].innerHTML = 'Ex: abc@gamil.com',
    instructions[2].innerHTML = 'No. should be of 10 digits ';
instructions[3].innerHTML = document.getElementById('passInstr').innerHTML;
instructions[4].innerHTML = 'Password should same as upper field';

var line = document.querySelectorAll('.forjs');
var label = document.querySelectorAll('label');
var input = document.querySelectorAll('input');

// For Name
input[0].addEventListener('keyup', (e) => {

    var value = input[0].value;
    // console.log(value);

    line[0].classList.remove('line');
    line[0].classList.remove('validLine');
    line[0].classList.add('invalidLine');
    label[0].classList.remove('label');
    label[0].classList.remove('validLabel');
    label[0].classList.add('invalidLabel');

    if (value.length > 5 ) {
        line[0].classList.remove('invalidLine');
        line[0].classList.add('validLine');
        label[0].classList.remove('invalidLabel');
        label[0].classList.add('validLabel');
    }
    else if (value.length == 0) {
        line[0].classList.remove('invalidLine');
        label[0].classList.remove('invalidLabel');
        line[0].classList.add('line');
        label[0].classList.add('label');

    }
})

// For Email
input[1].addEventListener('keyup', (e) => {

    var value = input[1].value;
    // console.log(value);

    line[1].classList.remove('line');
    line[1].classList.remove('validLine');
    line[1].classList.add('invalidLine');
    label[1].classList.remove('label');
    label[1].classList.remove('validLabel');
    label[1].classList.add('invalidLabel');

    if (value.includes('@') && value[0]!='@') {
        line[1].classList.remove('invalidLine');
        line[1].classList.add('validLine');
        label[1].classList.remove('invalidLabel');
        label[1].classList.add('validLabel');
    }
    else if (value.length == 0) {
        line[1].classList.remove('invalidLine');
        label[1].classList.remove('invalidLabel');
        line[1].classList.add('line');
        label[1].classList.add('label');

    }
})

// For Number
input[2].addEventListener('keyup', (e) => {

    var value = input[2].value;
    // console.log(value);

    line[2].classList.remove('line');
    line[2].classList.remove('validLine');
    line[2].classList.add('invalidLine');
    label[2].classList.remove('label');
    label[2].classList.remove('validLabel');
    label[2].classList.add('invalidLabel');


    if (  value.length==10 && value.indexOf('.') == -1) {
        line[2].classList.remove('invalidLine');
        line[2].classList.add('validLine');
        label[2].classList.remove('invalidLabel');
        label[2].classList.add('validLabel');
    }
    else if (value.length == 0) {
        line[2].classList.remove('invalidLine');
        label[2].classList.remove('invalidLabel');
        line[2].classList.add('line');
        label[2].classList.add('label');

    }
})

// For Password

function checkPass(str){
    return /[0-9]/.test(str) && /[a-z]/.test(str) && /[!,@,#,$,%,^,&,*]/.test(str);
}
input[3].addEventListener('keyup', (e) => {

    var value = input[3].value;
    // console.log(value);

    line[3].classList.remove('line');
    line[3].classList.remove('validLine');
    line[3].classList.add('invalidLine');
    label[3].classList.remove('label');
    label[3].classList.remove('validLabel');
    label[3].classList.add('invalidLabel');


    if (checkPass(value) && value.length>7) {
        line[3].classList.remove('invalidLine');
        line[3].classList.add('validLine');
        label[3].classList.remove('invalidLabel');
        label[3].classList.add('validLabel');
    }
    else if (value.length == 0) {
        line[3].classList.remove('invalidLine');
        label[3].classList.remove('invalidLabel');
        line[3].classList.add('line');
        label[3].classList.add('label');

    }
})

// For Confirm Password

input[4].addEventListener('keyup', (e) => {

    var value = input[4].value;
    // console.log(value);

    line[4].classList.remove('line');
    line[4].classList.remove('validLine');
    line[4].classList.add('invalidLine');
    label[4].classList.remove('label');
    label[4].classList.remove('validLabel');
    label[4].classList.add('invalidLabel');

console.log(input[3].value);
console.log(input[4].value);
    if ( line[3].classList.contains('validLine') && input[3].value==input[4].value ) {
        line[4].classList.remove('invalidLine');
        line[4].classList.add('validLine');
        label[4].classList.remove('invalidLabel');
        label[4].classList.add('validLabel');
    }
    else if (value.length == 0) {
        line[4].classList.remove('invalidLine');
        label[4].classList.remove('invalidLabel');
        line[4].classList.add('line');
        label[4].classList.add('label');

    }
})

function formSubmit(){
if(line[0].classList.contains('validLine')&&
line[1].classList.contains('validLine')&&
line[2].classList.contains('validLine')&&
line[3].classList.contains('validLine')&&
line[4].classList.contains('validLine')) return true;

else return false;

}

var form=document.querySelector('form');
form.addEventListener('submit',(e)=>{

if(formSubmit){
    
    form.action="submit.html"
}

})

function sub(){
    if(formSubmit)
    document.querySelector('#submit').style.backgroundColor= "green";
}






