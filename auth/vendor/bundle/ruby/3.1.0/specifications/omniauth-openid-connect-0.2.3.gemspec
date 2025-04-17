# -*- encoding: utf-8 -*-
# stub: omniauth-openid-connect 0.2.3 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-openid-connect".freeze
  s.version = "0.2.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["John Bohn".freeze]
  s.date = "2015-12-09"
  s.description = "OpenID Connect Strategy for OmniAuth".freeze
  s.email = ["jjbohn@gmail.com".freeze]
  s.homepage = "https://github.com/jjbohn/omniauth-openid-connect".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.4.20".freeze
  s.summary = "OpenID Connect Strategy for OmniAuth".freeze

  s.installed_by_version = "3.4.20" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<omniauth>.freeze, ["~> 1.1"])
  s.add_runtime_dependency(%q<openid_connect>.freeze, ["~> 0.9.2"])
  s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.3"])
  s.add_development_dependency(%q<bundler>.freeze, ["~> 1.5"])
  s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
  s.add_development_dependency(%q<guard>.freeze, [">= 0"])
  s.add_development_dependency(%q<guard-minitest>.freeze, [">= 0"])
  s.add_development_dependency(%q<guard-bundler>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
  s.add_development_dependency(%q<pry>.freeze, [">= 0"])
  s.add_development_dependency(%q<coveralls>.freeze, [">= 0"])
  s.add_development_dependency(%q<faker>.freeze, [">= 0"])
end
