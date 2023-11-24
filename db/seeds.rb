# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
title = "Remote working: Working from cafe, a success story."
text = """Today I had a morning that was difficult to work from home.
I was unable to focus, and it was creating an environment in which I was unable to efficiently or productively work.
I found myself fleeting from task to task making no progress, and even to the point that when making a cup of tea, I ended up in the garden adding compost to my beloved Acer.
So I had gone off the rails, and as a sufferer of impostor syndrome I started to get stressed, and this just made matters worse, as I knew that later I would be out of the house for a couple of hours on a family errand. 
But this is where the success comes in, and I'm currently sitting in a cafe, with a good coffee on a lovely sunny day. In the first half hour, I feel I have completed more work than I did in my entire stress and anxiety filled morning, so much so that I decided to write this short post.
We all have bad days. I improved today with a change of location."""

article = Article.find_or_create_by!(title: title, body: text)

unless article.photo.attached?
  image = Rails.root.join('app', 'assets', 'images', 'broken.jpeg')
  article.photo.attach(io: File.open(image), filename: 'image.jpeg')
end

article = Article.find_or_create_by!(title: "New article", body: "this is a test article!")

unless article.photo.attached?
  image = Rails.root.join('app', 'assets', 'images', 'broken.jpeg')
  article.photo.attach(io: File.open(image), filename: 'image.jpeg')
end