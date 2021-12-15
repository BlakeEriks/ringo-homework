# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Vehicle.create({name: 'Nebuchadnezzar', style: 'Spaceship'})

Character.create([
	{ name: "Neo", description: 'compelling description about this character', vehicle_id: 1 },
	{ name: "Trinity", description: 'compelling description about this character', vehicle_id: 1 },
	{ name: "Morpheus", description: 'compelling description about this character', vehicle_id: 1 },
	{ name: "Agent Smith", description: 'compelling description about this character', vehicle_id: 1 },
])