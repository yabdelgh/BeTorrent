# -*- encoding: utf-8 -*-
# stub: aes_key_wrap 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "aes_key_wrap".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Tom Dalling".freeze]
  s.date = "2020-07-11"
  s.email = ["tom@tomdalling.com".freeze]
  s.homepage = "https://github.com/tomdalling/aes_key_wrap".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.4.20".freeze
  s.summary = "A Ruby implementation of AES Key Wrap, a.k.a RFC 3394, a.k.a NIST Key Wrap.".freeze

  s.installed_by_version = "3.4.20" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<test_bench>.freeze, ["~> 1.0"])
  s.add_development_dependency(%q<gem-release>.freeze, [">= 0"])
  s.add_development_dependency(%q<simplecov>.freeze, ["< 0.18"])
end
