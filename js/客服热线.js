// 
const input = document.querySelector('.kefu-sendMessage ul li:nth-child(1) input')

const iconfont = document.querySelector('.icon-fasong')

const kefu_contence = document.querySelector('.kefu-content')

// 
function China_timer() {

	const messageTimer = new Date()

	return `${messageTimer.getHours().toString().padStart(2,'0')}:${messageTimer.getMinutes().toString().padStart(2,'0')}:${messageTimer.getSeconds().toString().padStart(2,'0')}`

}


// 
iconfont.addEventListener('click', () => {

	const div = document.createElement('div')

	const divOne = document.createElement('div')

	const divAll = document.createElement('div')

	const ICD_img = document.createElement('img')

	divOne.innerHTML = China_timer()

	ICD_img.className = 'pic'

	ICD_img.src = 'img/default_tx.svg'

	divAll.className = 'messageAll'

	div.className = 'sendMessage'

	divOne.className = 'nowTime'

	if (input.value.trim() === '') return

	div.innerHTML = input.value

	divAll.appendChild(div)

	divAll.appendChild(divOne)

	divAll.appendChild(ICD_img)

	kefu_contence.appendChild(divAll)

	input.value = ''

	kefu_contence.scrollTop = kefu_contence.scrollHeight

})

// 
input.addEventListener('keydown', e => {

	if (e.key === 'Enter') {

		iconfont.click()

	}

})

// 
const contence_read = document.querySelector('.content-read ul a:nth-child(3) li ')

contence_read.addEventListener('click', () => {

	const kefu_bodyPage = document.querySelector('.kefu-bodyPage')

	kefu_bodyPage.style.display = 'block'

	document.body.style.overflow = 'hidden'

})

const pageNav = document.querySelector('#pageNav a:nth-child(5) li')

pageNav.addEventListener('click', () => {

	contence_read.click()

})

// 

const stateOneButton = document.querySelector('.stateOne button')

stateOneButton.addEventListener('click', () => {

	document.querySelector('.kefu-bodyPage').style.display = 'none'

	document.body.style.overflow = 'auto'

})