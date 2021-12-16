class TweetsController < ApplicationController

    def index
        render json: {status: 200, tweets: Tweet.all}
    end

    def show
        render json: {status: 200, tweet: Tweet.find(params[:id])}
    end

end