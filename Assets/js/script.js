// Time and Date using Moment.js 

var now = moment().format('MMMM Do YYYY, h:mm a');
$("#currentDay").text(now);


// Store user input 

function toDoEvent(event) {
    var userInput = $(this).siblings("input").val().trim();
    var hourId = $(this).siblings("input").attr("id");

    localStorage.setItem(hourId, userInput);

    console.log("user input")

}

$(".saveBtn").on("click", toDoEvent)










// Clear Button function 

$("#clear").click(function () {
    localStorage.clear();
    location.reload();
    console.log("clicked")
});




