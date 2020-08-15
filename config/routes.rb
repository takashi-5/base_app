Rails.application.routes.draw do
  # API path以外はindex#indexを返し、frontend appでhandlingする
  get '*any', to: 'index#index'
  root to: 'index#index'
end
