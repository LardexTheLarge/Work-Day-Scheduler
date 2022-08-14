//Variables
var textArea = $(".timeslot");
var saveBtn = $(".saveBtn");

//clock variables
var displayDate = $("#currentDay");
var today = moment().format("dddd, MMMM Do YYYY, h a");
$("#currentDay").text(today);

function renderLastTask() {
  //the value of timeslot gets taken from the local storage and put in the
  //correct time spot
  for (let i = 8; i <= 12; i++) {
    var keyValue = JSON.parse(localStorage.getItem(i));
    console.log(keyValue);
    $("#text-area-" + i).val(keyValue);
  }
  for (let i = 1; i <= 7; i++) {
    var keyValue = JSON.parse(localStorage.getItem(i));
    console.log(keyValue);
    $("#text-area-" + i).val(keyValue);
  }
}

function checkTime() {
  //.each loops through
  $(".time-block").each(function () {
    var blockId = parseInt($(this).attr("id"));
    var currentHour = moment().format("h");

    if (currentHour > blockId) {
      $(this).addClass("past");
    } else if (currentHour == blockId) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
checkTime();

//saves text area when clicked
saveBtn.on("click", function () {
  console.log("I was clicked");
  //gets the id of the element this functions being applied to and splits the id
  var slotId = this.id.split("-")[1]; //splits save - i to an array and calls the number in the id
  console.log(slotId);
  //task is the id of text-area- slotId and gets the value of that specific text area
  //then sets the stringifyed task into local storage
  var task = $("#text-area-" + slotId).val();
  localStorage.setItem(slotId, JSON.stringify(task)); //Set

  renderLastTask();
});
renderLastTask();
