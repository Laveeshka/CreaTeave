class TeaRange < ApplicationRecord
    #association macros
    has_many :drinks
    has_many :users, through: :drinks

    validates :name, inclusion: { in: ["Fruity", "Milky", "Frozen", "Fresh"], message: "%{value} is not a valid tea range" }, uniqueness: true
end
