// let timeout;
// document.onmousemove = function(){
//   clearTimeout(timeout);
//   timeout = setTimeout(function(){console.log("move your mouse");}, 6000);
// }

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(e) {
   let x = e.clientX;
   let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})