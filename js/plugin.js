/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    // All Variable ===============================================================================
    var bodyHeight, d, footer = $('.footer');
        
    // All Function ===============================================================================
    function resetRun() {
        bodyHeight = document.body.scrollHeight; // Footer Bottom 0
        footer.css('position', 'absolute');
        footer.css('top', bodyHeight);
    }
    // Public =====================================================================================
    $('[placeholder]').focus(function () { // Placeholder
		$(this).attr('data-place', $(this).attr('placeholder'));
		$(this).attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).attr('data-place'));
	});
    
    resetRun();
    
    d = new Date(); // Append Date To Footer
    footer.text(footer.text() + d.getFullYear());
    
    $('.fa').css('color', 'red'); // Test
    
    // When Resize ===============================================================================
    $(window).resize(function () {
        resetRun();
    });
});
