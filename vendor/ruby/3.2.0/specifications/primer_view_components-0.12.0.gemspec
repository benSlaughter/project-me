# -*- encoding: utf-8 -*-
# stub: primer_view_components 0.12.0 ruby lib

Gem::Specification.new do |s|
  s.name = "primer_view_components".freeze
  s.version = "0.12.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["GitHub Open Source".freeze]
  s.date = "2023-10-17"
  s.email = ["opensource+primer_view_components@github.com".freeze]
  s.homepage = "https://github.com/primer/view_components".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.6.0".freeze)
  s.rubygems_version = "3.4.10".freeze
  s.summary = "ViewComponents for the Primer Design System".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<actionview>.freeze, [">= 5.0.0"])
  s.add_runtime_dependency(%q<activesupport>.freeze, [">= 5.0.0"])
  s.add_runtime_dependency(%q<octicons>.freeze, [">= 18.0.0"])
  s.add_runtime_dependency(%q<view_component>.freeze, [">= 3.1", "< 4.0"])
  s.add_development_dependency(%q<allocation_stats>.freeze, ["~> 0.1"])
  s.add_development_dependency(%q<allocation_tracer>.freeze, ["~> 0.6.3"])
  s.add_development_dependency(%q<benchmark-ips>.freeze, ["~> 2.8.4"])
  s.add_development_dependency(%q<capybara>.freeze, ["~> 3.39.2"])
  s.add_development_dependency(%q<cuprite>.freeze, ["~> 0.14.3"])
  s.add_development_dependency(%q<erb_lint>.freeze, ["~> 0.4.0"])
  s.add_development_dependency(%q<erblint-github>.freeze, ["= 0.4.0"])
  s.add_development_dependency(%q<listen>.freeze, ["~> 3.0"])
  s.add_development_dependency(%q<matrix>.freeze, ["~> 0.4.2"])
  s.add_development_dependency(%q<minitest>.freeze, ["~> 5.0"])
  s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
  s.add_development_dependency(%q<pry>.freeze, [">= 0"])
  s.add_development_dependency(%q<rubocop>.freeze, ["= 1.13.0"])
  s.add_development_dependency(%q<rubocop-github>.freeze, ["~> 0.16.0"])
  s.add_development_dependency(%q<rubocop-performance>.freeze, ["~> 1.7"])
  s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.21.2"])
  s.add_development_dependency(%q<simplecov-console>.freeze, ["~> 0.9.1"])
  s.add_development_dependency(%q<sprockets>.freeze, [">= 0"])
  s.add_development_dependency(%q<sprockets-rails>.freeze, [">= 0"])
  s.add_development_dependency(%q<thor>.freeze, [">= 0"])
  s.add_development_dependency(%q<timecop>.freeze, [">= 0"])
  s.add_development_dependency(%q<yard>.freeze, ["~> 0.9.25"])
end
