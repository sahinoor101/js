const dec=document.getElementById("decrease");
const reset=document.getElementById("reset");
const inc=document.getElementById("increase");

const countL=document.getElementById("count");
let count=0;

inc.onclick =function(){
    count++;
    countL.textContent=count;
}
reset.onclick =function(){
    count=0;
    countL.textContent=count;
}
dec.onclick =function(){
    count--;
    countL.textContent=count;
}
