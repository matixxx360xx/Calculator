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
    
    try{
        display.value = Function("return " + display.value)();
    }catch (error){
        display.value = 'Error';
    }
}