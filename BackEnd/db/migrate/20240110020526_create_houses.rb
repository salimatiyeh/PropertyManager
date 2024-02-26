class CreateHouses < ActiveRecord::Migration[7.1]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :address
      t.integer :square_ft
      t.integer :rooms
      t.float :bathrooms
      t.boolean :occupied

      t.timestamps
    end
  end
end
