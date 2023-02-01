// // Exercise 1: Cookie Counter // //
let cookieCounter = 0;
let cookieText = document.getElementById("cookieText")
let cookieImage = document.getElementById("cookieImage")
cookieImage.addEventListener("click", function () {
    cookieCounter++
    cookieText.innerHTML = `You clicked this ${cookieCounter} times!`
})
// // End of Exercise 1: Cookie Counter // //
// // Exercise 2: Magnifying Glass // //

let smallButton = document.getElementById("smallBtn")
let bigButton = document.getElementById("bigBtn")
let magText = document.getElementById("magnifyingText")

magText.style.fontsize = "12px"

smallButton.addEventListener("click", function () {
    magText.style.fontSize = "small"
});

bigButton.addEventListener("click", function () {
    magText.style.fontSize = "x-large"
})

// // Exercise 3: Green Screen // //


function changeColor() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

// colorButton.addEventListener("click", changeColor());




// let webPage = document.querySelector("html")
// let colorText = document.getElementById("colorInput")

// colorButton.addEventListener("click", function () {
//     if (colorText.innerHTML = "pink") {
//         webPage.style.backgroundColor = "pink";
//     }
//     if (colorText.innerHTML = "blue") {
//         webPage.style.backgroundColor = "blue";
//     }
//     if (colorText.innerHTML = "green") {
//         webPage.style.backgroundColor = "green";
//     }
//     if (colorText.innerHTML = "yellow") {
//         webPage.style.backgroundColor = "yellow";
//     }
//     if (colorText.innerHTML = "red") {
//         webPage.style.backgroundColor = "red";
//     }
//     else {
//         webPage.style.backgroundColor = "white"
//     }
// })


// // End of Exercise 3: Green Screen // //