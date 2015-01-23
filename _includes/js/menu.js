// Loading Menu with jQuery

// bind a click handler to the button
$('#btn-new').click(function(){
    // wrap the clicked button in jQuery
    var el = $(this); 

    // change the state of the button
    el.addClass('is-pressed');

    // find the menu by stripping btn- and
    // adding it to menu selector
    $('#menu-' + el.id.substr(4)).removeClass('is-hidden');
});