// // Exercise 1: Cookie Counter // //
let cookieCounter = 0;
let cookieText = document.getElementById("cookieText")
let cookieImage = document.getElementById("cookieImage")
cookieImage.addEventListener("click", function(){
    cookieCounter++
    cookieText.innerHTML = `You clicked this ${cookieCounter} times!`
})