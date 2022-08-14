//Variables
var textArea = $(".timeslot");
var saveBtn = $(".saveBtn");

//clock variables
var displayDate = $("#currentDay");
var today = moment().format("dddd, MMMM Do YYYY, h a");
$("#currentDay").text(today);

//this function renders the saved values to each time slot
function renderLastTask() {
  //the value of the task variable gets taken from the local storage and put in the
  //correct time spot
  for (let i = 8; i <= 12; i++) {
    //this for loop goes through 8 to 12 pm

    var keyValue = JSON.parse(localStorage.getItem(i));
    console.log(keyValue);
    $("#text-area-" + i).val(keyValue);
  }
  //this for loop goes through 1 to 7pm
  for (let i = 1; i <= 7; i++) {
    var keyValue = JSON.parse(localStorage.getItem(i));
    console.log(keyValue);
    $("#text-area-" + i).val(keyValue);
  }
}

//this function checks the time and color codes the past, present and future
function checkTime() {
  //.each loops through the element .time-block and applies the if statement to all the time-blocks
  $(".time-block").each(function () {
    var blockId = parseInt($(this).attr("id")); //.this references to the .time-block
    var currentHour = moment().format("H"); //currentHour uses military time

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
  //.splits save-i to an array and calls the number in the id
  var slotId = this.id.split("-")[1];
  //task connects the id of saveBtn and text-area and allows to save to that specific textarea
  var task = $("#text-area-" + slotId).val();
  //stringifys task and adds the corrisponding slot id
  localStorage.setItem(slotId, JSON.stringify(task)); //Set

  renderLastTask();
});
renderLastTask();
