var swiper = new Swiper(".mySwiper", {
	loop: true,

	autoplay: {
		delay: 3000
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// 
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
})