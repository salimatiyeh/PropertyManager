module Api
  class Api::HousesController < ApplicationController
    # protect_from_forgery with: :null_session, only: [:create]
    def create
      @house = House.new(user_params)
      if @house.save
        render json: { house: @house }, status: :created
      else
        render json: { errors: @house.errors.full_messages }, status: :bad_request
      end
    end

    def index
      @houses = House.all()
      render json: { message: 'It worked!!', houses: @houses}
    end

    private

    def user_params
      params.require(:houses).permit(:name, :address, :square_ft, :rooms, :bathrooms, :occupied, :rental_price)
    end
  end
end
