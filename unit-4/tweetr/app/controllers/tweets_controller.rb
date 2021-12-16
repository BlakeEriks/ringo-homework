class TweetsController < ApplicationController

    def index
        render json: {status: 200, tweets: Tweet.all}
    end

    def show
        render json: {status: 200, tweet: Tweet.find(params[:id])}
    end

    def create
        tweet = Tweet.net(tweet_params)

        if tweet.save
            render json: {status: 201, tweet: tweet}
        else
            render json: {status: 422, tweet: tweet}
        end
    end

    private 

    def tweet_params
        params.required(:tweet).permit(:title, :content, :author)
    end

end