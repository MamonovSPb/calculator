function calc(a,b,c) {
    if (b == "" || c == "") {
        return alert("Error");
    } else if (a == "sum") {
        return (b + c);
    } else if (a == "sub") {
        return (b - c);
    } else if (a == "divide") {
        return (b / c);
    } else if (a == "multip") {
        return (b * c);
    } else if (a == "rem") {
        return (b % c);
    } else if (a == "exp") {
        return (b ** c);
    } else {
        return alert("unknown operation");
    }
}


var a=prompt("Арифметическое действие");
var b=+prompt("Число 1","");
var c=+prompt("Число 2","");


let result=calc(a,b,c);

if(isFinite(result)){alert(result);
}else{alert("Error");
}

