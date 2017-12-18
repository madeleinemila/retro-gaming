var game = new Phaser.Game(800, 800, Phaser.AUTO, 'snake', { preload: preload, create: create, update: update });
var snake;
var snake_body = new Array();
var snake_path;
var snake_space = 1;
var score = 0
var star;
var cursors;
var game_over;
var scoreText;

function spawn_star() {
    min = 1;
    max = 770;
    x = Math.floor(Math.random() * ((max-min)+1) + min);
    y = Math.floor(Math.random() * ((max-min)+1) + min);

    star.reset(x, y);
}

function init_body() {
    snake_body = game.add.group();
    snake_body.enableBody = true;
    snake_path = new Array();
    for (var i = 0; i <= snake_space; i++) {
        snake_path[i] = new Phaser.Point(snake.x, snake.y);
    }
}

function grow_snake() {
  console.log( snake.alive );

    var segment = snake_body.create(snake.x, snake.y, 'snake');
    console.log( snake.alive );

    segment.anchor.setTo(0.5, 0.5);
    console.log( snake.alive );

    j = score*snake_space
    console.log( snake.alive );

    for (var i = j; i <= j + snake_space; i++) {
        snake_path[i] = new Phaser.Point(snake.x, snake.y);
    }
    console.log( snake.alive );

}

function collect_star(snake, star) {

    // Remove star and spawn another
    star.kill()
    spawn_star();

    for (var i = 1; i <= 10; i++ ) {
        score += 1;
        grow_snake();
    }
    scoreText.text = 'Score: ' + score/10;
}

function kill_snake() {
    snake.kill();
}

function restart() {
    game_over.text = '';
    snake.reset(400,400);
    init_body();
    spawn_star();
    game_running = true;
    score = 0;
    scoreText.text = 'Score: 0';
}

function preload() {
    game.load.image('snake', 'assets/body.png');
    game.load.image('star', 'assets/food.png');
}

function create() {
    // Set the background color
    game.stage.backgroundColor = '#00FFFF';

    // Let there be physics!
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Create Snake
    snake = game.add.sprite(400, 400, 'snake');
    snake.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enable(snake);
    snake.checkWorldBounds = true;
    snake.outOfBoundsKill = true;


    // Init snake, path, and body
    init_body();

    //Spawn star
    star = game.add.sprite(0, 0, 'star')
    game.physics.arcade.enable(star);
    star.body.setSize(22, 20, 0, 0);
    spawn_star();


    cursors = game.input.keyboard.createCursorKeys();

    // Text
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    game_over = game.add.text(game.world.centerX, game.world.centerY, '', style);
    game_over.anchor.setTo(0.5, 0.5);
    game_over.inputEnabled = true;
    game_over.events.onInputDown.add(restart, this);

    //  The score
    scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {
    game.physics.arcade.overlap(snake, star, collect_star, null, this);
    // game.physics.arcade.collide(snake, snake_body, kill_snake, null, this);

    if (!snake.alive) {
        star.kill();
        snake_body.callAll('kill');

        game_over.text = "Game Over!\nClick to restart";
        snake.alive = true;
    }

    if (snake_path.length > 0) {
        var part = snake_path.pop();
        part.setTo(snake.x, snake.y);
        snake_path.unshift(part);

        for (var i = 0; i < snake_body.length; i++)
        {
            snake_body.xy(i, (snake_path[i * snake_space]).x, (snake_path[i * snake_space]).y);
        }
    }

    if (cursors.left.isDown && snake.body.velocity.x != 150) {
        snake.body.velocity.x = -150;
        snake.body.velocity.y = 0;
    } else if (cursors.right.isDown && snake.body.velocity.x != -150) {
        snake.body.velocity.x = 150;
        snake.body.velocity.y = 0;
    } else if (cursors.up.isDown && snake.body.velocity.y != 150) {
        snake.body.velocity.y = -150;
        snake.body.velocity.x = 0;
    } else if (cursors.down.isDown && snake.body.velocity.y != -150) {
        snake.body.velocity.y = 150;
        snake.body.velocity.x = 0;
    }
}

// const game = new Phaser.Game( 640, 480, Phaser.AUTO, 'snake', { preload: preload, create: create, update: update } );
// let snake;
// let snake_body = [];
// let snake_path = [];
// let snake_length = 1;
// let food;
// let cursors;
//
// function preload() {
//   game.stage.backgroundColor = '#bfcc00';
//   game.load.image( 'body', 'assets/body.png' );
//   game.load.image( 'food', 'assets/food.png' );
// }
//
//
// const UP = 0;
// const DOWN = 1;
// const LEFT = 2;
// const RIGHT = 3;
//
// function create() {
//
//   game.physics.startSystem( Phaser.Physics.ARCADE );
//
//   // Create snake
//   snake = game.add.sprite( 320, 240, 'body' );
//   game.physics.arcade.enable( snake );
//   snake.checkWorldBounds = true;
//   snake.outOfBoundsKill = true;
//
//   snake_body = game.add.group();
//   snake_body.enableBody = true;
//   console.log( snake_body );
//   // for ( let i = 0; i <= snake_length; i++ ) {
//   //   snake_length[i] = new Phaser.point( snake.x, snake.y )
//   // }
//   // End snake
//
//   // Create food
//   food = game.add.sprite( 0, 0, 'food' );
//   game.physics.arcade.enable( food );
//   spawnFood();
//   // End food
//
//   cursors = game.input.keyboard.createCursorKeys();
// }
//
// function update() {
//   // Movement - prevent snake from going backwards
//   if ( cursors.left.isDown && snake.body.velocity.x !== 150 ) {
//     snake.body.velocity.y = 0;
//     snake.body.velocity.x = -150;
//   }
//   if ( cursors.right.isDown && snake.body.velocity.x !== -150 ) {
//     snake.body.velocity.y = 0;
//     snake.body.velocity.x = 150;
//   }
//   if ( cursors.up.isDown && snake.body.velocity.y !== 150 ) {
//     snake.body.velocity.x = 0;
//     snake.body.velocity.y = -150;
//   }
//   if ( cursors.down.isDown && snake.body.velocity.y !== -150 ) {
//     snake.body.velocity.x = 0;
//     snake.body.velocity.y = 150;
//   }
//   // End movement
//
//   if ( snake_path.length > 0 ) {
//     const part = snake_path.pop();
//     part.setTo( snake.x, snake.y );
//     snake_path.unshift( part );
//   }
//
//   for ( let i = 0; i < snake_body.length; i++ ) {
//     snake_body.xy( i, ( snake_path[i].x ), ( snake_path[i].y ) );
//   }
//
//   game.physics.arcade.overlap( snake, food, collectFood, null, this )
// }
//
// const spawnFood = function () {
//   const x = _.random(625);
//   const y = _.random(465);
//
//   food.reset( x, y )
// }
//
// const collectFood = function () {
//   console.log( snake_path );
//   food.kill();
//   spawnFood();
//   grow();
// }
//
// const grow = function () {
//   const segment = snake_body.create( snake.x, snake.y, 'body' );
//   for ( let i = 0; i < snake_length; i++ ) {
//     snake_path[i] = new Phaser.Point( snake.x, snake.y );
//   }
// }
