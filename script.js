//current date
const currentDay = moment().format("dddd, MMMM Do");
console.log(currentDay);
$("#currentDay").append(currentDay);


// sessionStorage.setItem()
window.onload = function() {

  // Check for sessionStorage support.
  if (sessionStorage) {

    // Add an event listener for form submissions
    document.getElementById('message').addEventListener('submit', function() {
      // Get the value of the name field.
      var message = document.getElementById('message').value;

      // Save the name in sessionStorage.
      sessionStorage.setItem('message', message);
    });

  }

}
//enable the save button
$( "saveBtn:enabled" ).val( );

// make background color of / past hours gray / current hour red / future hours green

function changeColorBasedOnTime() {
  let currentHour = parseInt(moment().format('H'));

  $(".time-block").each(function() {
    
    var hourNow = parseInt($(this).attr("id").split("-")[1]);

    if (hourNow > currentHour) {
      $(this).addClass("future");
    } else if (hourNow === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }

  })

}
changeColorBasedOnTime()