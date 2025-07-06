// 
const ul_li = document.querySelector('.range-products ul')

const range_products_array = [{
	"img": "img/电子书-目录.svg",
	"name": "电子书数据库",
	"word": "电子书资源库配有海量资源、听书、解说书、课程等优质资源，丰富管内数字资源量。",
	"imgOne": "img/方向粗圆箭头-向右.svg",
	"id": "#h"
}, {
	"img": "img/电子书屋.svg",
	"name": "职工电子书屋",
	"word": "不局限于数字阅读，搭配有声资源，智能阅读功能、特色阅读活动等，丰富职工精神文化生活。",
	"imgOne": "img/方向粗圆箭头-向右.svg",
	"id": "#i"
}, {
	"img": "img/数字平台.svg",
	"name": "数字阅读平台",
	"word": "企业专属线上数字阅读平台，优质电子书资源+智能阅读功能+定制化阅读活动，赋能职工学习成长。",
	"imgOne": "img/方向粗圆箭头-向右.svg",
	"id": "#j"
}, {
	"img": "img/图书馆2.svg",
	"name": "智慧图书馆",
	"word": "通过海量正版数字资源与智能化软硬件相结合，打造多场景的智慧数字化阅读新模式。",
	"imgOne": "img/方向粗圆箭头-向右.svg",
	"id": "#k"
}, {
	"img": "img/会员1.svg",
	"name": "企业会员",
	"word": "全新升级版企业阅读模式解决方案，阅读资源量增加50%，书籍品质全面升级，职工选择不受限。",
	"imgOne": "img/方向粗圆箭头-向右.svg",
	"id": "#l"
}]

ul_li.innerHTML = range_products_array.map(item => {

	return `<li class="liOne">
		<img class="picOne" src="${item.img}">
	    <p class="nameOne" id="nameOne">${item.name}</p>
		<p class="wordOne" id="wordOne">${item.word}</p>
		<a href="${item.id}">
			<img class="picTwo" id="picTwo" src="${item.imgOne}">
		</a>
		 
	</li>`

}).join('')