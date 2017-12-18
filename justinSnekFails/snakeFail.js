const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  backgroundColor: '#bfcc00',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

let snake;
let cursors;

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

const game = new Phaser.Game( config );

function preload() {
  this.load.image( 'food', 'assets/food.png');
  this.load.image( 'body', 'assets/body.png');
}

function create () {
  const Snake = new Phaser.Class( {
    initialize:

    function Snake ( scene, x, y ) {
      this.headPosition = new Phaser.Geom.Point( x, y );
      this.body = scene.add.group();
      this.head = this.body.create( x * 16, y * 16, 'body' );
      this.head.setOrigin(0);

      this.alive = true;

      this.speed = 100;
      this.moveTime = 0;

      this.heading = RIGHT;
      this.direction = RIGHT;
    },

    update: function ( time ) {
      if ( time >= this.moveTime ) {
        return this.move( time );
      }
    },

    // prevent snake from going backwards and colliding against itself
    faceLeft: function () {
      if ( this.direction === UP || this.direction === DOWN ) {
        this.heading = LEFT;
      }
    },
    faceRight: function () {
      if ( this.direction === UP || this.direction === DOWN ) {
        this.heading = RIGHT;
      }
    },
    faceUp: function () {
      if ( this.direction === LEFT || this.direction === RIGHT ) {
        this.heading = UP;
      }
    },
    faceDown: function () {
      if ( this.direction === LEFT || this.direction === RIGHT ) {
        this.heading = DOWN;
      }
    },

    move: function ( time ) {
      switch (this.heading) {
        case LEFT:
            this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
            break;

        case RIGHT:
            this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
            break;

        case UP:
            this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
            break;

        case DOWN:
            this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
            break;
      }

      this.direction = this.heading;

      // update body segments
      Phaser.Actions.ShiftPosition( this.body.getChildren(), this.headPosition.x * 16, this.headPosition.y * 16, 1 );

      // update timer for the next movement
      this.moveTime = time + this.speed

      return true;
    }

  } );
  snake = new Snake( this, 8, 8 );

  cursors = this.input.keyboard.createCursorKeys();
}

function update ( time, delta ) {
  if ( !snake.alive ) {
    return;
  }

  if ( cursors.left.isDown ) {
    snake.faceLeft();
  }
  else if ( cursors.right.isDown ) {
    snake.faceRight();
  }
  else if ( cursors.up.isDown ) {
    snake.faceUp();
  }
  else if ( cursors.down.isDown ) {
    snake.faceDown();
  }
}
