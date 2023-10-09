Rails.application.routes.draw do
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root pat'h route ("/")
  root 'root#index'


  get '/random_message', to: 'greets#index'
  resources :messages, only: [:index]
end
