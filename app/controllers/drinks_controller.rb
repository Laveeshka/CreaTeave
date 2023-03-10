class DrinksController < ApplicationController
    #skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(id: session[:user_id])
        tea_range = TeaRange.find_by(id: params[:tea_range_id])
        drink = Drink.create!(user: user, tea_range: tea_range, name: params[:name], flavour: params[:flavour], ice_level: params[:ice_level], sweetness_level: params[:sweetness_level])
        render json: drink, status: :created
    end

    def index
        user = User.find_by(id: session[:user_id])
        user_drinks = user.drinks
        render json: user_drinks, status: :ok
    end

    def show
        drink = Drink.find_by(id: params[:id])
        render json: drink, status: :ok
    end

    def destroy
        drink = Drink.find_by(id: params[:id])
        drink.destroy
        # head :no_content
        render json: {message: "Successfully deleted drink"}, status: :ok
    end

    def update
        drink = Drink.find_by(id: params[:id])
        tea_range = TeaRange.find_by(id: params[:tea_range_id])

        drink.update!(tea_range: tea_range, name: params[:name], flavour: params[:flavour], ice_level: params[:ice_level], sweetness_level: params[:sweetness_level])
        render json: drink, status: :ok
    end

    private

    def drink_params
        params.permit(:tea_range, :name, :flavour, :ice_level, :sweetness_level)
    end

end
