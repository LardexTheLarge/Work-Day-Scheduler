//Variables
var textArea = $(".timeslot");
var saveBtn = $(".saveBtn");

//clock variables
var displayDate = $("#currentDay");
var today = moment().format("dddd, MMMM Do YYYY, h a");
$("#currentDay").text(today);

function renderLastTask() {
  var keyID = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];
  //the value of timeslot gets taken from the local storage
  $(".timeslot").val(JSON.parse(localStorage.getItem(keyID))); //Get

  //displays the key to the textArea
  textArea.text(keyID);
}

//saves text area when clicked
saveBtn.on("click", function () {
  console.log("I was clicked");
  var slotId = this.id.split("-")[1];
  console.log(slotId);

  var task = $("#text-area-" + slotId).val();
  localStorage.setItem(slotId, JSON.stringify(task)); //Set

  renderLastTask();
});

renderLastTask();
