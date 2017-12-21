Rails.application.routes.draw do

  get 'pages/new'

  root :to => 'pages#home'

  get '/home' => 'pages#home'
  get '/snake' => 'pages#snake'
  get '/pong' => 'pages#pong'
  get '/space' => 'pages#space_shooter'


  # mount ActionCable.server => '/snake/cable'

end
