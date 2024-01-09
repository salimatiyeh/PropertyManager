Rails.application.routes.draw do
  get "api/users", to: "api/users#index"
  post "api/users", to: "api/users#create"
end
