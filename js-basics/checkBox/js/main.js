const subscribe=document.getElementById("check1");
const hotstar=document.getElementById("hotstar");
const netflix=document.getElementById("netflix");
const sony=document.getElementById("sony");
const yt=document.getElementById("yt");
const jio=document.getElementById("jio");
const submit=document.getElementById("submit");

const subResult=document.getElementById("subResult");
const subs=document.getElementById("subs");

submit.onclick=function(){
    if(subscribe.checked==true)
    {
        subResult.textContent ="You are subscribed";
    }
    else{
        subResult.textContent ="You are not subscribed";
        return;
    }
    if(hotstar.checked==true)
    {
        subs.textContent="YOU USING HOTSTAR";
    }
    else if(netflix.checked==true)
    {
        subs.textContent="YOU ARE USING NETFLIX";
    }
    else if(sony.checked==true)
    {
        subs.textContent="YOU ARE USING SONY LIV";
    }
    else if(yt.checked==true)
    {
        subs.textContent="YOU ARE USING YOUTUBE";
    }
    else if(jio.checked==true)
    {
        subs.textContent="YOU ARE USING JIO CINEMA ";
    }
    else{
        subs.textContent="YOU ARE NOT WATCHING";
    }
}