// 全局变量
const submitOne = document.querySelector('.white-area button')
const x = document.querySelector('.white-area #x')
const numbera = document.querySelector('.white-area .numbera')
const pwd = document.querySelector('.white-area .pwd')
const checkBox = document.querySelector('.white-area #checkBox')

// 填充
submitOne.innerHTML = '登录'

// 登录事件
submitOne.addEventListener('click', () => {
	// 美化登录
	checkBox.style.border = '2px solid pink'

	// 判断手机号与验证码的业务输入的情况(正则表达式)
	if (numbera.value.match(/^1[3-9]\d{9}$/) && pwd.value.match(/\d{7}/) && document.querySelector(
			'.white-area #checkBox').checked ===
		true && numbera.value.trim() && pwd.value.trim()) confirm('输入了')

	// 判断账号与密码不能为空的提示
	if (numbera.value === '' && pwd.value === '' && document.querySelector(
			'.white-area #checkBox').checked ===
		true) {
		// 
		const contentArry = ['输入的手机号码不能为空!', '验证码不能为空!']

		// 
		document.querySelector('.two_input #spanOne').innerHTML = contentArry[0]
		document.querySelector('.two_input #spanTwo').innerHTML = contentArry[1]

		// 中途点击，禁用按钮
		submitOne.disabled = true

		// 输入账号与密码不能为空的提示的间歇函数 => 封装函数
		function timer() {
			//
			document.querySelector('.two_input #spanOne').innerHTML = ''
			document.querySelector('.two_input #spanTwo').innerHTML = ''

			// 清除定时器
			clearInterval(ti)

			// 倒数计时完后，按钮解冻
			submitOne.disabled = false
		}
		// 调用一次3s函数
		let ti = setInterval(timer, 2000)
	}

	// 
	if (numbera.value !== '' && pwd.value === '' && document.querySelector('.white-area #checkBox').checked ===
		true) {
		// 
		document.querySelector('.two_input #spanTwo').innerHTML = '验证码不能为空!'
		// 
		// 中途点击，禁用按钮
		submitOne.disabled = true

		// 输入账号与密码不能为空的提示的间歇函数 => 封装函数
		function timer() {
			//
			document.querySelector('.two_input #spanTwo').innerHTML = ''

			// 清除定时器
			clearInterval(ti)

			// 倒数计时完后，按钮解冻
			submitOne.disabled = false
		}
		// 调用一次3s函数
		let ti = setInterval(timer, 2000)

	} else if (pwd.value !== '' && numbera.value === '' && document.querySelector('.white-area #checkBox')
		.checked ===
		true) {
		// 
		document.querySelector('.two_input #spanOne').innerHTML = '输入的手机号码不能为空!'

		// 中途点击，禁用按钮
		submitOne.disabled = true

		// 输入账号与密码不能为空的提示的间歇函数 => 封装函数
		function timer() {
			//
			document.querySelector('.two_input #spanOne').innerHTML = ''

			// 清除定时器
			clearInterval(ti)

			// 倒数计时完后，按钮解冻
			submitOne.disabled = false
		}
		// 调用一次3s函数
		let ti = setInterval(timer, 2000)

	}

})

// 清除那些登录界面业务的内容
x.addEventListener('click', () => {
	// 
	numbera.value = ''
	numbera.value.trim()

	// 
	pwd.value = ''
	pwd.value.trim()

	// 
	checkBox.checked = false

	// 
	document.querySelector('.two_input #spanOne').innerHTML = ''
	document.querySelector('.two_input #spanTwo').innerHTML = ''
})

// 
numbera.addEventListener('click', () => document.querySelector('.two_input #spanOne').innerHTML = '')
pwd.addEventListener('click', () => document.querySelector('.two_input #spanTwo').innerHTML = '')