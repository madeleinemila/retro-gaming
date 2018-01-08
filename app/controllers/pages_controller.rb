class PagesController < ApplicationController

  def home
  end

  def snake
    @snaak_score = Score.first.snaak

    respond_to do |format|
      format.html
      format.json { render json: @snaak_score }
     end
  end

  def snake_update
    snake_score = Score.first
    snake_score.update :snaak => params[:score]
  end

  def space_shooter
    @roids_score = Score.first.roids

    respond_to do |format|
      format.html
      format.json { render json: @roids_score }
     end
  end

  def space_shooter_update
    high_score = Score.first
    high_score.update :roids => params[:score]
  end


end
