class AddRoomIdToTheme < ActiveRecord::Migration[7.0]
  def change
    add_reference :themes, :room, foreign_key: true
    add_reference :cards, :theme, foreign_key: true
  end
end
