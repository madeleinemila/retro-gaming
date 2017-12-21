Rails.application.routes.draw do

  get 'pages/new'

  root :to => 'pages#home'

  get '/home' => 'pages#home'
  get '/snake' => 'pages#snake'
  get '/pong' => 'pages#pong'
  get '/space' => 'pages#space_shooter'

  post '/space/:score' => 'pages#space_shooter_update'
  post '/snake/:score' => 'pages#snake_update'


  # mount ActionCable.server => '/snake/cable'

end
