# GEHMS

### Built by

Cassandra Essex
Justin Gan
Madeleine Milasas
Sheren To



### Built with

- Phaser JavaScript framework v2
- Ruby v2.4.2 on Rails v5.1.4
- HTML5
- CSS3 / SASS
- Node v8.9.0 with serialport, socket.io
- Arduino Yun



### How to play

[Deployed on Heroku](http://gehms.herokuapp.com/)

Keyboard controls are displayed in-game

SNAAK
1 or 2 players

PING
2 player only

ROIDS
1 player only


### Hardware controls

This project was also built and demonstrated with custom Arduino controllers.

If you'd like to play with your own Arduino:
* Upload /arduino-contollers/arduino/basicSerialButtonWrite4BUTTON to your Arduino.
* All Node dependencies are in the package.json file.
* You may need to update the names of the serial ports in /arduino-controllers/server.js to match your system.
* Run server.js from your command line
`node server.js`



### Bugs & Future Fixes

* Snaak - if the two snakes collide head-on, only one will survive.
* Snaak - online multiplayer was R&D'd in Action Cable, and could be implemented in a v2.
* Roids - the boss is a little easy to kill.
* Roids - would be EVEN BETTER if it was 2 player.
* Ping - the ball will occasionally reverse direction without collision with paddle.
