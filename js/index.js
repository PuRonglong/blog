//图片添加materialCss库样式
$('img').addClass('materialboxed');

// 分享组件配置
var $config = {
	// url                 : '', // 网址，默认使用 window.location.href
	// source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
	// title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
	// description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
	// image               : '', // 图片, 默认取网页中第一个img标签
	sites               : ['weibo','qq','qzone', 'douban'], // 启用的站点
	disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
	wechatQrcodeTitle   : "微信扫一扫：分享", // 微信二维码提示文字
	wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>便可分享</p>',
};

$('.social-share').share($config);

//图片延迟加载
var num = document.getElementsByTagName('img').length;
var img = document.getElementsByTagName("img");
var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
lazyload(); //页面载入完毕加载可视区域内的图片
window.onscroll = lazyload;
function lazyload() { //监听页面滚动事件
    var seeHeight = document.documentElement.clientHeight; //可见区域高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
    for (var i = n; i < num; i++) {
    	//如果图片距离顶部的高度小于可见区域高度加上滚动的高度
        if (img[i].offsetTop-300 < seeHeight + scrollTop) {
            if (img[i].getAttribute("src") == "") {
                img[i].src = img[i].getAttribute("data-src");
            }
            n = i + 1;
        }else{
            
        }
    }
}
