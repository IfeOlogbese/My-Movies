class MoviesController < ApplicationController

  def index
  	@results = MovieModel.getData(params[:search_name])
  	@results = @results.paginate(:page => params[:page], :per_page => 6)
  end

  def shows
  	@results = MovieModel.showslist

  	@results = @results.paginate(:page => params[:page], :per_page => 6)
  end

  def show
  	@result = MovieModel.show(params[:id])
  	@episodes = MovieModel.findepisode(params[:id]).sort_by { |h| h[:id] }.reverse!.take(3)
  	@casts = MovieModel.showcast(params[:id]).take(6)
  end

end
