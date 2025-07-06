// 当滑动大于等于300像素的滚轮条时候，导航栏会出现，同理可以证明
window.addEventListener('scroll', () => {
	// 判断
	document.documentElement.scrollTop > 60 ? document.querySelector('.a').style.top = 0 : document
		.querySelector('.a').style.top = '-220px'
})

//  获取变量
const li_one = document.querySelector('.a nav .left #pageNav a:first-child li')
// 首隐形nav的首页点击事件
li_one.addEventListener('click', () => {
	// 普通刷新，但是登录界面那块也会被刷掉，后期需要配合Ajax进行数据筛选以防不被刷掉
	location.reload()
	// 滚轮条上升到顶部
	document.documentElement.scrollTo({
		top: 0
	})
})

// 
function close() {
	document.querySelector('.overlay').style.display = 'none'

	document.querySelector('body').style.overflow = 'auto'

}
document.querySelector('.overlay .white-area #x').addEventListener('click', close)

document.querySelector('.header .nav .right .icon-bianzu15').addEventListener('click', function() {

	document.querySelector('.overlay').style.display = 'block'

	// 滚动条隐藏
	document.querySelector('body').style.overflow = 'hidden'

})

document.querySelector('.a nav .right .icon-bianzu15').addEventListener('click', function() {

	document.querySelector('.overlay').style.display = 'block'

	document.querySelector('body').style.overflow = 'hidden'

})