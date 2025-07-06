// 页面滚轮事件
window.addEventListener('scroll', e => {
	// 
	e.preventDefault()
	// 
	document.documentElement.scrollTop <= 60 ? document.querySelector('.youcetu a:last-child').style
		.display =
		'none' : document.querySelector('.youcetu a:last-child').style.display = 'block'
})

//获取变量
const youcetu = document.querySelectorAll('.youcetu')
// 
for (let i = 0; i <= youcetu.length - 1; i++) {
	// 具体到...事件
	youcetu[i].addEventListener('click', e => {
		// 判断
		if (e.target.dataset.id === '4') document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	})
}

// 创建数组
const youcetu_pic_contentArry = ['img/七猫中文公众号.png', 'img/七猫作家APP.png']
// 创建相册标签
const establishment_youcetu_liFour = document.createElement('img')
const establishment_youcetu_liFourTwo = document.createElement('img')
// 给属性添加数据绑定
establishment_youcetu_liFour.src = youcetu_pic_contentArry[0]
establishment_youcetu_liFourTwo.src = youcetu_pic_contentArry[1]
// 获取变量
const youcetu_a_liFour = document.querySelector('.all .youcetu a:nth-child(4)')
const youcetu_a_liFourTwo = document.querySelector('.youcetu a:first-child')
// 追加
youcetu_a_liFour.appendChild(establishment_youcetu_liFour)
youcetu_a_liFourTwo.append(establishment_youcetu_liFourTwo)
// 添加样式
establishment_youcetu_liFour.classList.add('youcetu_pic_cssOne')
establishment_youcetu_liFourTwo.classList.add('youcetu_pic_cssTwo')
// 鼠标悬停图片效果事件
establishment_youcetu_liFourTwo.addEventListener('mouseenter', function() {
	// 
	youcetu_a_liFourTwo.style.color = "#fff"
})
establishment_youcetu_liFour.addEventListener('mouseenter', function() {
	// document.querySelector('.all .youcetu a:nth-child(4)')
	document.querySelector('.all .youcetu a:nth-child(4)').style.color = "#fff"
})

// 离开图片的时候
establishment_youcetu_liFour.addEventListener('mouseleave', function() {
	// 
	document.querySelector('.all .youcetu a:nth-child(4)').style.color = "black"
})
establishment_youcetu_liFourTwo.addEventListener('mouseleave', function() {
	// 
	document.querySelector('.all .youcetu a:first-child').style.color = "black"
})

// 鼠标经过公众号
document.querySelector('.all .youcetu a:nth-child(4)').addEventListener('mouseenter', () => {
	// 
	establishment_youcetu_liFour.style.display = 'block'

})
document.querySelector('.all .youcetu a:first-child').addEventListener('mouseenter', () => {
	// 
	establishment_youcetu_liFourTwo.style.display = 'block'
})

// 鼠标离开公众号
document.querySelector('.all .youcetu a:nth-child(4)').addEventListener('mouseleave', () => {
	// 
	establishment_youcetu_liFour.style.display = 'none'
})
document.querySelector('.all .youcetu a:first-child').addEventListener('mouseleave', () => {
	// 
	establishment_youcetu_liFourTwo.style.display = 'none'
})