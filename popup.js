window.onload=function() {
    document.getElementById('add').addEventListener("click", opAdd);
    document.getElementById('subtract').addEventListener("click", opSub);
    document.getElementById('multiply').addEventListener("click", opMult);
    document.getElementById('divide').addEventListener("click", opDiv);
    document.getElementById('modulus').addEventListener("click", opMod);
}

function getNum1() {
    return document.getElementById('num1').value;
}

function getNum2() {
    return document.getElementById('num2').value;
}

function opAdd(){
    if(!(getNum1() && getNum2())) {
        return;
    }
    var sum = parseFloat(getNum1()) + parseFloat(getNum2());
    document.getElementById('answer').innerHTML = sum;
}

function opSub(){
    if(!(getNum1() && getNum2())) {
        return;
    }
    var sum = parseFloat(getNum1()) - parseFloat(getNum2());
    document.getElementById('answer').innerHTML = sum;
}

function opMult(){
    if(!(getNum1() && getNum2())) {
        return;
    }
    var sum = parseFloat(getNum1()) * parseFloat(getNum2());
    document.getElementById('answer').innerHTML = sum;
}

function opDiv(){
    if(!(getNum1() && getNum2())) {
        return;
    }
    var sum = parseFloat(getNum1()) / parseFloat(getNum2());
    document.getElementById('answer').innerHTML = sum;
}

function opMod(){
    if(!(getNum1() && getNum2())) {
        return;
    }
    var sum = parseFloat(getNum1()) % parseFloat(getNum2());
    document.getElementById('answer').innerHTML = sum;
}