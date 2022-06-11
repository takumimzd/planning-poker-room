class RoomChannel < ApplicationCable::Channel
 
  def subscribed
    stream_from "room_channel_#{params[:room_id]}"
  end
 
  def broadcast_message
    channel = "room_channel_#{params[:room_id]}"
    ActionCable.server.broadcast channel, selected_cards: [1,2,3]
  end
end