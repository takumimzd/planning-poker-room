class ChangeCardForeignKeyTheme < ActiveRecord::Migration[7.0]
  def change
    change_column :cards, :theme_id, :string
    change_column :cards, :count, :float
    change_column :themes, :count, :float
  end
end
