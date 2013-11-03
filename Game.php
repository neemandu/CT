<?php

	class Game
	{	
		private static $inst = null;
		private $numOfPlayers;
		public static function Instance()
		{
			if ($inst === null) {
				$inst = new Game();
			}
			return $inst;
		}
		
		private function __construct()
		{
			$numOfPlayers = 0;
		}
		
		public function addPlayer()
		{
			$this->numOfPlayers += 1;
		}
		
		public function getNumOfPlayers()
		{
			return $this->numOfPlayers;
		}
	}
?>
