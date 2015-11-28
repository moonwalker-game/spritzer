var kaktusObject = function(game, x, y){

	Phaser.Sprite.call(this, game, x, y, 'kaktus');
 	
	game.physics.arcade.enableBody(this);	
	this.body.immovable = true;
	this.body.velocity.x = -250;
	this.body.allowGravity = false;  

}

kaktusObject.prototype = Object.create(Phaser.Sprite.prototype);
kaktusObject.prototype.constructor = kaktusObject;