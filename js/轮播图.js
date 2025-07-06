var swiper = new Swiper(".mySwiper", {
	loop: true,

	autoplay: {
		delay: 4000
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
	},

	mousewheel: {
		invert: true,
	},

	keyboard: true,

	effect: 'creative',

	// 翻折旋转立体效果
	creativeEffect: {
		prev: {
			shadow: true,
			origin: "left center",
			translate: ["-5%", 0, -200],
			rotate: [0, 100, 0],
		},

		next: {
			origin: "right center",
			translate: ["5%", 0, -200],
			rotate: [0, -100, 0],
		},
	},
	// 滚动条进度
	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	},
})

// 
const a = document.querySelector('.swiper-button-next')
const b = document.querySelector('.swiper-button-prev')
// 
document.querySelector('.swiper').addEventListener('mouseenter', () => {
	// 
	a.style.display = 'block'
	b.style.display = 'block'
})
document.querySelector('.swiper').addEventListener('mouseleave', () => {
	// 
	a.style.display = 'none'
	b.style.display = 'none'
})