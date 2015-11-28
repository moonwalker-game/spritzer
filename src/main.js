var game = new Phaser.Game(1024, 576, Phaser.AUTO, '');
var cursors;
var player;
var floor;
var pipeGenerator;
var score;
//var kaktusCollection;

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('gameover', gameOverState);
game.state.start('boot');