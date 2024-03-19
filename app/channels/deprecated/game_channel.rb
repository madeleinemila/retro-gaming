# class GameChannel < ApplicationCable::Channel
#   def subscribed
#     stream_from "player_#{ uuid }"
#     Match.create uuid
#   end
#
#   def unsubscribed
#     Match.remove uuid
#   end
# end
