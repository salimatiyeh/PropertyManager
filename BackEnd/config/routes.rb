Rails.application.routes.draw do

  # get "up" => "rails/health#show", as: :rails_health_check

  # namespace :api do
    # namespace :v1 do
      # resources :users
    # end
  # end
  get "api/users", to: "api/users#index"
  post "api/users", to: "api/users#create"
end
