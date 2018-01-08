class Score < ApplicationRecord
  validates :snaak, :numericality => { :greater_than_or_equal_to => :snaak_was }, :on => :update
  validates :roids, :numericality => { :greater_than_or_equal_to => :roids_was }, :on => :update
end
