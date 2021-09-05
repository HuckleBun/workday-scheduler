$(document).ready(function() {  
    $('#currentDay').text(moment().format('dddd, MMMM Do, h:mm a'));

    function updateHour() {
      // get the current live hour
      var current_hour = moment().hours();
  
      // loop over the different blocks of time
      $('.time-block').each(function() {
        var time_block = parseInt(
          $(this).attr('id')
        );

        // depending on the time, add/remove certain classes
        if (time_block < current_hour) {
          $(this).addClass('past');
        } else if (time_block === current_hour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    updateHour();
  
    // set an interval to update to the new time
    setInterval(updateHour, 15000);

    // add localStorage to save button
    $('.saveBtn').on('click', function() {
      var time = $(this).parent().attr('id');
      var value = $(this).siblings('.to-do').val();

      localStorage.setItem(time, value);
    });
  
    // load saved data from localStorage
    $('#9 .to-do').val(localStorage.getItem('9'));
    $('#10 .to-do').val(localStorage.getItem('10'));
    $('#11 .to-do').val(localStorage.getItem('11'));
    $('#12 .to-do').val(localStorage.getItem('12'));
    $('#13 .to-do').val(localStorage.getItem('13'));
    $('#14 .to-do').val(localStorage.getItem('14'));
    $('#15 .to-do').val(localStorage.getItem('15'));
    $('#16 .to-do').val(localStorage.getItem('16'));
    $('#17 .to-do').val(localStorage.getItem('17'));
  });