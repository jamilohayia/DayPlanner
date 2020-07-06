// Current Day Display using MOMENT
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));





// Store user input 

function toDoEvent() { 
var userInput = $(this).siblings("input").val().trim();
var hourId = $(this).siblings("input").attr("id");

localStorage.setItem(hourId, userInput);

console.log("user input")

}

$(".saveBTN").on("click", toDoEvent)



