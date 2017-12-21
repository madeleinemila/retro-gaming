class PagesController < ApplicationController

  def home
  end

  def snake
  end

  def space_shooter
    @high_score = Score.first.roids
  end

  def space_shooter_update
    high_score = Score.first
    high_score.update :roids => params[:score]
  end


end
