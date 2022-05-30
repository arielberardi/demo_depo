class StoreController < ApplicationController
  include CurrentCart
  skip_before_action :authorize
  before_action :set_cart

  def index
    @page_title = 'The Book store'
    @products = Product.order(:title)
  end
end
