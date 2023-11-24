# -*- encoding: utf-8 -*-
# stub: primer_view_components 0.13.2 ruby lib

Gem::Specification.new do |s|
  s.name = "primer_view_components".freeze
  s.version = "0.13.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["GitHub Open Source".freeze]
  s.date = "2023-10-25"
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
end
