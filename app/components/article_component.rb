# frozen_string_literal: true

class ArticleComponent < ViewComponent::Base
  attr_reader :article, :parant

  def initialize(article:)
    @article = article
  end

  def article_type
    return :photo if article.photo.attached?
    :unknown
  end

  def photo
    content_tag(:div, photo_params) do
      image_tag(article.photo, class: "photo-image") +
      image_tag("photo", class: "photo-frame") +
      content_tag(:p, article.title, class: "photo-text")
    end
  end

  def photo_params
    {
      class: "photo-container",
      style: "--rotate: #{rand(-10..10)}deg; --x-position: #{rand(-30..30)}px; --scale: #{1}; z-index: #{rand(15..20)};",
    }
  end
end
