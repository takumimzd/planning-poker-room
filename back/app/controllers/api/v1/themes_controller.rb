module Api
  module V1
    class ThemesController < ApplicationController
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