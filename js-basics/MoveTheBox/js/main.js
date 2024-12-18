const box = document.getElementById("box");
let x = 0;
let y = 0;


document.addEventListener("keydown" , event=>{
  box.style.backgroundColor = "tomato";
  box.textContent = "🙂";
})
document.addEventListener("keyup" , event =>{
  box.style.backgroundColor = "lightblue";
  box.textContent = "🙃";

})
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= 10;
        break;
      case "ArrowDown":
        y += 10;
        break;
      case "ArrowLeft":
        x -= 10;
        break;
      case "ArrowRight":
        x += 10;
        break;

    }
    box.style.top=`${y}px`;
    box.style.left=`${x}px`;
  }
});
