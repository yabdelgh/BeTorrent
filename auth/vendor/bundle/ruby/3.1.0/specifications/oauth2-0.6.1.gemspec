# -*- encoding: utf-8 -*-
# stub: oauth2 0.6.1 ruby lib

Gem::Specification.new do |s|
  s.name = "oauth2".freeze
  s.version = "0.6.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Michael Bleigh".freeze, "Erik Michaels-Ober".freeze]
  s.date = "2012-04-18"
  s.description = "A Ruby wrapper for the OAuth 2.0 protocol built with a similar style to the original OAuth gem.".freeze
  s.email = ["michael@intridea.com".freeze, "sferik@gmail.com".freeze]
  s.homepage = "http://github.com/intridea/oauth2".freeze
  s.rubygems_version = "3.4.20".freeze
  s.summary = "A Ruby wrapper for the OAuth 2.0 protocol.".freeze

  s.installed_by_version = "3.4.20" if s.respond_to? :installed_by_version

  s.specification_version = 3

  s.add_runtime_dependency(%q<faraday>.freeze, ["~> 0.7"])
  s.add_runtime_dependency(%q<multi_json>.freeze, ["~> 1.3"])
  s.add_runtime_dependency(%q<httpauth>.freeze, ["~> 0.1"])
  s.add_development_dependency(%q<multi_xml>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  s.add_development_dependency(%q<rdoc>.freeze, [">= 0"])
  s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
  s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
end
