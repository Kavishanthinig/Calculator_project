var operator="";
var FirstNumber="";
var SecondNumber="";

function append(number){
    if(operator===""){
        FirstNumber+=number;
        document.getElementById('result').value=FirstNumber;
    }
    else{
        SecondNumber+=number;
        document.getElementById('result').value=FirstNumber+""+operator+""+SecondNumber;
    }
}

function setoperator(op){
    operator=op;
    document.getElementById('result').value=FirstNumber+""+operator
}

function showresult(){
    let result=0;
    switch(operator){
        case '+':
            result=parseInt(FirstNumber)+parseInt(SecondNumber);
            break;
        case '-':
            result=parseInt(FirstNumber)-parseInt(SecondNumber);
            break;
        case '*':
            result=parseInt(FirstNumber)*parseInt(SecondNumber);
            break;
        case '/':
            result=parseInt(FirstNumber)/parseInt(SecondNumber);
            break;
    }
    document.getElementById('result').value=result;
}

function reset(){
    FirstNumber="";
    SecondNumber="";
    operator="";
    document.getElementById('result').value="";
}

const table = document.querySelector('table');
const buttons = document.querySelectorAll('button');  
const colors = ['red', 'brown', 'blue', 'pink', 'yellow', 'green', 'violet', 'whitesmoke'];

table.style.backgroundColor = 'greenyellow';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const colorIndex1 = Math.floor(Math.random() * colors.length); 
     
        
        table.style.backgroundColor = colors[colorIndex1];
        button.style.backgroundColor = colors[colorIndex2];
    });
});
