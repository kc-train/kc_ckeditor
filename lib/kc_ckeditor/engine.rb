module KcCkeditor
  class Engine < ::Rails::Engine

    initializer 'kc_ckeditor.assets.precompile' do |app|
      %w(stylesheets javascripts images).each do |sub|
        app.config.assets.paths.unshift root.join('assets', sub).to_s
      end
      app.config.assets.precompile += %w( ckeditor/* )
    end

  end
end
