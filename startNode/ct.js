/**
 * New node file
 */
var io;
var gameSocket;

function signInPlayer() {
	console.log("signInPlayer");
}

function makeOffer() {
	console.log("makeOffer");
}

function offerRespond() {
	console.log("offerRespond");
}

exports.initGame = function(sio, socket){
    io = sio;
    gameSocket = socket;
    gameSocket.emit('connected', { message: "You are connected!" });

    // Host Events
    gameSocket.on('signInPlayer', signInPlayer);
    gameSocket.on('makeOffer', makeOffer);
    gameSocket.on('offerRespond', offerRespond);
  };




