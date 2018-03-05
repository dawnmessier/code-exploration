class SubjectsController < ApplicationController
    layout 'admin'

    #get
  def index
      @subjects = Subject.sorted
  end

  #get
  def show
      @subject = Subject.find(params[:id])
  end

  #get (display only)
  def new
      @subject = Subject.new
      @subject_count = Subject.count + 1
      @subjects = Subject.sorted
  end

  #post
  def create
      @subject = Subject.new(subject_params)
      if @subject.save
          flash[:notice] = "Subject created successfully"
          redirect_to(subjects_path)
      else
          @subject_count = Subject.count + 1
          @subjects = Subject.sorted
          render('new')
      end
  end

  #get (display only)
  def edit
      @subject = Subject.find(params[:id])
      @subject_count = Subject.count
  end

  #patch
  def update
      @subject = Subject.find(params[:id])
      if @subject.update_attributes(subject_params)
          flash[:notice] = "Subject updated successfully"
          redirect_to(subject_path(@subject))
      else
          @subject_count = Subject.count
          render('edit')
      end
  end

  #get (display only)
  def delete
      @subject = Subject.find(params[:id])
  end

  #delete
  def destroy
      @subject = Subject.find(params[:id])
      @subject.destroy
      flash[:notice] = "Subject '#{@subject.name}' destroyed successfully"
      redirect_to(subjects_path)
  end

  private

  def subject_params
      params.require(:subject).permit(:name, :position, :visible)
  end
end
