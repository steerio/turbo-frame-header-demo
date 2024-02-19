class HomeController < ApplicationController
  before_action :set_frame

  protected

  def set_frame
    @frame = request.headers['HTTP_TURBO_FRAME']
  end
end
