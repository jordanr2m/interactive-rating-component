// Submit button
const submitButton = document.querySelector(".submit");
// Starting screen
const startWindow = document.querySelector(".start-window");
// Ending screen
const thankYouWindow = document.querySelector(".thank-you-message");
// Rating span
const ratingSpan = document.querySelector(".rating-selection span");
// console.log(ratingSpan);

// Grab all number buttons. No space between words
let buttonList = document.querySelectorAll("button.circle");

let userRating = "";

// Make a # rating for each user selection
buttonList.forEach(function (selection) {
    selection.addEventListener("click", function (e) {
        userRating = e.target.innerHTML;
        // console.log(userRating);
    })
})

// Submit button functionality
submitButton.addEventListener("click", function (e){
    startWindow.classList.toggle("hidden");
    thankYouWindow.classList.toggle("hidden");
    ratingSpan.innerHTML = userRating;
})