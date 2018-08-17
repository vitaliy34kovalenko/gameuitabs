(function($){
	'use strict';
	
	$(document).ready(function(){

		$('.ba-card__tab').on('click', function(evt) {
			evt.preventDefault();

			$('.ba-card__tab').removeClass('active');
			$(this).addClass('active');

			$('.ba-card__main').hide();
			$( $(this).attr('href') ).show();
		});
	})
})(jQuery);
