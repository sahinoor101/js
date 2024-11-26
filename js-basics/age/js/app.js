const btn=document.getElementById("btn");
const print=document.getElementById("print");
const age=document.getElementById("age");
let a;
btn.onclick = function()
{
    a=Number(age.value);
    print.textContent =`you are ${a} years old`;
    if(a>=100)
    {
        print.textContent ="you are TOO OLD to enter this site";
    }
    else if(a<0)
    {
        print.textContent =`age cannot be negetive`;
    }
    else if(a>=18)
    {
        print.textContent =`you are allowed to enter this website`;
    }
    else{
        print.textContent =`you are not old enough to enter this website`;
    }
}
