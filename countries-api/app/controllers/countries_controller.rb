class CountriesController < ApplicationController
    before_action :set_country, only: [:show, :update, :destroy]

    def search
        query = params[:q] || nil
        key = params[:key] || 'name'
        limit = params[:limit] || 10
        countries = []
        if key == 'code'
            countries = Country.where("code LIKE ?", "%#{(query)}%").limit(limit).select(:name, :code).sortedCode if query
        else
            countries = Country.where("name LIKE ?", "%#{(query)}%").limit(limit).select(:name, :code).sortedName if query
        end

        json_response(countries)
    end

  # GET /countries
  def index
    @countries = Country.sortedName
    json_response(@countries)
  end

  # POST /countries
  def create
    @countries = Country.create!(country_params)
    json_response(@countries, :created)
  end

  # GET /countries/:id
  def show
    json_response(@countries)
  end

  # PUT /countries/:id
  def update
    @countries.update(country_params)
    head :no_content
  end

  # DELETE /countries/:id
  def destroy
    @countries.destroy
    head :no_content
  end

  private

  def country_params
    # whitelist params
    params.permit(:name, :code)
  end

  def set_country
    @countries = Country.find(params[:id])
  end
end
