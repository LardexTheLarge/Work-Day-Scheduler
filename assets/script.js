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
  for (let i = 1; i <= 12; i++) {
    var keyValue = JSON.parse(localStorage.getItem(i));
    console.log(keyValue);
    $("#text-area-" + i).val(keyValue);

    if (moment().format("h") == i) {
      textArea.css("background-color", "redorange");
    } else if (moment().format("h") < i) {
      textArea.css("background-color", "gray");
    } else if (moment().format("h") > i) {
      textArea.css("background-color", "green");
    }
    console.log(moment().format("h") == i);
  }
}

//saves text area when clicked
saveBtn.on("click", function () {
  console.log("I was clicked");
  //
  var slotId = this.id.split("-")[1];
  console.log(slotId);

  var task = $("#text-area-" + slotId).val();
  localStorage.setItem(slotId, JSON.stringify(task)); //Set

  renderLastTask();
});
renderLastTask();
