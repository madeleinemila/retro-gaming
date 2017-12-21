// $( document ).ready( function () {
//   App.game = App.cable.subscriptions.create( "GameChannel", {
//     // Called when the subscription is ready for use on the server
//     connected: function () {
//       console.log( 'connected' );
//       return this.printMessage( 'Waiting for opponent...' );
//     },
//
//     // Called when the subscription has been terminated by the server
//     disconnected: function () {},
//
//     // Called when there's incoming data on the websocket for this channel
//     received: function ( data ) {
//       console.log( data );
//       switch ( data.action ) {
//         case "game_start":
//         console.log( 'game start');
//         return this.printMessage( 'Player found' );
//       }
//     },
//
//     printMessage: function ( message ) {
//       console.log( 'status before:', $( '#status' ).html() );
//       $( '#status' ).html( `${ message }` );
//       console.log( 'status after:', $( '#status' ).html() );
//       return;
//     }
//   } );
//
// } );
