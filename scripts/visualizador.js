$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
      html: true,
      content: function() {
        return $('#popoverContent').html();
      }
    });
  });

  $('body').on('click', '.popover .btn', function(e) {
    e.preventDefault();
    console.log('Button clicked: ' + $(this).text());
    // Add your button click handling logic here
  });