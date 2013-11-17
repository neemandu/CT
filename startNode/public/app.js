
;
jQuery(function($){    
	'use strict';



	var IO = 
	{
			 
			
			 init: function() 
			 {
		            IO.socket = io.connect();
		            IO.bindEvents();
		            IO.socket.emit('signInPlayer');
		     },
		     
		     bindEvents : function()
		     {
		            IO.socket.on('signInPlayer',IO.signInPlayer);
		     },
		     
		     signInPlayer : function(data)
		     {
		    	 console.log("signIn");
		     }

	};


	var App =
	{

			

	};

	IO.init();
	App.init();

}($));
