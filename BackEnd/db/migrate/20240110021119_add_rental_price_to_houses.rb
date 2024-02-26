class AddRentalPriceToHouses < ActiveRecord::Migration[7.1]
  def change
    add_column :houses, :rental_price, :float
  end
end
