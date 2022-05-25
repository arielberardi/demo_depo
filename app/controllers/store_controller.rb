class StoreController < ApplicationController
  def index
    @page_title = 'The Book store'
    @products = Product.order(:title)
  end
end
