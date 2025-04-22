function number(num) {
    const display = document.querySelector('.Display');
    display.value += num;
}

function operator(op) {
    const display = document.querySelector('.Display');
    display.value += op;
}

function clearDisplay() {
    const display = document.querySelector('.Display');
    display.value = '';
}

function clearSingle() {
    const display = document.querySelector('.Display');
    display.value = display.value.slice(0, -1);
}


let History = [];

function calculate() {
    const display = document.querySelector('.Display');

    let openParens = 0;
    let closeParens = 0;

    for(const char of display.value){
    if(char === '(') openParens++;
    else if(char === ')') closeParens++;
    }

    if(openParens > closeParens){
    display.value += ')'.repeat(openParens - closeParens);
    }
    const value = display.value;
    try{
        display.value =  math.evaluate(display.value);
        History.push(`${value} = ${display.value}`); 
    }catch (error){
        display.value = 'Error';
    }
    

   
    document.getElementById('wynik').innerHTML = History.join('<br>');
    
   
    


}