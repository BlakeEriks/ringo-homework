# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Tweet.create({
  title: "Just found this",
  content: "the square of the hypotenuse is equal to the sum of the squares of the other two sides",
  author: "Pythagoras570"
})

Tweet.create({
  title: "I'm walkin' here",
  content: "Hey, I'm walkin' here!",
  author: "Nicky62"
})

Reply.create({
    author: "Yourmom69",
    content: "Lol you're an idiot",
    tweet_id: 1
})

Reply.create({
    author: "Yourmom68",
    content: "Great idea! you're a genius",
    tweet_id: 1
})