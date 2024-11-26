const roll=document.getElementById("roll");
const dice=document.getElementById("dice");
const min=1;
const max=6;
let r;
roll.onclick=function(){
    r=Math.floor(Math.random() *max) + min;
    dice.textContent=r;
}
