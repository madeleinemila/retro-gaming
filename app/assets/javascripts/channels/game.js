$( document ).ready( function () {
  App.game = App.cable.subscriptions.create( "GameChannel", {
    // Called when the subscription is ready for use on the server
    connected: function () {
      // console.log( 'waiting' );
      return this.printMessage( 'Waiting for opponent...' );
    },

    // Called when the subscription has been terminated by the server

    // Called when there's incoming data on the websocket for this channel

    printMessage: function ( message ) {
      // console.log( 'status:', $( '#status' ) );
      return $( '#status' ).html( `${ message }` );
    }
  } );

} );
