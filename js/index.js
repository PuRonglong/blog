//图片添加materialCss库样式
$('img').addClass('materialboxed');

var $config = {
	url                 : '', // 网址，默认使用 window.location.href
	source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
	title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
	description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
	image               : '', // 图片, 默认取网页中第一个img标签
	sites               : ['weibo','wechat','qq','qzone', 'douban'], // 启用的站点
	disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
	wechatQrcodeTitle   : "微信扫一扫：分享", // 微信二维码提示文字
	wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>便可分享</p>',
};

$('.social-share').share($config);
