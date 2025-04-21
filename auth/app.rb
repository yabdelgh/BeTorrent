require 'sinatra'
require 'sinatra/reloader' if development?
require 'omniauth'
require 'omniauth-google-oauth2'
require 'dotenv/load'
require 'jwt'

# For newer OmniAuth versions (2.0+)
OmniAuth.config.allowed_request_methods = [:post, :get]

class AuthApp < Sinatra::Base
  configure do
    enable :sessions
    set :session_secret, ENV['SESSION_SECRET']
  end
  
  # Register the middleware BEFORE defining any routes
  use OmniAuth::Builder do
    provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], {
      scope: 'email,profile',
      prompt: 'select_account'
    }
  end
  
  # OAuth callback
  get '/auth/google_oauth2/callback' do
    auth = request.env['omniauth.auth']
    
    # Extract user info
    user_info = {
      uid: auth['uid'],
      email: auth['info']['email'],
      name: auth['info']['name'],
      image: auth['info']['image']
    }
    
    session[:user_id] = user_info[:uid]
    session[:user_info] = user_info
    
    halt 401, {error: "Unauthorized"}.to_json unless session[:user_id]
    # user = User.find_by(uid: session[:user_id])
    
    # Generate a token with JWT
    token = JWT.encode(
      {
        user_id: user_info[:uid],
        email: user_info[:email],
        name: user_info[:name],
        exp: Time.now.to_i + 10  # 1 hour expiration
      },
      ENV['JWT_SECRET'],
      'HS256'
    )
    
    # Create a token record
    # auth_token = AuthToken.create!(
    #   user_id: user.id,
    #   token: SecureRandom.hex(16),  # token identifier
    #   jwt: token,
    #   expires_at: Time.now + 3600
    # )
    
    # {
    #   token: token,
    #   token_id: auth_token.token,
    #   expires_at: auth_token.expires_at
    # }.to_json
    redirect "http://localhost:4000/auth#token=#{token}"
  end
 
  # Verification endpoint
  get '/verify' do
  content_type :json

  # Extract the Authorization header
  auth_header = request.env['HTTP_AUTHORIZATION']

  if auth_header && auth_header.start_with?('Bearer ')
    token = auth_header.split(' ').last

    begin
      # Decode the token with the same secret and algorithm
      decoded_token = JWT.decode(
        token,
        ENV['JWT_SECRET'],
        true, # Verify the signature
        { algorithm: 'HS256' }
      )

      # Token is valid - return user data
      { authenticated: true, user: decoded_token.first }.to_json

    rescue JWT::ExpiredSignature
      status 401
      { error: 'Authentication failed: Token has expired.' }.to_json

    rescue JWT::DecodeError => e
      status 401
      { error: "Authentication failed: Invalid token. #{e.message}" }.to_json
    end

  else
    status 401
    { error: 'Authentication failed: Missing or malformed Authorization header.' }.to_json
  end
end
  
  # get '/debug/session' do
  #   content_type :json
  #   session.to_h.to_json
  # end
  
end

if __FILE__ == $0
  AuthApp.run! host: 'localhost', port: 3000 
end
