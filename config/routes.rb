Rails.application.routes.draw do
  get '/users/online', to: 'users#get_online_users'
  mount ActionCable.server => '/cable'
  
  resources :users do 
    resources :friendships
  end

  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
