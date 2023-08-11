$(document).ready(function () {
  let dayInfo = dayjs();
  $("#currentDay").text(dayInfo.format(" Z ddd MMM"));
  console.log("#currentDay");

  // display current hour
  var currentHour = dayjs().hour();
  let textSlot = $(".description");

  // loop for the time blocks
  $(".time-block").each(function () {
    var timeBlock = $(this);
    var timeList = Number(timeBlock.attr("id").split("-")[1]);
    // timeBlock comparisons to currentHour
    if (timeList < currentHour) {
      timeBlock.addClass("past");
    } else if (timeList === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  });

var userData =$(".saveBtn");

//   dataRenderer();

//   var userData = $(".saveBtn");
//   userData.on("click", function () {
//     var textDisplay = this.parentElement.id;

//     userInput = this.previousElementSibling.value;

//     window.localStorage.setItem(textDisplay, userInput);
//   });
// });
// function dataRenderer() {
//   for (var i = 0; i < textSlot.length; i++) {
//     var timeList = Number();
//   }
// }
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
//   });
