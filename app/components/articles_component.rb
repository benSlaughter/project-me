# frozen_string_literal: true

class ArticlesComponent < ViewComponent::Base
  attr_reader :articles

  def initialize(articles:)
    @articles = articles
  end

  def do_it
    article_list = []
    articles.each do |article|
      article_list << ArticleComponent.new(article: article)
    end

    safe_join(article_list.map { |p| render(p)})
  end
end
