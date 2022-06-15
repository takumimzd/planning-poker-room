class Theme < ApplicationRecord
  before_create -> { self.id = SecureRandom.uuid }
	
  belongs_to :room
  has_many :cards, dependent: :destroy
end
