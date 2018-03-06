class Page < ApplicationRecord
    acts_as_list :scope => :subject

    has_many :sections
    belongs_to :subject, { :optional => false }
    has_and_belongs_to_many :admin_users

    scope :visible, lambda {where(:visible => true)}
    scope :invisible, lambda {where(:visible => false)}
    scope :sorted, lambda {order("position ASC")}
    scope :newest_first, lambda {order("created_at DESC")}
    scope :search, lambda {|query| where("name LIKE ?", "%#{(query)}%")}

    validates :name, :presence => true, :length => { :maximum => 255 }
    validates :permalink, :presence => true, :length => { :within => 3..255 }, :uniqueness => true

    # validates_presence_of :name
    # validates_length_of :name, :maximum => 255
    # validates_presence_of :permalink
    # validates_length_of :permalink, :within => 3..255
    # use presence_of with length_of to disallow spaces
    # validates_uniqueness_of :permalink
    # for unique values by subject use ":scope => :subject_id"
end
