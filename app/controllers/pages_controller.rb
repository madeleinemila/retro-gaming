class PagesController < ApplicationController

  def home
  end

  def snake
    @snaak_score = Score.first.snaak
  end

  def snake_update
    snake_score = Score.first
    snake_score.update :snaak => params[:score]
  end

  def space_shooter
    @high_score = Score.first.roids
  end

  def space_shooter_update
    high_score = Score.first
    high_score.update :roids => params[:score]
  end


end
