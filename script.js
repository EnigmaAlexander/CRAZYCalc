function insert(num){
    if(document.querySelector('.current-operand').innerHTML.includes('.00000000')) return;
    if(document.querySelector('.current-operand').innerHTML =='0' && num=='0')return;
    if(document.querySelector('.current-operand').innerHTML.length > 22)return;
    if (document.querySelector('.current-operand').innerHTML == 'Ошибка') return;
    if (num === '.' && document.querySelector('.current-operand').innerHTML == '') return;
    if (num === '.' && document.querySelector('.current-operand').innerHTML.includes('.')) return;
    document.querySelector('.current-operand').innerHTML = document.querySelector('.current-operand').innerHTML + num;
    var check =  document.querySelector('.current-operand').innerHTML;
    
    if(num !== '.' && num !== '0'){
    check = parseFloat(check);
    check = +check.toFixed(8);
    document.querySelector('.current-operand').innerHTML =  String(check);
    }
    if (document.querySelector('.current-operand').innerHTML.length > 0) document.querySelector('.current-operand').style.fontSize = 50 + 'px';

    if(document.querySelector('.current-operand').innerHTML.length > 10)
        document.querySelector('.current-operand').style.fontSize = 34 + 'px';
    if(document.querySelector('.current-operand').innerHTML.length > 15)
        document.querySelector('.current-operand').style.fontSize = 15 + 'px';
}
function allClear(){
    document.querySelector('.current-operand').innerHTML = '';
    document.querySelector('.previous-operand').innerHTML = '';
}
function chooseOperation(operation){
    if (document.querySelector('.current-operand').innerHTML == 'Ошибка') return;
    if(document.querySelector('.current-operand').innerHTML == '' && operation === '-'){
        document.querySelector('.current-operand').innerHTML = operation + document.querySelector('.current-operand').innerHTML;
        return
    }
    if(document.querySelector('.current-operand').innerHTML == '') return;

    if (operation === '+' && document.querySelector('.previous-operand').innerHTML.includes('+')) return;
    if (operation === '*' && document.querySelector('.previous-operand').innerHTML.includes('*')) return;
    if (operation === '-' && document.querySelector('.previous-operand').innerHTML.includes('-')) return;
    if (operation === '/' && document.querySelector('.previous-operand').innerHTML.includes('/')) return;

    document.querySelector('.current-operand').innerHTML = parseFloat(document.querySelector('.current-operand').innerHTML);
    document.querySelector('.previous-operand').innerHTML =  document.querySelector('.current-operand').innerHTML;
    document.querySelector('.current-operand').innerHTML = '';
    document.querySelector('.previous-operand').innerHTML = document.querySelector('.previous-operand').innerHTML + operation;   
}
function equal(){
    document.querySelector('.current-operand').innerHTML = eval(document.querySelector('.previous-operand').innerHTML + document.querySelector('.current-operand').innerHTML);
    document.querySelector('.current-operand').innerHTML = parseFloat(document.querySelector('.current-operand').innerHTML);
    var numb = document.querySelector('.current-operand').innerHTML;
    if(numb.includes('.')){
    numb = parseFloat(numb);
    numb = +numb.toFixed(8);
    document.querySelector('.current-operand').innerHTML = numb;
    }
    document.querySelector('.previous-operand').innerHTML = ' ';
    if (document.querySelector('.current-operand').innerHTML == Infinity || document.querySelector('.current-operand').innerHTML == -Infinity){
        document.querySelector('.current-operand').innerHTML = 'Ошибка';
    }
    if(document.querySelector('.current-operand').innerHTML == 'NaN') document.querySelector('.current-operand').innerHTML = 0;
    if(document.querySelector('.current-operand').innerHTML.length < 10)
        document.querySelector('.current-operand').style.fontSize = 45 + 'px';
    if(document.querySelector('.current-operand').innerHTML.length > 10)
        document.querySelector('.current-operand').style.fontSize = 34 + 'px';
    if(document.querySelector('.current-operand').innerHTML.length > 15)
        document.querySelector('.current-operand').style.fontSize = 15 + 'px';
}
function del(){
    if (document.querySelector('.current-operand').innerHTML == 'Ошибка') return;
    document.querySelector('.current-operand').innerHTML =  document.querySelector('.current-operand').innerHTML.slice(0, -1);
}