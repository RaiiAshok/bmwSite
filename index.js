var one = document.querySelectorAll(".one");

for(let i = 0; i < one.length; i++){
  one[i].addEventListener("click", function changes(){
  one[i].style.color = "red";
  })
}