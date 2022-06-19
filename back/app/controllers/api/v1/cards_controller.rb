module Api
  module V1
    class CardsController < ApplicationController
      before_action :set_params
      before_action :set_theme
      before_action :set_channel

      def create
        card = Card.create!(count: @count, theme_id: @theme_id)
        selected_cards = Card.where(theme_id: @theme_id).pluck(:count)

        ActionCable.server.broadcast @channel,
        {
          selected_cards: selected_cards,
          title: @theme.title,
          theme_id: @theme.id
        }

        render json: { status: 200 }, status: :ok
      end

      private

      def set_params
        if params[:room_id].present?
          @room_id = params[:room_id]
        end

        if params[:theme_id].present?
          @theme_id = params[:theme_id]
        end

        if params[:count].present?
          @count = params[:count]
        end
      end

      def set_theme
        if params[:theme_id].present?
          @theme = Theme.find(params[:theme_id])
        end
      end

      def set_channel
        @channel = "room_channel_#{params[:room_id]}"
      end
    end
  end
end