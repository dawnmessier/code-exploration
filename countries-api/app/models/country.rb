class Country < ApplicationRecord
    scope :sortedName, lambda {order("name ASC")}
    scope :sortedCode, lambda {order("code ASC")}

    validates :name, :presence => true
    validates :code, :presence => true, :length => { :maximum => 2 }, :uniqueness => true
end
