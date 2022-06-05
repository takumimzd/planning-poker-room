module Api
  module V1
    class ThemesController < ApplicationController
      def create
        theme = Theme.create!(title: params[:title], room_id: params[:room_id])
        render json: { status: 200 }, status: :ok

        channel = "room_channel_#{params[:room_id]}"
        ActionCable.server.broadcast channel, { selected_card: [1,2,3], title: theme.title }
      end
    end
  end
end