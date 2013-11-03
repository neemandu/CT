<!DOCTYPE html>
<html>
<body>
<?php
include_once 'Game.php';
	$game = Game::Instance();
	$game->addPlayer("dudi");
	$game->addPlayer("nimrod");
	
	class Main
	{
		// property declaration
		private $redChips = 3;
		private $blueChips = 3;
		private $greenChips = 3;
		private $Name = 3;
	
		function __construct() {
			
		}
	}
?>

</body>
</html>
