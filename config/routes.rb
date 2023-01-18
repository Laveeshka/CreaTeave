Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  #authentication routes
  post "/signup", to: "users#create" #for sign up
  get "/me", to: "users#show" #for auto-login
  post "/login", to: "sessions#create" #for login
  delete "/logout", to: "sessions#destroy" #for logout
end
