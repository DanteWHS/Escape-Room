
window.onload = function scramble(){
    let one = document.getElementById("1");
    let two = document.getElementById("2");
    let three = document.getElementById("3");
    let four = document.getElementById("4");
    let five = document.getElementById("5");
    let six = document.getElementById("6");
    let seven = document.getElementById("7");
    let eight = document.getElementById("8");
    let empty = document.getElementById("empty");
    let x = 1;
    let used = [0];
    for (x=1; x!=10;x++){
        let number = Math.floor(Math.random()*9+1);
        while (used.includes(number)==true){
            number = Math.floor(Math.random()*9+1);
        }
        used.push(number);
        switch(number){
            case 1:number = "one"; break;
            case 2:number = "two"; break;
            case 3:number = "three"; break;
            case 4:number = "four"; break;
            case 5:number = "five"; break;
            case 6:number = "six"; break;
            case 7:number = "seven"; break;
            case 8:number = "eight"; break;
            case 9:number = "empty"; break;
        }
        switch(x){
            case 1: one.className = (number); break;
            case 2: two.className = (number); break;
            case 3: three.className = (number); break;
            case 4: four.className = (number); break;
            case 5: five.className = (number); break;
            case 6: six.className = (number); break;
            case 7: seven.className = (number); break;
            case 8: eight.className = (number); break;
            case 9: empty.className = (number); break;
        }
    }
    check2();
}

function move1(){
    let currentBox = document.getElementsByClassName("one");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move2(){
    let currentBox = document.getElementsByClassName("two");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move3(){
    let currentBox = document.getElementsByClassName("three");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move4(){
    let currentBox = document.getElementsByClassName("four");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move5(){
    let currentBox = document.getElementsByClassName("five");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move6(){
    let currentBox = document.getElementsByClassName("six");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move7(){
    let currentBox = document.getElementsByClassName("seven");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move8(){
    let currentBox = document.getElementsByClassName("eight");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function move9(){
    let currentBox = document.getElementsByClassName("empty");
    let empty = document.getElementById("empty");
    let array = [currentBox[0].className, empty.className];
    empty.className = (array[0]);
    currentBox[0].className = (array[1]);
    check2();
}

function check2(){
    let empty = document.getElementById("empty");
    let one  = document.getElementsByClassName("one");
    let two  = document.getElementsByClassName("two");
    let three  = document.getElementsByClassName("three");
    let four  = document.getElementsByClassName("four");
    let five  = document.getElementsByClassName("five");
    let six  = document.getElementsByClassName("six");
    let seven  = document.getElementsByClassName("seven");
    let eight  = document.getElementsByClassName("eight");
    let nine  = document.getElementsByClassName("empty");
    if (one[0].id=="1"&&two[0].id=="2"&&three[0].id=="3"&&four[0].id=="4"&&five[0].id=="5"&&six[0].id=="6"&&sven[0].id=="7"&&eight[0].id=="8"&&empty[0].id=="empty"){
        alert("complete");
        
    }
    one[0].onclick = undefined;
    two[0].onclick = undefined;
    three[0].onclick = undefined;
    four[0].onclick = undefined;
    five[0].onclick = undefined;
    six[0].onclick = undefined;
    seven[0].onclick = undefined;
    eight[0].onclick = undefined;
    nine[0].onclick = undefined;
    switch(empty.className){
        case "one":two[0].onclick = move2; four[0].onclick = move4; break;
        case "two":one[0].onclick = move1; five[0].onclick = move5; three[0].onclick = move3; break;
        case "three":two[0].onclick = move2; six[0].onclick = move6;  break;
        case "four":one[0].onclick = move1; five[0].onclick = move5; seven[0].onclick = move7; break;
        case "five":four[0].onclick = move4; two[0].onclick = move2; six[0].onclick = move6; eight[0].onclick = move8; break;
        case "six":three[0].onclick = move3; five[0].onclick = move5; nine[0].onclick = move9; break;
        case "seven":four[0].onclick = move4; eight[0].onclick = move8;  break;
        case "eight":seven[0].onclick = move7; five[0].onclick = move5; nine[0].onclick = move9; break;
        case "empty":eight[0].onclick = move8; six[0].onclick = move6; break;
    }
}
