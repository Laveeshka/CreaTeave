class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    #find existing user in db with the submitted username
    #authenticate user
    #on authenticated user, assign the user id to the user_id key in the session hash
    #render a JSON response with the existing user hash
    #on invalid authentication, render a JSON response with an appropriate error message and an unauthorized status
    def create
        existing_user = User.find_by(username: params[:username])
        if existing_user&.authenticate(params[:password])
            session[:user_id] = existing_user.id
            render json: existing_user, status: :created
        else
            render json: {errors: ["Invalid password or username"]}, status: :unauthorized
        end
    end

    #delete the user_id key and value from the session hash
    #then, return a JSON response with no content
    def destroy
        session.delete :user_id
        head :no_content
    end

end
