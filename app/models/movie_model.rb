class MovieModel < ActiveRecord::Base

	require 'faraday'
	# require 'rest-client'

	# @url

	# def self.getData
	# 	response = RestClient(@url, { :content_type => :json, "Api-Key" => "" })
	# end

	# def self.retrieve_results(param)
	# 	@url = "http://api.tvmaze.com/search/shows?q=#{param}"
	# 	JSON.parse(MovieModel.getData)
	# end

	# @conn = Faraday.new(:url => 'http://api.tvmaze.com', :ssl => {:verify => false})


	def self.getData(myParam)
		# @conn = Faraday.new(:url => 'http://api.tvmaze.com')

		# @response = @conn.get do |req|                           # GET http://sushi.com/search?page=2&limit=100
  # 			req.url '/search/shows?q=#{myParam}'
  # 			req.headers['Content-Type'] = 'application/json'
		# end
	conn = Faraday.new(:url => "http://api.tvmaze.com")
		# response = Faraday.get 'http://sushi.com/nigiri/sake.json'
		response = conn.get "/search/shows?q=#{myParam}"     # GET http://sushi.com/nigiri/sake.json
		JSON.parse(response.body)
		# JSON.parse(@response.body)
	end

	def self.show(myParam)
		conn = Faraday.new(:url => "http://api.tvmaze.com")

		response = conn.get "/shows/#{myParam}"
		JSON.parse(response.body)
	end

	def self.showslist
		conn = Faraday.new(:url => "http://api.tvmaze.com")

		response = conn.get "/shows"
		JSON.parse(response.body)
	end

	def self.findepisode(myParam)
		conn = Faraday.new(:url => "http://api.tvmaze.com")

		response = conn.get "/shows/#{myParam}/episodes"
		JSON.parse(response.body)
	end

	def self.showcast(myParam)
		conn = Faraday.new(:url => "http://api.tvmaze.com")

		response = conn.get "/shows/#{myParam}/cast"
		JSON.parse(response.body)
	end
end
