window.onload = function(){
    var screen = document.querySelector('.screen');

    var c = document.querySelector('.clear');
    var del = document.querySelector('.del');
    var dot = document.querySelector('.dot');
    var percentage = document.querySelector('.percentage')

    var add = document.querySelector('.add');
    var minus = document.querySelector('.minus');
    var multiple = document.querySelector('.multiple');
    var divide = document.querySelector('.divide');
    var equal = document.querySelector('.equal');

    var num1 = document.querySelector('.num1');
    var num2 = document.querySelector('.num2');
    var num3 = document.querySelector('.num3');
    var num4 = document.querySelector('.num4');
    var num5 = document.querySelector('.num5');
    var num6 = document.querySelector('.num6');
    var num7 = document.querySelector('.num7');
    var num8 = document.querySelector('.num8');
    var num9 = document.querySelector('.num9');
    var num0 = document.querySelector('.num0');

    var operation = '';
    var numArr = [];


    c.onclick = function(){
        screen.value = '0';
    };

    del.onclick = function(){
        screen.value = screen.value.slice(0,screen.value.length-1);
        if(screen.value == ''){
            screen.value = '0';
        }
    };

    dot.onclick = function(){
        if(screen.value.indexOf('.')==-1){
            setNum('.');
        }
    };

    percentage.onclick = function(){
        screen.value = Number(screen.value) + '%';
    };

    num1.onclick = function(){
        setNum(1);
    };

    num2.onclick = function(){
        setNum(2);
    };

    num3.onclick = function(){
        setNum(3);
    };

    num4.onclick = function(){
        setNum(4);
    };

    num5.onclick = function(){
        setNum(5);
    };

    num6.onclick = function(){
        setNum(6);
    };

    num7.onclick = function(){
        setNum(7);
    };

    num8.onclick = function(){
        setNum(8);
    };

    num9.onclick = function(){
        setNum(9);
    };

    num0.onclick = function(){
        setNum(0);
    };

    add.onclick = function () {
        if(screen.value.indexOf('+')==-1){
            screen.value+='+';
            operation = '+';
        }
    };

    minus.onclick = function () {
        if(screen.value.indexOf('-')==-1){
            screen.value+='-';
            operation = '-';
        }
    };

    multiple.onclick = function () {
        if(screen.value.indexOf('*')==-1){
            screen.value+='*';
            operation = '*';
        }
    };

    divide.onclick = function () {
        if(screen.value.indexOf('/')==-1){
            screen.value+='/';
            operation = '/';
        }
    };

    equal.onclick = function(){
        screen.value = cal();
    };

    function setNum(num){
        if(screen.value == '0'){
            screen.value = num;
        }else{
            screen.value+=num;
        }
    }

    function cal(){
        numArr = [];
        numArr = screen.value.split(operation);
        var x = Number(numArr[0]);
        var y = Number(numArr[1]);


        if(operation == '+'){
            return x+y;
        }

        if(operation == '-'){
            return x-y;
        }

        if(operation == '*'){
            return x*y;
        }

        if(operation == '/'){
            return x/y;
        }

    }


    /****************************/

};