# frozen_string_literal: true

class StickersComponent < ViewComponent::Base
  def initialize
    @stickers = [
      "octocat-ben",
      "calvin-ben",
      "ruby",
      "rails",
      "35mm",
      "arduino",
      "arduino-logo",
      "coffee",
      "raspberry-pi",
      "raspberry-pi-2",
      "batman",
      "deadpool",
      "death-of-rats",
      "octocat",
      "github",
      "benchy",
      "3d-print-1",
      "3d-print-2",
      "camera",
      "sx-70",
      "keyboard-left",
      "keyboard-right",
    ]
  end

  def stickers
    array = [:layout_1, :layout_2, :layout_3, :layout_4]
    res = []
    list_of_stickers.shuffle.each_slice(2) do |img1, img2|
      m = array.sample
      res << send(m, img1, img2)
    end

    safe_join(res).html_safe
  end

  private

  def list_of_stickers
    @stickers.map do |sticker|
      image_tag("stickers/#{sticker}", random_image_params)
    end
  end

  def random_image_params
    {
      style: "--rotate: #{rand(-60..60)}deg; --x-position: #{rand(-20..20)}px; z-index: #{rand(2..15)};",
      class: "sticker",
    }
  end

  def layout_1(img1, img2)
    safe_join([
      tag.div(img1, class: "sticker-grid-item sticker-grid-wide"),
      tag.div(img2, class: "sticker-grid-item sticker-grid-wide"),
    ]).html_safe
  end

  def layout_2(img1, img2)
    arr = [img2, nil].shuffle
    safe_join([
      tag.div(img1, class: "sticker-grid-item sticker-grid-wide"),
      tag.div(arr.pop, class: "sticker-grid-item sticker-grid-narrow"),
      tag.div(arr.pop, class: "sticker-grid-item sticker-grid-narrow"),
    ]).html_safe
  end

  def layout_3(img1, img2)
    arr = [img2, nil].shuffle
    safe_join([
      tag.div(arr.pop, class: "sticker-grid-item sticker-grid-narrow"),
      tag.div(img1, class: "sticker-grid-item sticker-grid-wide"),
      tag.div(arr.pop, class: "sticker-grid-item sticker-grid-narrow"),
    ]).html_safe
  end

  def layout_4(img1, img2)
    arr = [img2, nil].shuffle
    safe_join([
      tag.div(arr.pop, class: "sticker-grid-item sticker-grid-narrow"),
      tag.div(arr.pop, class: "sticker-grid-item sticker-grid-narrow"),
      tag.div(img1, class: "sticker-grid-item sticker-grid-wide"),
    ]).html_safe
  end

end
