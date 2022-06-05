module Api
  module V1
    class ThemesController < ApplicationController
      before_action :set_params
      def create
        theme = Theme.create!(title: title)
        render json: { status: 200 }, status: :ok

        channel = "room_channel_#{params[:room_id]}"
        ActionCable.server.broadcast channel, { selected_card: [1,2,3], title: theme.title }
      end

      private

      def set_params
        title = params[:title] if params[:title].present?
      end
    end
  end
end