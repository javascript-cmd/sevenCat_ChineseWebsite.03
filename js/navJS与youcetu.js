// 全局变量
const input_one = document.querySelector('.header .nav .right div input')
const input_two = document.querySelector('.a nav .right div input')

// 搜索框的文本API交互式文本事件与隐形导航栏的搜索框的文本事件互相绑定数据
input_one.addEventListener('input', function() {
	// 数据绑定
	input_two.value = this.value
})
input_two.addEventListener('input', () => {
	// 把数据绑定
	input_one.value = input_two.value
})

// 
document.querySelector('.header .nav .right span').addEventListener('click', e => {
	// 防止默认行为发生
	e.preventDefault()
})