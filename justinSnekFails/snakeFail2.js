const game = new Phaser.Game( 640, 480, Phaser.AUTO, 'snake', { preload: preload, create: create, update: update } );

function preload() {
  game.stage.backgroundColor = '#bfcc00';
  game.load.image( 'body', 'assets/body.png' );
  game.load.image( 'food', 'assets/food.png' );
}

let snake;
let cursors;

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

function create() {

  game.physics.startSystem( Phaser.Physics.ARCADE );

  Snake = function ( game, x, y ) {
    Phaser.Sprite.call( this, game, x, y, 'body' );

    this._body = game.add.group();
    this.head = this._body.create( x * 16, y * 16, 'body' );

    console.log( game );

    game.physics.arcade.enable( this );

    // this.body.gravity.y = 300;

    // console.log( this.body.gravity.y );
    // faceLeft = function () {
    //   if ( this.direction === UP || this.direction === DOWN ) {
    //     this.heading = LEFT;
    //   }
    // },
    // faceRight = function () {
    //   if ( this.direction === UP || this.direction === DOWN ) {
    //     this.heading = RIGHT;
    //   }
    // },
    // faceUp = function () {
    //   if ( this.direction === LEFT || this.direction === RIGHT ) {
    //     this.heading = UP;
    //   }
    // },
    // faceDown = function () {
    //   if ( this.direction === LEFT || this.direction === RIGHT ) {
    //     this.heading = DOWN;
    //   }
    // },
    //
    // move = function ( time ) {
    //   switch (this.heading) {
    //     case LEFT:
    //         this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
    //         break;
    //
    //     case RIGHT:
    //         this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
    //         break;
    //
    //     case UP:
    //         this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
    //         break;
    //
    //     case DOWN:
    //         this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
    //         break;
    //   }
    //
    //   this.direction = this.heading;
    //
    //   // update body segments
    //   Phaser.Actions.ShiftPosition( this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1 );
    //
    //   // update timer for the next movement
    //   this.moveTime = time + this.speed
    //
    //   return true;
    // }
  }

  Snake.prototype = Object.create( Phaser.Sprite.prototype );
  Snake.prototype.constructor = Snake;

  // snake = game.add.sprite( 0, 0, 'body' );
  // snake.tail = game.add.group();
  //
  // snake.alive = true;
  //
  // game.physics.arcade.enable( snake );
  // snake.body.collideWorldBounds = true;
  //
  // snake.heading = RIGHT;
  // snake.direction = RIGHT;
  // snake.body.velocity.x = 150;
  //
  // snake.faceLeft = function () {
  //   console.log( this );
  //   if ( this.direction === UP || this.direction === DOWN ) {
  //     this.heading = LEFT;
  //   }
  // }
  // snake.faceRight = function () {
  //   console.log( this );
  //   if ( this.direction === UP || this.direction === DOWN ) {
  //     this.heading = RIGHT;
  //   }
  // }
  // snake.faceUp = function () {
  //   console.log( this );
  //   if ( this.direction === LEFT || this.direction === RIGHT ) {
  //     this.heading = UP;
  //   }
  // }
  // snake.faceDown = function () {
  //   console.log( this );
  //   if ( this.direction === LEFT || this.direction === RIGHT ) {
  //     this.heading = DOWN;
  //   }
  // }
  snake = new Snake( game, 8, 8 );
  snake.body.gravity.y = 300
  console.log( snake.body.gravity.y );

  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  // if ( cursors.left.isDown && ( snake.direction === UP || snake.direction === DOWN ) ) {
  //   snake.body.velocity.y = 0;
  //   snake.faceLeft();
  //   snake.body.velocity.x = -150;
  // }
  // if ( cursors.right.isDown && ( snake.direction === UP || snake.direction === DOWN ) ) {
  //   snake.faceRight();
  //   snake.body.velocity.y = 0;
  //   snake.body.velocity.x = 150;
  // }
  // if ( cursors.up.isDown && ( snake.direction === LEFT || snake.direction === RIGHT ) ) {
  //   snake.faceUp();
  //   snake.body.velocity.x = 0;
  //   snake.body.velocity.y = -150;
  // }
  // if ( cursors.down.isDown && ( snake.direction === LEFT || snake.direction === RIGHT ) ) {
  //   snake.faceDown();
  //   snake.body.velocity.x = 0;
  //   snake.body.velocity.y = 150;
  // }
  // console.log( snake.direction );
  snake.direction = snake.heading;
  // console.log( snake.heading );


}
