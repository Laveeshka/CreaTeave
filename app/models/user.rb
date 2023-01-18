class User < ApplicationRecord
    #association macros
    has_many :drinks, dependent: :destroy
    has_many :tea_ranges, through: :drinks
    
    has_secure_password #enables password encryption with BCrypt
    validates :username, presence: true, uniqueness: true
end
