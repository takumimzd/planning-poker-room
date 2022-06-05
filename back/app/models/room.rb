class Room < ApplicationRecord
  has_many :themes, dependent: :destroy
end
