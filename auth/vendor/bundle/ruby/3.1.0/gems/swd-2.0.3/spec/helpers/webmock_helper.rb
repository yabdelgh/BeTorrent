require 'webmock/rspec'

module WebMockHelper
  def mock_json(endpoint, response_file, options = {})
    endpoint = endpoint.to_s
    stub_request(:get, endpoint).with(
      request_for(options)
    ).to_return(
      response_for(response_file, options)
    )
    yield
    a_request(:get, endpoint).with(
      request_for(options)
    ).should have_been_made.once
  end

  private

  def request_for(options = {})
    request = {}
    request[:query] = options[:query]
    request
  end

  def response_for(response_file, options = {})
    response = {}
    response[:headers] = {
      'Content-Type': 'application/json'
    }
    response[:body] = File.new(File.join(File.dirname(__FILE__), '../mock_json', "#{response_file}.json"))
    if options[:status]
      response[:status] = options[:status]
    end
    response
  end
end

include WebMockHelper
WebMock.disable_net_connect!