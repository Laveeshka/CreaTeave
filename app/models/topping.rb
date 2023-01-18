class Topping < ApplicationRecord
    #association macros
    has_many :drink_toppings
    has_many :drinks, through: :drink_toppings

    #validations
    validates :name, presence: true, uniqueness: true, inclusion: {in: ["Pearls", "Herbal Jelly", "Coconut Jelly", "Rainbow Jelly", "Blueberry Popping Pearls", "Strawberry Popping Pearls", "Custard", "Oreo", "Raspberry Popping Pearls"]}
end
