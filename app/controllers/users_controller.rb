class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    #create a new user with strong params
    #throws RecordInvalid error if user is not successfully created and returns a JSON response with list of errors and a status of Not Found
    #when a user is created, their id is saved to the session hash with a user_id key
    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id 
        render json: new_user, status: :created
    end

    #retrieve the user with id matching user_id in the session hash
    #throws RecordNotFound error if the user is not found and returns a JSON response with an error message, and a status of 401 (Unauthorized)
    def show
        logged_in_user = User.find_by(id: session[:user_id])
        render json: logged_in_user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
