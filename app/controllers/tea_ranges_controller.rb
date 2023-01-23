class TeaRangesController < ApplicationController
    skip_before_action :authorize

    def index
        tea_ranges = TeaRange.all
        render json: tea_ranges, status: :ok
    end

end
