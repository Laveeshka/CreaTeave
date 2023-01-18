class Drink < ApplicationRecord
  #association macros
  belongs_to :user
  belongs_to :tea_range
  has_many :drink_toppings, dependent: :destroy
  has_many :toppings, through: :drink_toppings

  #validations
  validates :name, presence: true
  validates :user_id, presence: true
  validates :tea_range_id, presence: true
  validates :ice_level, numericality: true, inclusion: {in: [0, 0.5, 1]}
  validates :sweetness_level, numericality: true, inclusion: {in: [0, 0.25, 0.5, 0.75, 1]}
  validate :flavour_must_fall_within_list_according_to_tea_range
  validate :not_more_than_three_toppings_per_drink

  def flavour_must_fall_within_list_according_to_tea_range
    acceptable_flavours = flavours(self.tea_range.name) #returns array of permissible flavours
    unless acceptable_flavours.any?(flavour)
      errors.add(:flavour, "Flavour is not part of the acceptable range, #{acceptable_flavours}")
    end
  end

  def flavours(range_name)
    case range_name
    when "Frozen"
      ["Chocolate", "Strawberry", "Grapefruit", "Taro"]
    when "Fruity"
      ["Apple", "Mango", "Lychee", "Strawberry", "Peach"]
    when "Milky"
      ["Chocolate", "Coconut", "Thai", "Taro"]
    when "Fresh"
      ["Earl Grey", "Jasmine", "Oolong"]
    else
      []
    end
  end

  #write a custom validation so that we cannot assign more than 3 toppings to a drink
  def not_more_than_three_toppings_per_drink
    drink_toppings_count = self.drink_toppings.count
    unless drink_toppings_count < 3
        errors.add(:drink_toppings, "A drink cannot have more than 3 toppings!")
    end
  end

end
