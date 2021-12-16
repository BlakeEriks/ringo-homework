class Tweet < ApplicationRecord
    validates :title, presence: true, unique: true
    validates :content, presence: true
    validates :author, presence: true
end