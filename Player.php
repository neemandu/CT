<?php

	class Player
	{
		// property declaration
		private $redChips = 3;
		private $blueChips = 3;
		private $greenChips = 3;
		private $Name = 3;
	
		function __construct($id) {
			$this->Name = $id;
		}
	
		// method declaration
		public function setName($Name) {
			$this->Name = $Name;
			if(strcmp($Name, "DUDI") != 0){
				$this->redChips = 10;
				$this->blueChips = 10;
				$this->greenChips  = 10;
			}
		}
		
		public function getRedChips() {
			return $this->redChips;
		}
	
		public function getBlueChips() {
			return $this->blueChips;
		}
	
		public function getGreenChips() {
			return $this->greenChips;
		}
		
		public function getName() {
			return $this->Name;
		}
	}
?>
