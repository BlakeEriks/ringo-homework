class Tweet < ApplicationRecord
    has_many :replies
    validates :title, presence: true
    validates :content, presence: true
    validates :author, presence: true
end