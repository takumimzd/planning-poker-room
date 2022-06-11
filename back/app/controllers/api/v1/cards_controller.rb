module Api
  module V1
    class CardsController < ApplicationController
      def create
        theme_id = params[:theme_id]
        card = Card.create!(count: params[:count], theme_id: theme_id)
        render json: { status: 200 }, status: :ok

        channel = "room_channel_#{params[:room_id]}"
        selected_cards = Card.where(theme_id: theme_id).pluck(:count)
        theme = Theme.find(theme_id)
        ActionCable.server.broadcast channel, { selected_cards: selected_cards, title: theme.title }
      end
    end
  end
end