// Time and Date using Moment.js 

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));


function checkHour() {

//    Parse integer for time comparison 
    var currentTime = moment().format("HH");
    var timeInt = parseInt(currentTime);

    for(var i = 9; i < 18; i++) {
    
        var timeSlot = $("#" + i).attr("data-index");
        var timeSlotInt= parseInt(timeSlot);

        // Timeslot to check standard business hours from 9AM - 5PM
        if(timeInt > timeSlotInt){
            $("#" + i).addClass("past");
        } if(timeInt == timeSlotInt) {
            $("#" + i).addClass("present");
        } if(timeInt < timeSlotInt) {
            $("#" + i).addClass("future");
        }
    }
}

checkHour();



// Store user input 

function toDoEvent() {
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