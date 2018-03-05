class DemoController < ApplicationController
    layout 'application'
    
  def index
      render('index')
  end

  def hello
      @array = [1,2,3,4]
      @id = params['id']
      @page = params[:page]
      render('hello')
  end

  def other_hello
      redirect_to(:action => 'hello')
  end

  def lynda
      redirect_to('http://www.lynda.com')
  end
end
