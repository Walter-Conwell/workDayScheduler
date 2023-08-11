// display current hour
var currentHour = dayjs().hour();
let textSlot = $(".description");

$(document).ready(function () {
  let dayInfo = dayjs();
  $("#currentDay").text(dayInfo.format(" Z ddd MMM"));
  console.log("#currentDay");

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

  var userData = $(".saveBtn");
  userData.on("click", function () {
    const textDisplay = this.parentElement.id;
    let userInput = this.previousElementSibling.value;
    window.localStorage.setItem(textDisplay, userInput);
    console.log("userInput saved");
  });

  function dataRenderer() {
    for (var i = 0; i < textSlot.length; i++) {
      var textarea = $(textSlot[i]);
    }
    var timeBlockId = textarea.closest(".time-block").attr("id");
    var savedUserInput = window.localStorage.getItem(timeBlockId);
    if (savedUserInput !== null) {
      textarea.val(savedUserInput);
    }
  }
});
