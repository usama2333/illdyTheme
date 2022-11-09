let counts1=setInterval(updated);
let upto=0;
function updated(){
    var count1= document.getElementById("counter1");
    count1.innerHTML=++upto;
    if(upto===260)
    {
        clearInterval(counts1);
    }
}

let counts2=setInterval(updated1);
let upto1=0;
function updated1(){
    var count2= document.getElementById("counter2");
    count2.innerHTML=++upto1;
    if(upto1===120)
    {
        clearInterval(counts2);
    }
}


let counts3=setInterval(updated2);
let upto2=0;
function updated2(){
    var count3= document.getElementById("counter3");
    count3.innerHTML=++upto2;
    if(upto2===260)
    {
        clearInterval(counts3);
    }
}