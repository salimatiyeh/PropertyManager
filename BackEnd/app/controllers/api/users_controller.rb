module Api
  class Api::UsersController < ApplicationController
    protect_from_forgery with: :null_session, only: [:create]
    def create
      @user = User.new(user_params)
      if @user.save
        render json: { user: @user }, status: :created
      else
        render json: { errors: @user.errors.full_messages }, status: :bad_request
      end
    end

    def index
      @users = User.all()
      render json: { message: 'It worked!!', users: @users}
    end

    def show
      @user = User.find(params[:id])
      render json: { user: @user }
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end
  end
end
