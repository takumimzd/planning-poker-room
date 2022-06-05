class CreateThemes < ActiveRecord::Migration[7.0]
  def change
    create_table :themes do |t|
      t.string :title
      t.integer :count

      t.timestamps
    end
  end
end
