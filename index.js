// // Exercise 1: Cookie Counter // //
let cookieCounter = 0;
let cookieText = document.getElementById("cookieText")
let cookieImage = document.getElementById("cookieImage")
cookieImage.addEventListener("click", function () {
    cookieCounter++
    if (cookieCounter == 1){
    cookieText.innerHTML = `You clicked this ${cookieCounter} time!`;
    }
    else if (cookieCounter <= 5) {
    cookieText.innerHTML = `You clicked this ${cookieCounter} times! You must really like clicking!`;
    }
    else if (cookieCounter < 10){
    cookieText.innerHTML = `You clicked this ${cookieCounter} times! We're running out of cookies!`;
    }
    else if (cookieCounter >= 10){
    cookieText.innerHTML = `You clicked this ${cookieCounter} times! Are you the Cookie Monster?`;
    }

})
// // End of Exercise 1: Cookie Counter // //
// // Exercise 2: Magnifying Glass // //
let smallButton = document.getElementById("smallBtn")
let bigButton = document.getElementById("bigBtn")
let magText = document.getElementById("magnifyingText")

magText.style.fontSize = "15px"

smallButton.addEventListener("click", function () {
    magText.style.fontSize = "small";
});

bigButton.addEventListener("click", function () {
    magText.style.fontSize = "x-large";
})
// // End of Exercise 2: Magnifying Glass // //
// // Exercise 3: Green Screen // //
//1st WAY: using JS only
let colorBtn = document.getElementById("colorButton")
let colorInput = document.getElementById("colorInput")

colorBtn.addEventListener("click", function(){
    let color = colorInput.value;
    document.body.style.backgroundColor = color;
})
//2nd WAY: using INLINE styling on html. This way works with the INLINE onclick on button! must comment out 1st WAY and comment in 2nd WAY//
// function changeColor() {
//     let color = document.getElementById("colorInput").value;
//     document.body.style.backgroundColor = color;
// }

// Original way of doing Exercise 3 but did not work //
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
// // Exercise 4: Crane Game // //
let crane = document.getElementById("craneImage")
let upBtn = document.getElementById("upButton")
let downBtn = document.getElementById("downButton")
let leftBtn = document.getElementById("leftButton")
let rightBtn = document.getElementById("rightButton")

upBtn.addEventListener("click", function(){
    crane.style.top = (crane.offsetTop - 10)+ "px";
})
downBtn.addEventListener("click", function(){
    crane.style.top = (crane.offsetTop + 10)+ "px";
})
leftBtn.addEventListener("click", function(){
    crane.style.left = (crane.offsetLeft - 10)+ "px";
})
rightBtn.addEventListener("click", function(){
    crane.style.left = (crane.offsetLeft + 10)+ "px";
})
// // End of Exercise 4: Crane Game // //
// // Exercise 5: Dice // //
let diceBtn = document.getElementById("diceButton")
let diceInput = document.getElementById("diceNumber")
let diceResult = document.getElementById("diceResult")

diceBtn.addEventListener("click", function(){
    if (diceInput.value == 0){
        diceResult.textContent = "You can't roll a zero!"
    }
    else if (diceInput.value < 0){
        diceResult.textContent = "You can't roll a negative number!"
    }
    else if (diceInput.value >= 1){
        let randomNumber = (Math.floor(Math.random() * diceInput.value) + 1);
        diceResult.textContent = (`You rolled ${randomNumber}!`);
    }
})
// // End of Exercise 5: Dice // //


