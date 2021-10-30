function calc(a,b,c){
    if(a=="sum"){
        return (b+c);
    } else if(a=="sub"){
        return (b-c);
    }else if(a=="divide"){
        return (b/c);
    }else if (a=="multip"){
        return (b*c);
    }else if(a=="rem"){
        return (b%c);
    }else if (a=="exp"){
        return (b**c)
    } else if(a!=="sum" || a!=="sub" || a!=="divide" || a!=="multip" || a!=="rem" || a!=="exp"){
        return alert("unknown operation");
    }else if(b==""||c=="");{
        return alert("Error");
    }
}
var a=prompt("Арифметическое действие");
var b=+prompt("Число 1","");
var c=+prompt("Число 2","");


let result=calc(a,b,c);

if(isFinite(result)){alert(result);
}else{alert("Error");
}

