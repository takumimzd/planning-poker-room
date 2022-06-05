class RoomChannel < ApplicationCable::Channel
 
  def subscribed
    stream_from "room_channel_#{params[:room_id]}"
    # broadcast_message
  end
 
  def broadcast_message
    channel = "room_channel_#{params[:room_id]}"
    ActionCable.server.broadcast channel, selected_card: [1,2,3]
  end
end