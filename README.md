# GEHMS

Retro in-browser games


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

[Check out Gehms live, deployed on Heroku at https://gehms.herokuapp.com/](https://gehms.herokuapp.com/)

#### KEYBOARD CONTROLS

Keyboard controls are displayed in-game.
In ROIDS, press SPACEBAR to commence a new game.

#### PLAYERS

SNAAK - 1 or 2 players

PING - 2 player only

ROIDS - 1 player only



### Hardware Controls

This project was also built and demonstrated with custom Arduino controllers.

If you'd like to play with your own Arduino setup:
* You'll need 4 buttons/inputs for gameplay.
* Upload `/arduino-contollers/arduino/basicSerialButtonWrite4BUTTON/basicSerialButtonWrite4BUTTON.ino` to your Arduino, ensuring the pin configuration is correct for your circuit.
* All Node dependencies are in the `package.json` file.
* You may need to update the names of the serial ports in `/arduino-controllers/server.js` to match your system.
* Run server.js from your command line
`node server.js`


### Screenshots & Hardware Pics

![Homepage](http://res.cloudinary.com/mrmy/image/upload/v1517408103/gehms-home_ebbe1g.jpg)
![Snaak in action](http://res.cloudinary.com/mrmy/image/upload/v1517407975/gehms-snaak-progress_kczey3.jpg)
![Roids in action](http://res.cloudinary.com/mrmy/image/upload/v1517408022/gehms-roids_nlqmnb.jpg)
![Ping in action](http://res.cloudinary.com/mrmy/image/upload/v1517407942/gehms-ping-progress_t50ek5.jpg)
![Controller work in progress](http://res.cloudinary.com/mrmy/image/upload/v1517408251/controllers01_avyrag.jpg)
![Controllers](http://res.cloudinary.com/mrmy/image/upload/v1517408367/controllers02_iywryk.jpg)
![Controllers with side on angle](http://res.cloudinary.com/mrmy/image/upload/v1517408385/controllers03_lym3eu.jpg)


### Bugs & Future Fixes

* Snaak - better handling if the two snakes collide head-on.
* Snaak - online multiplayer was R&D'd in Action Cable, and could be implemented in a v2.
* Roids - the boss is a little easy to kill.
* Roids - would be EVEN BETTER if it was 2 player.
* Ping - the ball will occasionally reverse direction without collision with paddle. Mystery ball!
