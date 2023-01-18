class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.integer :user_id
      t.integer :tea_range_id
      t.string :name
      t.string :flavour
      t.float :ice_level
      t.float :sweetness_level

      t.timestamps
    end
  end
end
