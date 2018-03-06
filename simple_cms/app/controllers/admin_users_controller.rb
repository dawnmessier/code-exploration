class AdminUsersController < ApplicationController
    layout 'admin'

    before_action :confirm_logged_in

  def index
      @admin_users = AdminUser.sorted
  end

  def new
      @admin_user = AdminUser.new
  end

  def create
      @admin_user = AdminUser.new(admin_user_params)
      if @admin_user.save
          flash[:notice] = "New admin user created!"
          redirect_to(admin_users_path)
      else
          flash[:alert] = "Unable to create new admin user"
          render('new')
      end
  end

  def edit
      @admin_user = AdminUser.find(params[:id])
  end

  def update
      @admin_user = AdminUser.find(params[:id])
      if @admin_user.update_attributes(admin_user_params)
          flash[:notice] = "New admin user updated!"
          redirect_to(admin_users_path)
      else
          flash[:alert] = "Unable to update admin user"
          render('edit')
      end
  end

  def delete
      @admin_user = AdminUser.find(params[:id])
  end

  def destroy
      @admin_user = AdminUser.find(params[:id])
      @admin_user.destroy
      flash[:notice] = "Successfully deleted admin user '#{@admin_user.last_name}'"
      redirect_to(admin_users_path)
  end

  private

  def admin_user_params
      params.require(:admin_user).permit(:first_name, :last_name, :email, :username, :password)
  end
end