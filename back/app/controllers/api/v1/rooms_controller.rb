module Api
  module V1
    class RoomsController < ApplicationController
      def show
        @room = Room.find(params[:id])
        @themes = @room.themes
      end

      def create
        room = Room.create!
        render json: { room_id: room.id, status: 200 }, status: :ok
      end
    end
  end
end
