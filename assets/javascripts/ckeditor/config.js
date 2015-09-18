CKEDITOR.editorConfig = function( config )
{
  config.toolbar = [
    { name: 'document', items: [ 'Source']},
    { name: 'insert', items: ['custom_image','custom_codesnippet']},
    { name: 'simplelinks', items: ['simple_link']},
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline','NumberedList', 'BulletedList'] },
		{ name: 'tools', items: [ 'Maximize' ] }
	];

  config.allowedContent =
      'p strong em u;' +
      'a[href,target];' +
      'ol ul li;' +
      'pre; code(language-*);' +
      'img(left,right)[!src,alt,width,height];';

  config.extraPlugins = 'simple_link,custom_codesnippet,custom_image';

  config.codeSnippet_theme = 'tomorrow-night';
  config.custom_codesnippet = {
      theme    : 'tomorrow_night'
  };
};
