module Api
  # module V1
    # class UsersController  < ActionController::API
    # class UsersController < ActionController::API
  class Api::UsersController < ApplicationController
    protect_from_forgery with: :null_session, only: [:create]
      def create
        @user = User.new(user_params)
        if @user.save
          render json: { message: 'User signed in successfully', user: @user }, status: :created
        else
          render json: { errors: @user.errors.full_messages }, status: :bad_request
        end

      end

      def index
        @users = User.all()
        render json: { message: 'It worked!!', users: @users}
      end

      private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email)
      end
    end
  # end
end
