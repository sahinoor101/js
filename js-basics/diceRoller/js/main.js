function rollDice()
{
    const noOfDice=document.getElementById("numOfDice").value;
    const diceResult =document.getElementById("diceresult");
    const diceImg=document.getElementById("images");
    const values=[];
    const images =[];

    for(let i=0;i<noOfDice;i++)
    {
        const value=Math.floor(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" width="150px">`);
    }

    diceResult.textContent =`dice : ${values.join(", ")}`;
    diceImg.innerHTML =images.join("");
}
