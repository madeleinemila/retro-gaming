const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  backgroundColor: '#bfcc00',
  parent: 'snake',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

// Globals
let snake;
let food;
let cursors;

// Directional constants
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

// Grid constants
const GRID_WIDTH = 39;
const GRID_HEIGHT = 29;
const BLOCK_SIZE = 16;

const game = new Phaser.Game( config );

function preload () {
  this.load.image( 'food', 'assets/food.png' );
  this.load.image( 'body', 'assets/body.png' );
}

function create () {
  // Create snake class
  const Snake = new Phaser.Class( {
    initialize: function Snake ( scene, x, y ) {
      this.headPosition = new Phaser.Geom.Point( x, y );
      this.body = scene.add.group();

      this.head = this.body.create( x * BLOCK_SIZE, y * BLOCK_SIZE, 'body' );
      // setOrigin places body's top-left at 0,0 instead of placing body's center at 0,0
      this.head.setOrigin(0);

      this.tail = new Phaser.Geom.Point( x, y );

      this.alive = true;

      this.speed = 100;
      this.moveTime = 0;
    },

    update: function ( time ) {
      if ( time >= this.moveTime ) {
        return this.move( time );
      }
    },

    // Snake - movement functions
    // faceLeft: function () {
    //   if ( this.direction !== RIGHT ) {
    //     this.direction = LEFT;
    //   }
    // },
    // faceRight: function () {
    //   if ( this.direction !== LEFT ) {
    //     this.direction = RIGHT;
    //   }
    // },
    // faceUp: function () {
    //   if ( this.direction !== DOWN ) {
    //     this.direction = UP;
    //   }
    // },
    // faceDown: function () {
    //   if ( this.direction !== UP ) {
    //     this.direction = DOWN;
    //   }
    // },

    move: function ( time ) {
      switch( this.direction ) {
        case LEFT:
          this.headPosition.x = Phaser.Math.Wrap( this.headPosition.x - 1, 0, 40 );
          break;
        case RIGHT:
          this.headPosition.x = Phaser.Math.Wrap( this.headPosition.x + 1, 0, 40 );
          break;
        case UP:
          this.headPosition.y = Phaser.Math.Wrap( this.headPosition.y - 1, 0, 30 );
          break;
        case DOWN:
          this.headPosition.y = Phaser.Math.Wrap( this.headPosition.y + 1, 0, 30 );
          break;
      }

      // Update the body segments and place newly created segments at this.tail
      Phaser.Actions.ShiftPosition( this.body.getChildren(), this.headPosition.x * BLOCK_SIZE, this.headPosition.y * BLOCK_SIZE, 1, this.tail );

      // If head has the same x,y coordinates as body, head has hit body
      const hitBody = Phaser.Actions.GetFirst( this.body.getChildren(), { x: this.head.x, y: this.head.y }, 1 );
      if ( hitBody ) {
        console.log( 'dead' );
        this.alive = false;
        return false
      }

      this.moveTime = time + this.speed;

      return true;
    },

    collideWithFood: function ( food ) {
      if ( this.head.x === food.x && this.head.y === food.y ) {
        food.eat();
        this.grow();

        // Increase snake speed for every 5 pieces of food eaten
        if ( this.speed > 20 && food.total % 5 === 0 ) {
          this.speed -= 5;
        }
        return true;
      }
    },

    grow: function () {
      const newSegment = this.body.create( this.tail.x, this.tail.y, 'body' );
      newSegment.setOrigin(0);
    },

    updateGrid: function ( grid ) {
      // Remove blocks occupied by body segments from the list of valid positions on the grid
      this.body.children.each( function ( segment ) {
        const x = segment.x / BLOCK_SIZE;
        const y = segment.y / BLOCK_SIZE;
        console.log( x, grid );

        grid[y][x] = false;
      } );

      return grid;
    }
  } );
  // End Snake class

  // Create Food class
  const Food = new Phaser.Class( {
    Extends: Phaser.GameObjects.Image,
    initialize: function Food ( scene, x, y ) {
      Phaser.GameObjects.Image.call( this, scene )

      this.setTexture( 'food' );
      this.setPosition( x * BLOCK_SIZE, y * BLOCK_SIZE );
      this.setOrigin(0);

      this.total = 0;

      scene.children.add( this );
    },

    eat: function () {
      this.total++;
    }
  } );

  // Create snake instance
  snake = new Snake( this, 0, 0 );
  snake2 = new Snake( this, 8, 8 );

  // Create food instance
  food = new Food( this, _.random( GRID_WIDTH ), _.random( GRID_HEIGHT ) );

  cursors = this.input.keyboard.createCursorKeys();
}

function update ( time ) {
  if ( !snake.alive ) {
    return;
  }

  if ( cursors.left.isDown && snake.direction !== RIGHT ) {
    snake.direction = LEFT;
  }
  if ( cursors.right.isDown && snake.direction !== LEFT ) {
    snake.direction = RIGHT;
  }
  if ( cursors.up.isDown && snake.direction !== DOWN ) {
    snake.direction = UP;
  }
  if ( cursors.down.isDown && snake.direction !== UP ) {
    snake.direction = DOWN;
  }
  // check for collision with food every time snake is updated
  if ( snake.update( time ) ) {
    if ( snake.collideWithFood( food ) ) {
      generateFood();
    }
  }
  if ( !snake2.alive ) {
    return;
  }

  if ( cursors.left.isDown && snake2.direction !== RIGHT ) {
    snake2.direction = LEFT;
  }
  if ( cursors.right.isDown && snake2.direction !== LEFT ) {
    snake2.direction = RIGHT;
  }
  if ( cursors.up.isDown && snake2.direction !== DOWN ) {
    snake2.direction = UP;
  }
  if ( cursors.down.isDown && snake2.direction !== UP ) {
    snake2.direction = DOWN;
  }
  // check for collision with food every time snake2 is updated
  if ( snake2.update( time ) ) {
    if ( snake2.collideWithFood( food ) ) {
      generateFood();
    }
  }
}

function generateFood() {
  // Create a grid that initially assumes all positions are valid for food
  let testGrid = [];

  for ( let y = 0; y <= GRID_HEIGHT; y++ ) {
    testGrid[y] =[];

    for ( let x = 0; x <= GRID_WIDTH; x++ ) {
      testGrid[y][x] = true;
    }
  }

  snake.updateGrid( testGrid );

  // Remove invalid positions
  let validLocations = [];

  for ( let y = 0; y <= GRID_HEIGHT; y++ ) {
    for ( let x = 0; x <= GRID_WIDTH; x++ ) {
      if ( testGrid[y][x] === true ) {
        validLocations.push( { x, y } );
      }
    }
  }

  if ( validLocations.length > 0 ) {
    const position = _.sample( validLocations );
    food.setPosition( position.x * BLOCK_SIZE, position.y * BLOCK_SIZE);
  }

  // const snakeBody = snake.body.children.entries.map( function ( segment ) {
  //   return {
  //     x: segment.x / BLOCK_SIZE,
  //     y: segment.y / BLOCK_SIZE
  //   };
  // } );
  //
  // // _.range is exclusive
  // const grid = _.range( GRID_WIDTH + 1 ).map( (x) => {
  //   return _.range( GRID_HEIGHT + 1 ).map( (y) => { return { x, y } } );
  // } );
  //
  // console.log( grid );
}