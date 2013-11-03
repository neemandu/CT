<?php
include_once 'GameInterface.php';
include_once 'Player.php';
	class Game implements GameInterface
	{	
		private $players;
		public static function Instance()
		{
			static $inst = null;
			if ($inst === null) {
				$inst = new Game();
			}
			return $inst;
		}
		
		private function __construct()
		{
			$this->players = new SplDoublyLinkedList();
		}
		
		public function addPlayer($id)
		{
			$this->checkIfPlayerExist($id);
			$player = new Player($id);
			$this->players->push("Sd");
			echo $player->getName()."\n";
			
			if($this->players->count() == 2){
				echo "Lets begin playing!";
				$this->players->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO);
				for ($this->players->rewind(); $this->players->valid(); $this->players->next()) {
					$ppp = $this->players->current();
					echo $ppp->getName()."\n";
				}
			}
			
		}
		
		public function getNumOfPlayers()
		{
			return $this->players->count();
		}
		
	
		public function offer($player1, $player2, $offer){
			
		}
	
		public function transfer($player1, $player2,$ToTransfer){
			
		}
		
		public function checkIfPlayerExist()
		{
			return true;
		}
	}
?>
