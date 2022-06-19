module Api
  module V1
    class ThemesController < ApplicationController
      before_action :set_params
      before_action :set_room
      before_action :set_theme
      before_action :set_channel

      def show
        selected_cards = Card.where(theme_id: @theme_id).pluck(:count)

        ActionCable.server.broadcast @channel,
        { 
          selected_cards: selected_cards || [],
          title: @theme.count.present? ? "" : @theme.title,
          theme_id: @theme.count.present? ? "" : @theme.id
        }

        render json: { status: 200 }, status: :ok
      end
      
      def create
        theme = Theme.create!(title: @title, room_id: @room_id)

        ActionCable.server.broadcast @channel,
        {
          selected_cards: [],
          title: theme.title,
          theme_id: theme.id
        }

        render json: { status: 200 }, status: :ok
      end

      def update
        @theme.update!(count: @count)

        ActionCable.server.broadcast @channel,
        {
          selected_cards: [],
          title: "",
          theme_id: "",
          total_count: @room.themes.sum(:count)
        }
        render json: { status: 200 }, status: :ok
      end

      def destroy_cards

        cards = Card.where(theme_id: @theme_id)
        cards.delete_all

        ActionCable.server.broadcast channel,
        {
          selected_cards: [],
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

        if params[:id].present?
          @theme_id = params[:id]
        end

        if params[:title].present?
          @title = params[:title]
        end

        if params[:count].present?
          @count = params[:count]
        end
      end

      def set_room
        if params[:room_id].present?
          @room = Room.find(params[:room_id])
        end
      end

      def set_theme
        if params[:id].present?
          @theme = Theme.find(params[:id])
        end
      end

      def set_channel
        @channel = "room_channel_#{params[:room_id]}"
      end
    end
  end
end