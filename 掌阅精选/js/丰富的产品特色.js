// 
const iconfont = document.querySelectorAll('.rich-productsOne ul li')

for (let i = 0; i <= iconfont.length - 1; i++) {

	iconfont[i].addEventListener('click', function(e) {

		if (e.target.dataset.id) {

			document.querySelector('.rich-productsOne ul .addColor').classList.remove('addColor')

			document.querySelector(`.rich-productsOne ul li:nth-child(${i+1})`).classList.add('addColor')

		}

		document.querySelector('.rr .pageOne').classList.remove('pageOne')

		document.querySelector(`.rr .page:nth-child(${i+1})`).classList.add('pageOne')

	})

}