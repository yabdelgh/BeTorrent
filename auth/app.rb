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
        exp: Time.now.to_i + 3600  # 1 hour expiration
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
  
  get '/debug/session' do
    content_type :json
    session.to_h.to_json
  end
  
end

# Run the application
if __FILE__ == $0
  AuthApp.run! host: 'localhost', port: 3000 
end
