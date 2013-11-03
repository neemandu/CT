<?php
interface GameInterface{
	
	/**
	 * @param String $id
	 * add a new player to the game
	 */
	public function addPlayer($id);
	
	/**
	 * send a proposal from p1 to p2  
	 * @param Player $player1
	 * @param Player $player2
	 * @param Offer $offer
	 */
	public function offer($player1, $player2, $offer);
		
	/**
	 * 
	 * @param Player $player1
	 * @param Player $player2
	 * @param ToTransfer $ToTransfer
	 */
	public function transfer($player1, $player2,$ToTransfer);
	
}
?>