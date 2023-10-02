class GreetsController < ApplicationController
  def index
    @random_greeting = Greet.order('RANDOM()').first
    render json: {greeting: @random_greeting&.message}
  end
end
