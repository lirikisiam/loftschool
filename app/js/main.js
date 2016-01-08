/*
		Modals
*/

;(function($) {
        $(function() {
            $('#modal').bind('click', function(e) {
                e.preventDefault();
                $('.modal').bPopup({
                });
            });
         });
     })(jQuery);

 /*
		Validate jQ
 */

 $(".modal__form").validate({
	rules: {
		name: {
			required: true
		}
	}
 });

