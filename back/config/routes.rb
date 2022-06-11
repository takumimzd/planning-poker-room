Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  namespace 'api' do
    namespace 'v1' do
      resources :rooms, only: %i(show create)
      resources :themes, only: %i(show create update)
      resources :cards, only: %i(create)
    end
  end
end