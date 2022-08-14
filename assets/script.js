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

//saves text area when clicked
saveBtn.on("click", function () {
  console.log("I was clicked");
  //gets the id of the element this functions being applied to and splits the id
  var slotId = this.id.split("-")[1];
  console.log(slotId);
  //task is the id of text-area- slotId and gets the value of that specific text area
  //then sets the stringifyed task into local storage
  var task = $("#text-area-" + slotId).val();
  localStorage.setItem(slotId, JSON.stringify(task)); //Set

  renderLastTask();
});
renderLastTask();
