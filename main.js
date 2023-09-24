function a3(){
    a1 = document.getElementById("a1").value;
    console.log(a1);
    a2 = document.getElementById("a2").value;
    console.log("a2");
    ans1 = (a1*a2)/100;
    console.log(ans1)
    a4 = document.getElementById("a4").innerHTML = a1+" % of "+a2+" = "+ans1;
}
function b3(){
    b1 = document.getElementById("b1").value;
    console.log(b1);
    b2 = document.getElementById("b2").value;
    console.log("b2");
    ans2 = (b1/b2)*100;
    console.log(ans2)
    b4 = document.getElementById("b4").innerHTML = b1+" is "+ans2+" % of "+b2;
}
function c3(){
    c1 = document.getElementById("c1").value;
    console.log(c1);
    c2 = document.getElementById("c2").value;
    console.log(c2);
    if(c1>c2){
    ans3 = (c1-c2)*100/c1;
    console.log(ans3);
    c4 = document.getElementById("c4").innerHTML = ans3+" % Decrease";
    }
    else{
    ans3 = (c2-c1)*100/c1;
    console.log(ans3);
    c4 = document.getElementById("c4").innerHTML = ans3+" % Increase";
}
}