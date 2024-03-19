class PagesController < ApplicationController

  def home
  end

  def snake
    # NOTE: Decommissioned db in favor of local storage for demo deployment
    # @snaak_score = Score.first.snaak

    # respond_to do |format|
    #   format.html
    #   format.json { render json: @snaak_score }
    #  end
  end

  def snake_update
    # NOTE: Decommissioned db in favor of local storage for demo deployment
    # snake_score = Score.first
    # snake_score.update :snaak => params[:score]
  end

  def space_shooter
    # NOTE: Decommissioned db in favor of local storage for demo deployment
    # @roids_score = Score.first.roids

    # respond_to do |format|
      # format.html
      # format.json { render json: @roids_score }
    # end
  end

  def space_shooter_update
    # NOTE: Decommissioned db in favor of local storage for demo deployment
    # high_score = Score.first
    # high_score.update :roids => params[:score]
  end


end
