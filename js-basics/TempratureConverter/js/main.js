const temp=document.getElementById("Temprature");
const c2f=document.getElementById("CtoF");
const f2c=document.getElementById("FtoC");
const result=document.getElementById("answer");
let t;


function convert(){

    if(c2f.checked)
    {
        t=Number(temp.value);
        t=t*9/5+32;
        result.textContent= t.toFixed(1) + "° F"
    }
    else if(f2c.checked)
    {
        t=Number(temp.value);
        t=(t-32)*5/9;
        result.textContent= t.toFixed(1) + "° C"
    }
    else{
         result.textContent= "PLEASE SELECT A UNIT"
    }
}