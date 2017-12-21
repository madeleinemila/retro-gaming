Rails.application.routes.draw do

  get 'pages/new'

  root :to => 'pages#home'

  get '/home' => 'pages#home'
  get '/snaak' => 'pages#snake'
  get '/ping' => 'pages#pong'
  get '/roids' => 'pages#space_shooter'

  post '/roids/:score' => 'pages#space_shooter_update'
  post '/snaak/:score' => 'pages#snake_update'


  # mount ActionCable.server => '/snake/cable'

end
