class Api::V1::CompaniesController < Api::V1::BaseController
  def index
    respond_with Company.all
  end

  def create
    respond_with :api, :v1, Company.create(company_params)
  end

  def destroy
    respond_with Company.destroy(params[:id])
  end

  def update
    company = Company.find(params["id"])
    company.update_attributes(company_params)
    respond_with company, json: сompany
  end

  private

    def company_params
      params.require(:company).permit(:id, :name, :earnings, :parent_id)
    end
end  