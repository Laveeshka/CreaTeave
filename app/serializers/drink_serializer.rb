class DrinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :flavour, :ice_level, :sweetness_level
  has_one :user
  has_one :tea_range
  has_many :toppings
end
