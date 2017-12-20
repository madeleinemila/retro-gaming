class Game < ApplicationRecord
  def self.start( uuid1, uuid2 )
    player1, player2 = [ uuid1, uuid2 ].shuffle

    ActionCable.server.broadcast "player_#{ player1 }", { action: "game_start", msg: "player1" }
    ActionCable.server.broadcast "player_#{ player2 }", { action: "game_start", msg: "player2" }

    REDIS.set( "opponent_for:#{ player1 }", player2 )
    REDIS.set( "opponent_for:#{ player2 }", player1 )
  end
end
