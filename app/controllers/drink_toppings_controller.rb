class DrinkToppingsController < ApplicationController
    #skip_before_action :authorize, only: [:create]

    def index
        drink_toppings = DrinkTopping.all
        render json: drink_toppings, status: :ok
    end

    def show
        drink_topping = DrinkTopping.find_by(id: params[:id])
        render json: drink_topping, status: :ok
    end

    def create
        drink_topping = DrinkTopping.create!(drink_topping_params)
        render json: drink_topping, status: :created
    end

    def update
        drink_topping = DrinkTopping.find_by(id: params[:id])
        updated_drink_topping = drink_topping.update!(drink_topping_params)
        render json: updated_drink_topping, status: :accepted
    end

    def delete
        drink_topping = DrinkTopping.find_by(id: params[:id])
        drink_topping.destroy
        head :no_content
    end


    private

    def drink_topping_params
        params.permit(:drink_id, :topping_id)
    end

end
