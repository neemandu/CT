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
		            alert('init');
		            
		     },
		     
		     bindEvents : function()
		     {
		    	 	alert('binding');
		            IO.socket.on('signInPlayer',IO.signInPlayer);
		     },
		     
		     signInPlayer : function(data)
		     {
		    	 alert('signing');
		    	 console.log("signIn");
		     }

	};


	var App =
	{

			

	};

	IO.init();
	App.init();

}($));
