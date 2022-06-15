module Api
  module V1
    class ThemesController < ApplicationController
      def show
        room = Room.find(params[:room_id])
        theme_id = params[:id]

        channel = "room_channel_#{room.id}"
        selected_cards = Card.where(theme_id: theme_id).pluck(:count)
        theme = Theme.find(theme_id)

        ActionCable.server.broadcast channel, { selected_cards: selected_cards || [], title: theme.title, theme_id: theme.id }
        render json: { status: 200 }, status: :ok
      end
      
      def create
        theme = Theme.create!(title: params[:title], room_id: params[:room_id])
        render json: { status: 200 }, status: :ok

        channel = "room_channel_#{params[:room_id]}"
        selected_cards = Card.where(theme_id: theme.id).pluck(:count)
        ActionCable.server.broadcast channel, { selected_cards: selected_cards || [], title: theme.title, theme_id: theme.id }
      end
    end
  end
end