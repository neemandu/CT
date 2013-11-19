;
jQuery(function($){    
	'use strict';



	var IO = 
	{			
			 init: function(data){
		            IO.socket = io.connect();
		            IO.bindEvents();
		     },
		     
		     bindEvents : function(data){
		    	 	IO.socket.on('connected',IO.onConnected);
		            IO.socket.on('signInPlayer',IO.signInPlayer);
		            IO.socket.on('error', IO.error);
		     },
		     
		     onConnected : function(data){
		    	App.mySocketId = IO.socket.socket.sessionid;
		    	alert(data.message);
		     },
		     
		     signInPlayer : function(data){
		    	 alert("signing");
		     },
		     
		     error : function(data) {
		    	 alert(data.message);
		     },

	};


	var App =
	{
			
			mySocketId = 0,
			
			init: function () 
			{
	            App.cacheElements();
	            App.bindEvents();
	        },
			
	        bindEvents: function () {
	            // Host
	            App.$doc.on('click', '#btnCreateGame', App.Host.onCreateClick);

	            /*
	            	Player
	            App.$doc.on('click', '#btnJoinGame', App.Player.onJoinClick);
	            App.$doc.on('click', '#btnStart',App.Player.onPlayerStartClick);
	            App.$doc.on('click', '.btnAnswer',App.Player.onPlayerAnswerClick);
	            App.$doc.on('click', '#btnPlayerRestart', App.Player.onPlayerRestart);
	            */
	        },
	        
	      	onCreateClick: function ()
        	{
        		alert('lala');
            },
	        
	        cacheElements : function()
	        {
	        	App.$doc = $(document);

	            // Templates
	            App.$gameArea = $('#gameArea');
	            App.$welcomePage = $('#welcome_page');
	        },
	        
	        showInitScreen: function() {
	            App.$gameArea.html(App.$welcome_Page);
	            App.doTextFit('.title');
	        },
	        
			onConnected : function() 
			{
	            // Cache a copy of the client's socket.IO session ID on the App
	            App.mySocketId = IO.socket.socket.sessionid;
	            // console.log(data.message);
	        },

	};

	IO.init();
	App.init();

}($));
