let operand1 = 0,operand2 = 0;
let operator1 = ""; 
let display=document.querySelector("#display");

document.addEventListener('keydown', (event)=>{
    console.log(event,event.key);
    display.textContent +=  event.key;
    
})
let buttons=document.querySelectorAll(".digit");
buttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
    let str= button.id;
       
    if ((display.textContent.length ==   0 && display.textContent==0 ) || 
    ((operator1 !=  0) && (  display.textContent == operand1)))
            display.textContent  = str.substring(3,4);
    else 
            display.textContent += str.substring(3,4);         
    

})}) ; 
let backspace=document.querySelector("#backspace"); 
backspace.addEventListener('click', ()=>{
    display.textContent =  display.textContent.substring(0, display.textContent.length-1)  ;
        
}) ; 

let btndecimal=document.querySelector("#decimal"); 
btndecimal.addEventListener('click', ()=>{
    if (!(display.textContent.includes(".")))
        display.textContent += "."  ;
            
}) ; 

let btnClear=document.querySelector("#btnClear"); 
btnClear.addEventListener('click', ()=>{
    display.textContent = ''   ;
    operand1 = 0 ;
    operand2 = 0;
    operator1 = "";      
}) ;

let btnEqual = document.querySelector("#btnEqual") ;
btnEqual.addEventListener('click' , ()=>{
    getResult(); 
    operator1 = '' ;     
})
function getResult(){
    if (  operator1  == 0)  operand1 = display.textContent;
    else   operand2 = display.textContent;
   
    if (  operator1  != 0   ){
        display.textContent = operate (operand1 , operand2, operator1);
        operand1 = display.textContent; 
    }
    
}
function add(operand1 , operand2){
    
    return ( parseFloat(operand1) + parseFloat(operand2) );
}
function subtract(operand1 , operand2){

    return (parseFloat(operand1) - parseFloat(operand2));
}
function multiply(operand1 , operand2){

    return (parseFloat(operand1) * parseFloat(operand2));
}
function divide(operand1 , operand2){
  
        return (parseFloat(operand1) / parseFloat(operand2));
    
}

function operate(operand1 , operand2, operator){
    switch(operator)
    {
    case '+' :
        return add(operand1,operand2);
    
    break;
    case '-' :
        return subtract(operand1,operand2);
    break;
    case '*':
        return multiply(operand1,operand2);
    break;
    case '/':
        {
       
        if (operand2 == 0 ) {
             display.textContent = 'ERROR';
             console.log(display.textContent )
        }
        else
            return divide(operand1,operand2);}
    break;  
}
}// end of function