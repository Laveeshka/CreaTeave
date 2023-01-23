class ToppingsController < ApplicationController
    skip_before_action :authorize

    def index
        toppings = Topping.all 
        render json: toppings, status: :ok
    end

end
