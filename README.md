# 说明

在 ckeditor 的基础上增加了自定义插件：超链接插件，图片上传插件，代码显示插件

## 安装

```ruby
gem 'kc_ckeditor',
  :github => "kc-train/kc_ckeditor",
  :tag    => "0.0.1"
```

然后执行:

    $ bundle


## 使用
import styles 到  `app/assets/stylesheets/application.scss:`

```scss
@import 'kc_ckeditor'
```

require Javascripts 到 `app/assets/javascripts/application.js:`

```js
//= require kc_ckeditor
```

Form helpers:  
```haml
= form_for @page do |form|
  = form.cktext_area :notes, :class => 'someclass', :ckeditor => {:language => 'zh-cn'}

  = form.cktext_area :content, :value => 'Default value', :id => 'sometext'

  = cktext_area :page, :info, :cols => 40, :ckeditor => {:uiColor => '#AADC6E'}
```

SimpleForm:  
```haml
  = form.input :content, :as => :ckeditor, :input_html => { :ckeditor => {:uiColor => '#AADC6E'} }
```
