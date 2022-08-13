var textArea = $("#text-area");
var saveBtn = $("#save");
//
var displayDate = $("#currentDay");
var today = moment().format("dddd, MMMM Do YYYY, h a");
$("#currentDay").text(today);

function renderLastTask() {
  //   var taskDes = JSON.parse(localStorage.getItem("taskDes"));
  $("#text-area").val(localStorage.getItem("taskDes")); //Get
  console.log(textArea);
  textArea.text(taskDes);
}

saveBtn.on("click", function (event) {
  var taskDes = $("#text-area").val();

  localStorage.setItem("taskDes", JSON.stringify(taskDes));
  //   localStorage.setItem($("#text-area").val()); //Set

  console.log(taskDes);
  renderLastTask();
});

$("#note1input").val(localStorage.getItem("abc")); //Get
