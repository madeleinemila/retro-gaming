Rails.application.routes.draw do

  get 'pages/new'

  root :to => 'pages#home'

  get '/home' => 'pages#home'
  get '/snake' => 'pages#snake'
  get '/pong' => 'pages#pong'

  mount ActionCable.server => '/snake/cable'

end
