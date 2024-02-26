Rails.application.routes.draw do
  # Users
  get "api/users", to: "api/users#index"
  post "api/users", to: "api/users#create"
  get "api/users/:id", to: "api/users#show"
  # Houses
  post "api/houses", to: "api/houses#create"
  get "api/houses", to: "api/houses#index"

end
