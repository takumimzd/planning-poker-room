module Api
  module V1
    class ThemesController < ApplicationController
      def show
        room = Room.find(params[:room_id])
        theme = Theme.find(params[:id])

        channel = "room_channel_#{room.id}"
        selected_cards = Card.where(theme_id: params[:id]).pluck(:count)

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

      def update
        theme = Theme.find(params[:id])
        theme.update!(count: params[:count])
        channel = "room_channel_#{params[:room_id]}"
        render json: { status: 200 }, status: :ok
        ActionCable.server.broadcast channel, { selected_cards: [], title: "", theme_id: "" }
      end

      def destroy_cards
        room = Room.find(params[:room_id])
        theme = Theme.find(params[:id])

        cards = Card.where(theme_id: params[:id])
        cards.delete_all

        channel = "room_channel_#{room.id}"

        ActionCable.server.broadcast channel, { selected_cards: [], title: theme.title, theme_id: theme.id }
        render json: { status: 200 }, status: :ok
      end
    end
  end
end