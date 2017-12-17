Rails.application.routes.draw do

  get 'pages/new'

  root :to => 'pages#home'

  get '/home' => 'pages#home'
  get '/snake' => 'pages#snake'

end
