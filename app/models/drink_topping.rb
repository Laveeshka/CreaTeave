class DrinkTopping < ApplicationRecord
    #association macros
    belongs_to :drink
    belongs_to :topping

    #validations
    validates :drink_id, presence: true
    validates :topping_id, presence: true
    validate :not_more_than_three_toppings_per_drink

    def not_more_than_three_toppings_per_drink
        num = DrinkTopping.where(drink_id: drink_id).count
        unless num < 3
            errors.add(:topping_id, "A drink cannot have more than 3 toppings!")
        end
      end
end
