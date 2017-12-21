class PagesController < ApplicationController

  def home
  end

  def snake
  end

  def space_shooter
    @score = Score.first.roids
  end

end
