Rails.application.routes.draw do
  root :to => 'public#index'
  
  resources :countries do
      get 'search', on: :collection
  end
end
