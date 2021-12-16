class TweetsController < ApplicationController

    def index
        render json: {status: 200, tweets: Tweet.all}
    end

    def show
        render json: {status: 200, tweet: Tweet.find(params[:id])}
    end

    def create
        tweet = Tweet.new tweet_params

        if tweet.save
            render json: {status: 201, tweet: tweet}
        else
            render json: {status: 422, tweet: tweet}
        end
    end

    def update
        tweet = Tweet.find params[:id]
        tweet.update tweet_params
        render json: {status: 200, tweet: tweet}
    end

    def destroy
        Tweet.destroy params[:id]
        render json: {status: 204}
    end

    private 

    def tweet_params
        params.required(:tweet).permit(:title, :content, :author)
    end

end