class CreateDrinkToppings < ActiveRecord::Migration[6.1]
  def change
    create_table :drink_toppings do |t|
      t.integer :drink_id
      t.integer :topping_id

      t.timestamps
    end
  end
end
