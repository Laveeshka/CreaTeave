# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🧹 Deleting data... 🧹"
User.destroy_all
TeaRange.destroy_all
Topping.destroy_all

puts "🌱 Seeding tea ranges... 🌱"
tr1 = TeaRange.create(name: "Fruity")
tr2 = TeaRange.create(name: "Fresh")
tr3= TeaRange.create(name: "Frozen")
tr4 = TeaRange.create(name: "Milky")

puts "🌱 Seeding toppings... 🌱"
t1 = Topping.create(name: "Pearls")
t2 = Topping.create(name: "Herbal Jelly")
t3 = Topping.create(name: "Coconut Jelly")
t4 = Topping.create(name: "Rainbow Jelly")
t5 = Topping.create(name: "Blueberry Popping Pearls")
t6 = Topping.create(name: "Strawberry Popping Pearls")
t7 = Topping.create(name: "Custard")
t8 = Topping.create(name: "Oreo")
t9 = Topping.create(name: "Raspberry Popping Pearls")

puts "🌱 Seeding users... 🌱"
u1 = User.create(username: "Ellie", password:"123", password_confirmation:"123")
u2 = User.create(username: "Emma", password:"456", password_confirmation:"456")

puts "🌱 Seeding drinks... 🌱"
d1 = Drink.create(user: u1, tea_range: tr1, name: "tropical sippy", flavour: "Mango", ice_level: 0.5, sweetness_level: 0.5)
d2 = Drink.create(user: u1, tea_range: tr3, name: "let it taro", flavour: "Taro", ice_level: 1, sweetness_level: 0.25)

puts "🌲 Finished seeding.. 🌲"