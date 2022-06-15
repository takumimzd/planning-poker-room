Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  namespace 'api' do
    namespace 'v1' do
      resources :rooms, only: %i(show create), :format => 'json'
      resources :themes, only: %i(show create update), :format => 'json'
      resources :cards, only: %i(create), :format => 'json'
    end
  end
end