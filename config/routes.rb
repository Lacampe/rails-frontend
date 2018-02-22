Rails.application.routes.draw do
  root to: 'pages#home'
  get 'test', to: 'pages#test'
end
