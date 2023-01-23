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
        topping_id = Topping.find_by(name: params[:topping_name])
        drink_topping = DrinkTopping.create!(params[:drink_id], topping_id)
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
        params.permit(:drink_id, :topping_id, :topping_name)
    end

end
