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
// Set default user rating to 0
let userRating = "0";

// Make a # rating for each user selection
buttonList.forEach(function (selection) {
    selection.addEventListener("click", function (e) {
        userRating = e.target.innerText; // Grabbing the text of the targetted button and reassigning it to userRating variable
        // console.log(userRating);
    })
})

// Submit button functionality
submitButton.addEventListener("click", function () {
    startWindow.classList.toggle("hidden");
    thankYouWindow.classList.toggle("hidden");
    ratingSpan.innerText = userRating;
});