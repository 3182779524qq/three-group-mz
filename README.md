# threemz

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
================================================================================================================================
/**
 * @author: chen fu jian 3182779524@qq.com
 * Created on 18/12/14.
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(function () {
			return factory(root);
		});
	} else if (typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.mlazy = factory(root);
	}
})(this, function (root) {

	'use strict';

	var imgList = [],  // 页面所有img元素集合
		delay,   // setTimeout 对象
		offset,  //偏移量，用于指定图片距离可视区域多少距离，进行加载
		lazyTime,  // 延迟载入时间
		_selector; // 选择器 默认为 .m-lazyload
	imgList=document.getElementsByTagName('img');
	console.log(imgList)
	function _isShow(el) {
		console.log("1")
		var coords = el.getBoundingClientRect();
		return ( (coords.top >= 0 && coords.left >= 0 && coords.top) <= (root.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
		console.log("1")
	}

	function _loadImage() {
		console.log("1")
		imgList=document.getElementsByTagName('img');
		for(var i=0; i<imgList.length;i++) {
		console.log("6")
			
			var ele = imgList[i];
			if (_isShow(ele)) {
				ele.src = ele.getAttribute('data-src');
				ele.className = ele.className.replace(new RegExp("(\\s|^)" + _selector.substring(1, _selector.length) + "(\\s|$)"), " ");
//				imgList.splice(i, 1);
			}
		}
		console.log("2")
		
	}

	function _delay() {
		clearTimeout(delay);
		delay = setTimeout(function () {
			_loadImage();
		}, lazyTime);
		console.log("3")
		
	}

	function mlazy(selector, options) {
		var defaults = options || {};
		offset = defaults.offset || 100;
		lazyTime = defaults.lazyTime || 100;
		_selector = selector || '.m-lazyload';
		this.getNode();
		_delay();//避免首次加载未触发touch事件,主动触发一次加载函数
		if (defaults.iScroll) {
			defaults.iScroll.on('scrollEnd', _delay);
		} else {
			root.addEventListener('scroll', _delay, false);
		}
		console.log("4")
		
	}

	mlazy.prototype.getNode = function () {
		imgList = [];
		var nodes = document.querySelectorAll(_selector);
		for (var i = 0, l = nodes.length; i < l; i++) {
			imgList.push(nodes[i]);
		}
		console.log("5")
		
	};

	return mlazy;
});
