class CountrySerializer < ActiveModel::Serializer
  attributes :name, :code, :url

  def url
      create_href(object)
  end

  private

  def create_href(object)
      'https://www.google.com/?hl=' + object.code
  end
end
